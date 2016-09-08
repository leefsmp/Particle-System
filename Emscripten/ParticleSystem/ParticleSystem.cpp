
#include "ParticleSystem.h"
#include "ParticleEmitter.h"
#include "MagneticField.h"
#include "Particle.h"
#include "Field.h"
#include <stdio.h>

///////////////////////////////////////////////////////////////////
// constructor
//
///////////////////////////////////////////////////////////////////
ParticleSystem::ParticleSystem (int maxParticles) {

	setMaxParticles(maxParticles);

	_maxParticles = maxParticles;

	_dof.set(1, 1, 1);
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
ParticleSystem::~ParticleSystem () {

	for (std::vector<ParticleEmitter*>::iterator 
		it = _emitters.begin(); 
		it != _emitters.end(); ++it) {
			delete (*it);
	}

	for (std::vector<Field*>::iterator 
		it = _fields.begin(); 
		it != _fields.end(); ++it) {
			delete (*it);
	}

	for (std::vector<Particle*>::iterator 
		it = _particles.begin(); 
		it != _particles.end(); ++it) {
			delete (*it);
	}
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::destroy () {

	for (std::vector<Particle*>::iterator
		it = _particles.begin();
		it != _particles.end(); ++it) {
			delete (*it);
	}

	_particles.clear();
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::setMaxParticles (int maxParticles) {

	for (std::vector<Particle*>::iterator
		it = _particles.begin();
		it != _particles.end(); ++it) {
			delete (*it);
	}

	_particles.clear();

	while(!_recycleBin.empty()) {

		_recycleBin.pop();
	}

  	_maxParticles = maxParticles;

	for(int i=0; i < maxParticles; ++i) {

		Particle* pParticle = new Particle();

		if (pParticle) {

			_particles.push_back(pParticle);

      		pParticle->setDof(&_dof);
		}

		pParticle->setRecycled(true);

		_recycleBin.push(pParticle);
	}
}

int ParticleSystem::getMaxParticles () {

  	return _maxParticles;
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::setDof (double x, double y, double z) {

  _dof.set(x, y, z);
}

///////////////////////////////////////////////////////////////////
// Returns object by id
//
///////////////////////////////////////////////////////////////////
BaseObject* ParticleSystem::getObjectById (int id) {

	for (std::vector<ParticleEmitter*>::iterator 
		it = _emitters.begin(); 
		it != _emitters.end(); ++it) {
			
			if((*it)->getId() == id) {
				return (*it);
			}
	}

	for (std::vector<Field*>::iterator 
		it = _fields.begin(); 
		it != _fields.end(); ++it) {
			
			if((*it)->getId() == id) {
				return (*it);
			}
	}

	return NULL;
}

///////////////////////////////////////////////////////////////////
// Returns emitter by id
//
///////////////////////////////////////////////////////////////////
ParticleEmitter* ParticleSystem::getEmitter (int id) {

for (std::vector<ParticleEmitter*>::iterator
		it = _emitters.begin();
		it != _emitters.end(); ++it) {

			if((*it)->getId() == id) {
				return (ParticleEmitter*)(*it);
			}
	}

	return NULL;
}

///////////////////////////////////////////////////////////////////
// Returns magnetic field by id
//
///////////////////////////////////////////////////////////////////
MagneticField* ParticleSystem::getMagneticField (int id) {

  	for (std::vector<Field*>::iterator
  		it = _fields.begin();
  		it != _fields.end(); ++it) {

  			if((*it)->getId() == id) {
  				return (MagneticField*)(*it);
  			}
  	}

  	return NULL;
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::initParticleLoop () {

	_pIt = _particles.begin();
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
Particle* ParticleSystem::nextParticle () {

	return (_pIt != _particles.end() ? (*(_pIt++)) : NULL);
}

///////////////////////////////////////////////////////////////////
// Adds emitter object
//
///////////////////////////////////////////////////////////////////
ParticleEmitter* ParticleSystem::addEmitter (int id) {

	ParticleEmitter* pEmitter = new ParticleEmitter(id);

	_emitters.push_back(pEmitter);

	return pEmitter;
}

///////////////////////////////////////////////////////////////////
// Adds emitter object
//
///////////////////////////////////////////////////////////////////
MagneticField* ParticleSystem::addMagneticField (int id) {

	MagneticField* pField = new MagneticField(id);

	_fields.push_back(pField);

	return pField;
}

///////////////////////////////////////////////////////////////////
// updates simulation
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::step (double dt) {

	addNewParticles(dt);
	filterParticles(dt);
}

///////////////////////////////////////////////////////////////////
// add new particles step
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::addNewParticles (double dt) {

	for(std::vector<ParticleEmitter*>::iterator it = 
		_emitters.begin(); 
		it != _emitters.end(); ++it) {
		
		for (int i = 0; i < (*it)->emitNumber(dt); ++i) {
			
			Particle* pParticle = popRecycle();

			if (pParticle) {

			  (*it)->emitParticle(pParticle);
			}
		}
	}
}

///////////////////////////////////////////////////////////////////
// pop a particle from recycle bin
//
///////////////////////////////////////////////////////////////////
Particle* ParticleSystem::popRecycle () {

  	if (!_recycleBin.empty()) {

		Particle* pParticle = _recycleBin.front();

		_recycleBin.pop();

		pParticle->reset();

		return pParticle;
	}

	return NULL;
}

///////////////////////////////////////////////////////////////////
// push a particle to the recycle bin
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::pushRecycle (Particle* pParticle) {

    pParticle->setRecycled(true);

    _recycleBin.push(pParticle);
}

///////////////////////////////////////////////////////////////////
// filter particles step
//
///////////////////////////////////////////////////////////////////
bool ParticleSystem::filterParticle (Particle* pParticle) {

	if (pParticle->getRecycled()) {

		return true;
	}

	if (pParticle->getLifeTime() < 0) {

		pushRecycle(pParticle);
		return true;
	}

	return false;
}

///////////////////////////////////////////////////////////////////
// filter particles step
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::filterParticles (double dt) {

	for(std::vector<Particle*>::iterator
	  pIt = _particles.begin();
		pIt != _particles.end(); ++pIt) {
		
		if(!filterParticle((*pIt))) {
			
			(*pIt)->getAcceleration()->set(0, 0, 0);

			for(std::vector<Field*>::iterator
			  fIt = _fields.begin();
				fIt != _fields.end(); ++fIt) {

        		MagneticField* pField = (MagneticField*)(*fIt);

				pField->applyForce((*pIt));
			}

			(*pIt)->step(dt);
		}
	}
}
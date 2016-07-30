
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
ParticleSystem::ParticleSystem(int maxParticles) {

	_maxParticles = maxParticles;

	_emittedParticles = 0;

	_dof.set(1, 1, 1);

	for(int i = 0; i <_maxParticles; ++i) {
	
		Particle* pParticle = new Particle();

		_particles.push_back(pParticle);

		pParticle->getDof()->set(_dof);

		pushRecycle(pParticle);
	}
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
ParticleSystem::~ParticleSystem() {

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
// Returns object by id
//
///////////////////////////////////////////////////////////////////
Object* ParticleSystem::getObjectById(int id) {

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
//
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::initParticleLoop() {

	_pIt = _particles.begin();
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
Particle* ParticleSystem::nextParticle() {

	return (_pIt != _particles.end() ? (*(_pIt++)) : NULL);
}

///////////////////////////////////////////////////////////////////
// Adds emitter object
//
///////////////////////////////////////////////////////////////////
ParticleEmitter* ParticleSystem::addEmitter(int id) {

	ParticleEmitter* pEmitter = new ParticleEmitter(id);

	_emitters.push_back(pEmitter);

	return pEmitter;
}

///////////////////////////////////////////////////////////////////
// Adds emitter object
//
///////////////////////////////////////////////////////////////////
MagneticField* ParticleSystem::addMagneticField(int id) {

	MagneticField* pField = new MagneticField(id);

	_fields.push_back(pField);

	return pField;
}

///////////////////////////////////////////////////////////////////
// updates simulation
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::step(double dt) {

	addNewParticles(dt);
	filterParticles(dt);
}

///////////////////////////////////////////////////////////////////
// add new particles step
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::addNewParticles(double dt) {

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
Particle* ParticleSystem::popRecycle() {

	if(_emittedParticles > _maxParticles - 1) {

		return NULL;
	}

    if (_recycleBin.empty()) {

		return NULL;
	}

	++_emittedParticles;

	Particle* pParticle = _recycleBin.front();

	_recycleBin.pop();
	
	pParticle->reset();

	return pParticle;
}

///////////////////////////////////////////////////////////////////
// push a particle to the recycle bin
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::pushRecycle(Particle* pParticle) {

    pParticle->setRecycled(true);

    _recycleBin.push(pParticle);

    --_emittedParticles;
}

///////////////////////////////////////////////////////////////////
// filter particles step
//
///////////////////////////////////////////////////////////////////
bool ParticleSystem::filterParticle (Particle* pParticle) {

	if (pParticle->getRecycled()) {

      return false;
    }

    if (pParticle->getLifetime() < 0) {

      pushRecycle(pParticle);
      return false;
    }

    return true;
}

///////////////////////////////////////////////////////////////////
// filter particles step
//
///////////////////////////////////////////////////////////////////
void ParticleSystem::filterParticles (double dt) {

	for(std::vector<Particle*>::iterator pIt = _particles.begin(); 
		pIt != _particles.end(); ++pIt) {
		
		if(filterParticle((*pIt))) {
			
			(*pIt)->getAcceleration()->set(0, 0, 0);

			for(std::vector<Field*>::iterator fIt = _fields.begin(); 
				fIt != _fields.end(); ++fIt) {
			
				(*fIt)->applyForce((*pIt));
			}

			(*pIt)->step(dt);
		}
	}
}
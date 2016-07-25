#include <stdio.h>
#include "ParticleSystem.h"
#include "ParticleEmitter.h"
#include "MagneticField.h"
#include "Particle.h"

int main() {

	/*ParticleSystem* ps = new ParticleSystem(10);

	ParticleEmitter* pEmitter = ps->addEmitter(0);

	pEmitter->getPosition()->set(0,0,0);
	pEmitter->getOffset()->set(0,0,0);
	pEmitter->setEmissionRate(10);
	pEmitter->setSpread(0.1);
	pEmitter->setVelocity(5);
	pEmitter->setCharge(-1);

	MagneticField* pField = ps->addMagneticField(1);

	pField->getPosition()->set(10,0,0);
	pField->getOffset()->set(0,0,0);
	pField->setForce(1);

	for (int i=0; i < 10; ++i) {

		ps->step(1);
	}

	int idx;

	Particle* pParticle = NULL;

	idx = 0;

	ps->initParticleLoop(); 

	while((pParticle = ps->nextParticle()) != NULL) {
  
		printf("Particle[%.2d]: [%f, %f, %f]\n", idx++, 
			pParticle->getPosition()->x, 
			pParticle->getPosition()->y, 
			pParticle->getPosition()->z);
	}

	delete ps;*/

	//scanf("Press any key to exit");

	return 0;
};



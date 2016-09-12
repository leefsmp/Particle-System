#include <stdio.h>
#include "ParticleSystem.h"
#include "ParticleEmitter.h"
#include "MagneticField.h"
#include "EventHandler.h"
#include "Particle.h"

void runTest() {

	// Create new particle system with 10 particles max

	ParticleSystem * ps = new ParticleSystem(10);

	EventHandler recycleHandler;

  	std::string recycleEvent = "particle.recycle";

	ps->on(&recycleEvent, &recycleHandler);

	// Add a particle emitter and set its properties

	ParticleEmitter* pEmitter = ps->addEmitter(0);

  	pEmitter->setOffset(0,0,0);
	pEmitter->setPosition(0,0,0);
	pEmitter->setEmissionRate(10);
	pEmitter->setSpread(0.1);
	pEmitter->setVelocity(5);
	pEmitter->setCharge(-1);

	// Add a magnetic field and set its properties

	MagneticField* pField = ps->addMagneticField(1);

	pField->setPosition(10,0,0);
	pField->setOffset(0,0,0);
	pField->setForce(1);

	// runs for 50 steps
	for (int i=0; i < 50; ++i) {

		ps->step(1);
	}

	// Dump particles position

	int idx;

	Particle* pParticle = NULL;

	idx = 0;

	ps->initParticleLoop();

	while((pParticle = ps->nextParticle()) != NULL) {

		printf("Particle[%.2d]: [%f, %f, %f]\n", idx++,
			pParticle->getPosition()->getX(),
			pParticle->getPosition()->getY(),
			pParticle->getPosition()->getZ());
	}

	delete ps;
}

int main() {

  	//runTest();

	return 0;
};



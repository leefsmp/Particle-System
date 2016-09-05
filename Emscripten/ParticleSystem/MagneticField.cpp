#include "MagneticField.h"
#include <stdio.h>
#include <math.h>

///////////////////////////////////////////////////////////////////
// constructor
//
///////////////////////////////////////////////////////////////////
MagneticField::MagneticField(int id): Field (id, 1) {

}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
void MagneticField::setForce(double force) {

	_force = force;
}

double MagneticField::getForce() {

	return _force;
}

///////////////////////////////////////////////////////////////////
// apply force
//
///////////////////////////////////////////////////////////////////
void MagneticField::applyForce (Particle* pParticle) {

    double dX = _position.x - pParticle->getPosition()->x;
    double dY = _position.y - pParticle->getPosition()->y;
    double dZ = _position.z - pParticle->getPosition()->z;

    double f = pParticle->getCharge() * _force / pow((
      dX * dX +
      dY * dY +
      dZ * dZ), 1.5);

    if (fabs(f) > 0.001) {
      
      pParticle->getAcceleration()->x += dX * f;
      pParticle->getAcceleration()->y += dY * f;
      pParticle->getAcceleration()->z += dZ * f;
    }
}
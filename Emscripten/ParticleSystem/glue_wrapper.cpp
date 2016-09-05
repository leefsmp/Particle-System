#include "ParticleEmitter.h"
#include "ParticleSystem.h"
#include "MagneticField.h"
#include "Particle.h"
#include "Vector.h"
#include <string>

class EmString: public std::string {

public:

    EmString() {

    }

    EmString (const char* s) {
        assign(s);
    }

    EmString & operator=(const std::string &input) {
        assign(input);
        return *this;
    }
};

#include "glue.cpp"

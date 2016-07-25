#!/bin/sh

emcc -s NO_EXIT_RUNTIME=1 release/ParticleSystem.bc --post-js ParticleSystem/glue.js -o dist/Emscripten.ParticleSystem.js


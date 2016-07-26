#!/bin/sh

mkdir -p dist/asmjs
emcc -s NO_EXIT_RUNTIME=1 -s release/ParticleSystem.bc --post-js ParticleSystem/glue.js -o dist/asmjs/ParticleSystem.asm.js


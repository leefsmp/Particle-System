#!/bin/sh

mkdir -p dist/asmjs

emcc -O3 --memory-init-file 0 release/ParticleSystem.bc --post-js ParticleSystem/glue.js -o dist/asmjs/ParticleSystem.asm.js \
   -s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
   -s ELIMINATE_DUPLICATE_FUNCTIONS=1 \
   -s ABORTING_MALLOC=1 \
   -s NO_EXIT_RUNTIME=1 \
   -s NO_FILESYSTEM=1
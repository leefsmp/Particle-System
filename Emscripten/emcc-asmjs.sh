#!/bin/sh

mkdir -p dist/asmjs

emcc -O3 release/ParticleSystem.bc --post-js ParticleSystem/glue.js -o dist/wasm/ParticleSystem.js \
    -s NO_EXIT_RUNTIME=1 \
    -s ABORTING_MALLOC=1 \
    -s NO_FILESYSTEM=1 \
    -s AGGRESSIVE_VARIABLE_ELIMINATION=1
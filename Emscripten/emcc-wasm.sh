#!/bin/sh

mkdir -p dist/wasm

emcc -O3 release/ParticleSystem.bc --post-js ParticleSystem/glue.js -o dist/wasm/ParticleSystem.js \
    -s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
    -s ELIMINATE_DUPLICATE_FUNCTIONS=1 \
    -s ABORTING_MALLOC=1 \
    -s NO_EXIT_RUNTIME=1 \
    -s NO_FILESYSTEM=1 \
    -s BINARYEN=1



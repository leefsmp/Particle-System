#Particle System

##Description

A Particle System experiment designed to benchmark web technologies from a non trivial piece of code: ES6, Emscripten and Web Assembly (yet to come)

##Setup/Usage Instructions

- Building the WebAssembly version:
 (yet to come ...)



- Building the Emscripten version:
     
     [Install the Emscripten toolchain](http://kripken.github.io/emscripten-site/docs/getting_started/index.html)
      . cd particle-system/Emscriptem
      . make
      . emcc -s NO_EXIT_RUNTIME=1 release/ParticleSystem.bc --post-js ParticleSystem/glue.js -o dist/Emscripten.ParticleSystem.js
      (or run emcc.sh script for mac/linux users. Assumes emcc is in your PATH)
        


- Building the ES6 version and the Test page:

   	. npm install
       . npm run build-dev / npm run build-prod
       . Open Test/ParticleTest.html 
      (open file in browser or serve it from the HTTP server of your choice)

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

##Written by 

Written by [Philippe Leefsma](https://twitter.com/F3lipek)




# Compiler flags...
CPP_COMPILER = emcc
C_COMPILER = emcc

# Include paths...
Release_Include_Path=-I./headers

# Library paths...
Release_Library_Path=

# Additional libraries...
Release_Libraries=

# Preprocessor definitions...
Release_Preprocessor_Definitions=-D GCC_BUILD -D NDEBUG -D _CONSOLE 

# Implictly linked object files...
Release_Implicitly_Linked_Objects=

# Compiler flags...
Release_Compiler_Flags=-O2 

# Builds all configurations for this project...
.PHONY: build_all_configurations
build_all_configurations: Release

# Builds the Release configuration...
.PHONY: Release
Release: create_folders release/Field.o release/MagneticField.o release/main.o release/Object.o release/Particle.o release/ParticleEmitter.o release/ParticleSystem.o release/Vector.o release/glue_wrapper.o
	emcc release/Field.o release/MagneticField.o release/main.o release/Object.o release/Particle.o release/ParticleEmitter.o release/ParticleSystem.o release/Vector.o release/glue_wrapper.o  $(Release_Library_Path) $(Release_Libraries) -Wl,-rpath,./ -o ../release/ParticleSystem.bc

# Compiles file glue_wrapper.cpp for the Release configuration...
-include release/glue_wrapper.d
release/glue_wrapper.o: glue_wrapper.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c glue_wrapper.cpp $(Release_Include_Path) -o release/glue_wrapper.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM glue_wrapper.cpp $(Release_Include_Path) > release/glue_wrapper.d

# Compiles file Field.cpp for the Release configuration...
-include release/Field.d
release/Field.o: Field.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c Field.cpp $(Release_Include_Path) -o release/Field.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM Field.cpp $(Release_Include_Path) > release/Field.d

# Compiles file MagneticField.cpp for the Release configuration...
-include release/MagneticField.d
release/MagneticField.o: MagneticField.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c MagneticField.cpp $(Release_Include_Path) -o release/MagneticField.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM MagneticField.cpp $(Release_Include_Path) > release/MagneticField.d

# Compiles file main.cpp for the Release configuration...
-include release/main.d
release/main.o: main.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c main.cpp $(Release_Include_Path) -o release/main.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM main.cpp $(Release_Include_Path) > release/main.d

# Compiles file Object.cpp for the Release configuration...
-include release/Object.d
release/Object.o: Object.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c Object.cpp $(Release_Include_Path) -o release/Object.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM Object.cpp $(Release_Include_Path) > release/Object.d

# Compiles file Particle.cpp for the Release configuration...
-include release/Particle.d
release/Particle.o: Particle.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c Particle.cpp $(Release_Include_Path) -o release/Particle.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM Particle.cpp $(Release_Include_Path) > release/Particle.d

# Compiles file ParticleEmitter.cpp for the Release configuration...
-include release/ParticleEmitter.d
release/ParticleEmitter.o: ParticleEmitter.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c ParticleEmitter.cpp $(Release_Include_Path) -o release/ParticleEmitter.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM ParticleEmitter.cpp $(Release_Include_Path) > release/ParticleEmitter.d

# Compiles file ParticleSystem.cpp for the Release configuration...
-include release/ParticleSystem.d
release/ParticleSystem.o: ParticleSystem.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c ParticleSystem.cpp $(Release_Include_Path) -o release/ParticleSystem.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM ParticleSystem.cpp $(Release_Include_Path) > release/ParticleSystem.d

# Compiles file Vector.cpp for the Release configuration...
-include release/Vector.d
release/Vector.o: Vector.cpp
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -c Vector.cpp $(Release_Include_Path) -o release/Vector.o
	$(CPP_COMPILER) $(Release_Preprocessor_Definitions) $(Release_Compiler_Flags) -MM Vector.cpp $(Release_Include_Path) > release/Vector.d


# Creates the intermediate and output folders for each configuration...
.PHONY: create_folders
create_folders:
	mkdir -p release/source
	mkdir -p ../release

# Cleans intermediate and output files (objects, libraries, executables)...
.PHONY: clean
clean:
	rm -f release/*.o
	rm -f release/*.d
	rm -f ../release/*.a
	rm -f ../release/*.so
	rm -f ../release/*.dll
	rm -f ../release/*.exe


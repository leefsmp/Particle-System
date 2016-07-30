# Builds all the projects in the solution...
.PHONY: all_projects
all_projects: ParticleSystem 

# Builds project 'ParticleSystem'...
.PHONY: ParticleSystem
ParticleSystem: 
	make --directory="ParticleSystem/" --file=ParticleSystem.makefile

# Cleans all projects...
.PHONY: clean
clean:
	make --directory="ParticleSystem/" --file=ParticleSystem.makefile clean
	rm -f release/*.bc


default: bundle

clean:
	rm -rf output node_modules .spago .cache dist

output: deps
	npx spago build

build: output

test: build
	npx spago test

bundle: dist

dist: build
	npx spago bundle-module --main Main --to output/Main-bundled.js
	npx parcel build src/index.html

dev: build
	npx parcel start src/index.html

deps: node_modules .spago

node_modules:
	npm i

.spago: node_modules
	npx spago install

.PHONY: deps dev bundle test build default clean

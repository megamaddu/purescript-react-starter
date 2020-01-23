default: bundle

clean:
	rm -rf output node_modules .spago .cache dist

output: deps
	npx spago build
	true > output/Main-bundled.js

build: output

test: build
	npx spago test

bundle: dist

dist: build
	npx spago bundle-module --main Main --to output/Main-bundled.js
	rm -rf dist
	npx parcel build src/index.html --public-url ./

deploy: dist
	npx gh-pages -d dist

dev: build
	npx parcel start src/index.html

deps: node_modules .spago

node_modules:
	npm ci

.spago: node_modules
	npx spago install

.PHONY: deps dev bundle test build default clean

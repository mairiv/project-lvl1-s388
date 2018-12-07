install: 
	npm install


publish: 
	npm publish


start: 
	npx babel-node -- src/bin/brain-games.js

lint: 
	npx eslint .
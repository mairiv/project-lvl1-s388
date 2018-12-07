install: 
	npm install


publish: 
	npm publish


start: 
	npx babel-node -- src/bin/brain-games.js

start_even: 
	npx babel-node -- src/bin/brain-even.js

lint: 
	npx eslint .
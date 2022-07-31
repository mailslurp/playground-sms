node_modules:
	npm install

dev: node_modules
	npm start

test: node_modules
	npm run test

build: test
	npm run build

deploy: build
	npx s3-website deploy
	npx cloudfront-invalidate-cli -- E1AXSDDKI9HE0H /\* 


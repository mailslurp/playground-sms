include .env

node_modules:
	npm install

dev: node_modules
	npm start

build: node_modules
	npm run build

deploy: build
	npx s3-website deploy
	npx cloudfront-invalidate-cli -- $(REACT_APP_cloudfront_distribution) /\*


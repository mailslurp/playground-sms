NODE_VERSION=$(shell node --version)
ifneq (,$(findstring v18, $(NODE_VERSION)))
NODE_OPTIONS=--openssl-legacy-provider
else
NODE_OPTIONS=
endif

 
node_modules:
	NODE_OPTIONS=$(NODE_OPTIONS) npm install

dev: node_modules
	NODE_OPTIONS=$(NODE_OPTIONS) npm start

test: node_modules
	NODE_OPTIONS=$(NODE_OPTIONS) npm run test

build: test
	NODE_OPTIONS=$(NODE_OPTIONS) npm run build

deploy: build
	npx s3-website deploy
	npx cloudfront-invalidate-cli -- E1AXSDDKI9HE0H /\* 


install:
	yarn install

upgrade:
	ncu --upgrade
	yarn install

remove:
	sudo rm -rf node_modules/
	rm yarn.lock
	rm yarn-error.log

run:
	yarn start

remove-3000:
	npx kill-port 3000

build:
	yarn run build

prepare:
	git add .
	yarn prettier
	yarn lint
	yarn lint-staged



install:
	yarn install

upgrade:
	ncu --upgrade
	yarn install

remove:
	sudo rm -rf node_modules/
	rm yarn-error.log
	rm yarn.lock

run:
	yarn start

remove-3000:
	sudo lsof -i tcp:3000
	sudo kill -9 PID

build:
	yarn build


start:
	yarn install
	yarn build:dev
	yarn concurrently --kill-all --handle-input \
		"hugo server -D -F --log --verboseLog" \
		"yarn watch"

.PHONY: start

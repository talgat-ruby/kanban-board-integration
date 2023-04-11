.PHONY: pull-latest
pull-latest:
		$(MAKE) pull-latest/api
		$(MAKE) pull-latest/ui

.PHONY: pull-latest/api
pull-latest/api: api/
		git fetch api main
		git subtree pull --prefix api api main --squash

.PHONY: pull-latest/ui
pull-latest/ui: ui/
		git fetch ui main
		git subtree pull --prefix ui ui main --squash

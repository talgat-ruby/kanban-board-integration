ARGUMENTS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
CFLAGS = -c

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

.PHONY: hasura
hasura:
		docker compose exec hasura-cli hasura $(ARGUMENTS)

.PHONY: db
db:
		docker compose exec db $(ARGUMENTS)

.PHONY: db-reset, bash
db-reset:
		$(MAKE) db bash -- $(CFLAGS) "'psql -U \$$POSTGRES_USER -d \$$POSTGRES_DB < /home/cmd/reset.sql'"

.PHONY: db-reset-all
db-reset-all:
		$(MAKE) db-reset || true
		$(MAKE) hasura migrate delete -- --all --server || true
		$(MAKE) hasura migrate apply || true
		$(MAKE) hasura seed apply || true

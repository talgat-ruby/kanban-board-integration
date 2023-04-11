.PHONY: install
install:
	go install github.com/99designs/gqlgen@v0.17.20

.PHONY: clean/graphql
clean/graphql:
	@rm -rf graph/generated

.PHONY: generate/graphql
generate/graphql: graph/main.go
	$(MAKE) clean/graphql
	go generate $<

.PHONY: generate
generate:
	$(MAKE) generate/graphql

.PHONY: start
start:
	air

.PHONY: test
test:
	go test -v --tags=all ./...

.PHONY: test/integration
test/integration:
	go test -v --tags=integration ./...

.PHONY: test/unit
test/unit:
	go test -v --tags=unit ./...

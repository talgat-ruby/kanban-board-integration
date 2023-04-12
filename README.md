# kanban-board-integration

## Getting started

1. Clone project

2. Run docker compose

```bash
docker compose up --build
```

3. Migrate DB

```bash
make hasura migrate apply
```

4. Seed DB

```bash
make hasura seed apply
```

Ignore if error appears

## Update

1. Pull latest changes

```bash
make pull-latest
```

2. Run migrations

```bash
make hasura migrate apply
```

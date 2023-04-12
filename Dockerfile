FROM golang:1.20 AS builder
WORKDIR /app
COPY . .
RUN go build -o api .

FROM alpine:3.17 AS runner

# Add Maintainer Info
LABEL maintainer="Talgat Saribayev <talgat.s@protonmail.com>"

WORKDIR /app
COPY --from=builder /app/api api
EXPOSE 80
CMD ["/app/api"]



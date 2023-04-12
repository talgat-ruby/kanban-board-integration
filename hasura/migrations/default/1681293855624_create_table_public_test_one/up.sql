CREATE TABLE "public"."test_one" ("name" text NOT NULL, "id" uuid NOT NULL DEFAULT gen_random_uuid(), "age" integer NOT NULL DEFAULT 0, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."test_one" IS E'test_one remove later';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

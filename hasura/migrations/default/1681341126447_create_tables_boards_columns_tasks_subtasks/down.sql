alter table "public"."columns" drop constraint "columns_board_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."columns" add column "board_id" uuid
--  null;

alter table "public"."tasks" drop constraint "tasks_column_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."tasks" add column "column_id" uuid
--  null;

alter table "public"."subtasks" drop constraint "subtasks_task_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."subtasks" add column "task_d" uuid
--  null;

DROP TABLE "public"."boards";

DROP TABLE "public"."columns";

DROP TABLE "public"."tasks";

DROP TABLE "public"."subtasks";

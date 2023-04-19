alter table "public"."subtasks" add constraint "subtasks_task_id_position_key" unique ("task_id", "position");

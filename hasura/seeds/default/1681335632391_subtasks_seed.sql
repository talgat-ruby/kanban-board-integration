INSERT INTO public.subtasks (id, title, is_completed, task_id, position)
VALUES
	('ffd86eb7-329d-42fe-87bf-6d25dc82d10e', 'Sign up page', true, '4f130bf2-8681-4857-9c2f-4f3d0178e2b2', 0),
	('c428496c-d9f9-4569-b06c-25eafa554a90', 'Sign in page', false, '4f130bf2-8681-4857-9c2f-4f3d0178e2b2', 1),
	('b335025a-d51a-46df-b741-bf3d72d0f2e0', 'Welcome page', false, '4f130bf2-8681-4857-9c2f-4f3d0178e2b2', 2),
	('d5362441-c39f-484f-a837-32d0a4af57dc', 'Search page', false, '0619cb97-29cb-4c5f-9cf8-34b5c9052341', 0),
	('913de5e5-b85e-4fb0-80cf-0782a4c47679', 'Account page', false, '18f1ba38-ee1e-459c-bcef-9509df611925', 0),
	('f00183ad-f6f0-4a97-b323-b9baa2087228', 'Billing page', false, '18f1ba38-ee1e-459c-bcef-9509df611925', 1),
	('2670988e-796a-43e3-b40e-bb9e245db637', 'Internal testing', false, 'fee9d1eb-8aba-4774-82a1-69eddf39247b', 0),
	('57da6b11-385b-4c22-938d-8035555e5e07', 'External testing', false, 'fee9d1eb-8aba-4774-82a1-69eddf39247b', 1),
	('87e3d410-1515-446b-86ff-6c6004acf670', 'Settings - Account page', true, '3a59c05b-3f4d-4787-82b1-fb00e2deea12', 0),
	('f6e50e07-5049-4fa2-94db-0791acb9bf41', 'Settings - Billing page', true, '3a59c05b-3f4d-4787-82b1-fb00e2deea12', 1),
	('c2feb69f-55b5-4246-bf76-768f5c9cb40e', 'Search page', false, '3a59c05b-3f4d-4787-82b1-fb00e2deea12', 2),
	('1de17f74-52a1-4475-a67b-e893a7ec8bb5', 'Upgrade plan', true, '4d962de1-4dba-463d-adbf-e2a79423583f', 0),
	('95c8ecc1-6bb8-4e21-8576-cb1340a3e043', 'Cancel plan', true, '4d962de1-4dba-463d-adbf-e2a79423583f', 1),
	('a410cf0d-2ecc-4263-8817-254186997812', 'Update payment method', false, '4d962de1-4dba-463d-adbf-e2a79423583f', 2),
	('35015404-69a6-4e49-ac97-84fda6d340d6', 'Sign up page', true, 'f7169b34-a74b-4044-bdba-262e04a3128a', 0),
	('554633d4-ae3c-419d-b230-777104baf753', 'Sign in page', false, 'f7169b34-a74b-4044-bdba-262e04a3128a', 1),
	('50979fc7-7332-46d6-9f50-63aa550b1031', 'Welcome page', false, 'f7169b34-a74b-4044-bdba-262e04a3128a', 2),
	('9bb736e2-68aa-41c3-90f8-9932c15fafdd', 'Add search endpoint', true, '787b87da-bd42-4634-abce-d237a108ffed', 0),
	('6a7ae040-e102-444d-9794-55f9d8db3438', 'Define search filters', false, '787b87da-bd42-4634-abce-d237a108ffed', 1),
	('52a0c9d0-b6de-41ae-a454-306027f06c3e', 'Define user model', true, 'b7e047f1-3e71-47ba-9173-f2f2ca707e71', 0),
	('7838fdd1-435d-4634-826d-4b42a27f07c5', 'Add auth endpoints', false, 'b7e047f1-3e71-47ba-9173-f2f2ca707e71', 1),
	('1dcdb471-0f2e-47ab-bab4-fe0d94f7e682', 'Research competitor pricing and business models', true, '0f3fc00e-4172-4ce9-817a-4a78f4b2c4bc', 0),
	('339c62ce-dae9-4832-9070-d5501967e3a2', 'Outline a business model that works for our solution', false, '0f3fc00e-4172-4ce9-817a-4a78f4b2c4bc', 1),
	('59949b30-d88c-489d-9ffe-0bc17d2a4c2d', 'Talk to potential customers about our proposed solution and ask for fair price expectancy', false, '0f3fc00e-4172-4ce9-817a-4a78f4b2c4bc', 2),
	('06472e51-b364-4af8-8aca-a53c64f7f333', 'Complete 5 wireframe prototype tests', true, '24a245bb-eaf3-4abb-a927-c2666817d64c', 3),
	('1ee7295a-06ed-4ec5-ac7b-750b84726c7b', 'Create clickable wireframe prototype in Balsamiq', true, '444aac42-4e5a-48be-babd-78c507f7b816', 0),
	('847b8fc5-0896-4dfe-a227-c3dd244df2d5', 'Meet to review notes from previous tests and plan changes', true, '17f4a759-fc05-4902-9ab0-12fb8d0d08ca', 0),
	('60c7a2d0-7e05-43dc-9153-283f872f5886', 'Make changes to paper prototypes', true, '17f4a759-fc05-4902-9ab0-12fb8d0d08ca', 1),
	('847eae24-9887-4744-b7a7-5535188a3349', 'Conduct 5 usability tests', true, '17f4a759-fc05-4902-9ab0-12fb8d0d08ca', 2),
	('470ddf8d-6710-4e51-9e91-431923e94978', 'Create paper prototypes for version one', true, 'ca2c03db-23d6-4a72-a4cc-de4efe429f1a', 0),
	('1fad011d-fade-46e2-bac7-f877d47311a8', 'Complete 10 usability tests', true, 'ca2c03db-23d6-4a72-a4cc-de4efe429f1a', 1),
	('5de1f8a4-bbd4-4110-a5e1-ffead4a83288', 'Interview 10 prospective customers', true, 'bc01fac9-a74c-406e-920e-60311e51c80b', 0),
	('0e950d7d-aa06-465f-8d41-0202dbe6df2b', 'Find direct and indirect competitors', true, '65358dbe-a0b9-4f86-8d39-17988201619a', 0),
	('63c20ad3-fe31-456d-8142-b4c05c8c7d99', 'SWOT analysis for each competitor', true, '65358dbe-a0b9-4f86-8d39-17988201619a', 1),
	('76c546b2-56a9-425a-a048-7c43d7b2d697', 'Write up research analysis', true, '65927cd6-00ca-4cf8-aac5-0c86ecf0b102', 0),
	('ef5829e2-8082-458e-8681-edf5c0a690bd', 'Calculate TAM', true, '65927cd6-00ca-4cf8-aac5-0c86ecf0b102', 1),
	('ccdb6b5d-9926-4ee1-984c-d831a88185f8', 'Find hunter', false, '4e7f0871-5661-4142-88c1-66568c7a142d', 0),
	('f8de5255-7b99-4999-87d2-74b5ba4e1c44', 'Gather assets', false, '4e7f0871-5661-4142-88c1-66568c7a142d', 1),
	('de67e407-efb8-4a01-a4f3-1ab08e3920f2', 'Draft product page', false, '4e7f0871-5661-4142-88c1-66568c7a142d', 2),
	('7337deb3-ffd1-48d5-adf8-c068092a0ce0', 'Notify customers', false, '4e7f0871-5661-4142-88c1-66568c7a142d', 3),
	('ccbb332a-b27c-4fad-aded-693768f0517e', 'Notify network', false, '4e7f0871-5661-4142-88c1-66568c7a142d', 4),
	('ac23fe0f-2cd2-435f-a56c-a4c9f560bae6', 'Launch!', false, '4e7f0871-5661-4142-88c1-66568c7a142d', 5),
	('c8ad1f1a-6b2f-45be-ac3d-f68401b7ca2f', 'Draft out HN post', false, '1bab167b-ce9a-4089-a8e2-8b946de8f16e', 0),
	('ec0f6ada-677c-44e8-ba4c-5254ba807062', 'Get feedback and refine', false, '1bab167b-ce9a-4089-a8e2-8b946de8f16e', 1),
	('16090af9-40d5-4818-9c25-f8073173720a', 'Publish post', false, '1bab167b-ce9a-4089-a8e2-8b946de8f16e', 2),
	('e172a69b-9893-4219-96eb-91fb6119708d', 'Write article', false, '050a27a8-4e0b-4acf-903a-9fbac8f87280', 0),
	('ac872f33-18a7-4f17-86eb-2bdb4a18e815', 'Publish on LinkedIn', false, '050a27a8-4e0b-4acf-903a-9fbac8f87280', 1),
	('3157a61b-b71a-4237-a1d4-36258f4c06de', 'Publish on Inndie Hackers', false, '050a27a8-4e0b-4acf-903a-9fbac8f87280', 2),
	('5d7efdee-9791-45d6-9310-72a37733e9ea', 'Publish on Medium', false, '050a27a8-4e0b-4acf-903a-9fbac8f87280', 3),
	('a2b6a3b8-e341-4773-bf46-d36bde820875', 'Launch privately to our waitlist', false, '70835eea-1904-459d-afa2-77901db8cdae', 0),
	('3243af04-d428-4200-9344-c4f762e9b169', 'Launch publicly on PH, HN, etc.', false, '70835eea-1904-459d-afa2-77901db8cdae', 1),
	('9d6d80e0-3543-483a-b2e7-972846db5e4a', 'Interview 10 customers', false, 'd2dda1d0-791d-42f8-8317-0587927274f4', 0),
	('d40688d5-eec5-41ea-a5b7-730f206d42e4', 'Review common customer pain points and suggestions', false, 'd2dda1d0-791d-42f8-8317-0587927274f4', 1),
	('faee2537-355f-42bc-9c70-5a05126eae31', 'Outline next steps for our roadmap', false, 'd2dda1d0-791d-42f8-8317-0587927274f4', 2)

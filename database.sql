
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"(
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (80) NOT NULL,
"email" VARCHAR (250),
"username" VARCHAR (80) UNIQUE NOT NULL,
"password" VARCHAR (1000) NOT NULL,
"profile_url" VARCHAR (250)
);

CREATE TABLE "clothing"(
"id" serial PRIMARY KEY,
"user_id" INT REFERENCES "user",
"type" VARCHAR (100),
"kind" VARCHAR (80),
"brand" VARCHAR (100),
"image_url" VARCHAR (250),
"color" VARCHAR (100),
"material" VARCHAR (100),
"description" TEXT,
"date_worn" DATE
);

-- Clothing GET all items
SELECT * FROM "clothing";

-- Clothing POST 
INSERT INTO "clothing" ("type", "kind", "brand", "image_url", "color", "material", "description", "date_worn") 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);

-- Clothing GET selected item
SELECT * FROM "clothing" WHERE "id"=$1;

-- Clothing PUT selected item
UPDATE "clothing" SET "type" = $1, "kind" = $2, "brand" = $3, "image_url" = $4, "color" = $5, "material" = $6, "description" = $7, "date_worn" = $8, WHERE "id" = $9;

-- Clothing DELETE selected item
DELETE FROM "clothing" WHERE "id"=$1;

-- Update selected user // PUT
UPDATE "user" SET "first_name" = $1, "email" = $2, "username" = $3, "password" = $4, "profile_url" = $5 WHERE "id" = $6;
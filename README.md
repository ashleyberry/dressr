# dressr
_Duration: 10 days_

## Description

- Inspired by the masterpiece film 'Clueless,' dressr is a responsive, full-stack mobile application which allows a user to create their own personalized virtual closet to access at any time. The user can add to their virtual closet, edit an item, search through their wardrobe, and even assistance from the app with pairing an outfit together.

This application uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `dressr` and create a `user` table:

```SQL
CREATE TABLE "user"(
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (80) NOT NULL,
"email" VARCHAR (250),
"username" VARCHAR (80) UNIQUE NOT NULL,
"password" VARCHAR (1000) NOT NULL,
"profile_url" VARCHAR (250)
);
```

Next, create a `type` table:

```SQL
CREATE TABLE "type"(
"id" SERIAL PRIMARY KEY,
"type" VARCHAR (80) 
);
```

Insert the following into your database:

```SQL
INSERT INTO "type"("type") VALUES ('pants'), ('jacket'), ('blazer'), ('dress'), ('vest'), ('sweater'), ('tank'), ('sweatpants'), ('blouse'), ('shirt'), ('jeans');
```

Finally, create a `clothing` table:

```SQL
CREATE TABLE "clothing"(
"id" serial PRIMARY KEY,
"user_id" INT REFERENCES "user",
"type" VARCHAR (100),
"kind" VARCHAR (80),
"brand" VARCHAR (100),
"image_url" TEXT,
"color" VARCHAR (100),
"material" VARCHAR (100),
"description" TEXT,
"date_worn" DATE
);
```

If you would like to name your database something else, you will need to change `dressr` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

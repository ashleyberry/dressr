/**
 * End goal:
 * Update a user's first name
 * 
 * PUT /api/user/:id
 * {
 *    first_name: ashley
 * }
 */

// Tell pool.js to use the test database
process.env.TEST = true;

// Setup supertest
const supertest = require('supertest');
const app = require('./server');
const agent = supertest.agent(app);

const pool = require('./modules/pool');

describe('Updating a users first name', () => {
  let user;

    beforeEach(async() => {
    // Clean up my user table
    await pool.query('DELETE FROM "user"')

    // SETUP: Register a new user
    let registerRes = await agent
      .post( '/api/user/register' )
      .send({
        first_name: 'ashley',
        email: 'test@test.com',
        username: 'smash',
        password: '123123',
        profile_url: ''
      });
    expect( registerRes.statusCode ).toBe( 201 );
    user = registerRes.body;
 
  // SETUP: Login as our new user
  let loginRes = await agent
  .post('/api/user/login')
  .send({ first_name: 'ashley',
  email: 'test@test.com',
  username: 'smash',
  password: '123123',
  profile_url: '' });
  expect(loginRes.statusCode).toBe(200);
} )

  test(`should add an item`, async() => {
    // POST /clothing
    let postResponse = await agent
      .post(`/api/clothing`)
      .send({
        type: 'sweatpants',
        kind: 'bottom',
        brand: 'gucci',
        image_url: 'lkajsdf',
        color: 'pink',
        material: 'laal',
        description: 'laksjdf',
        date_worn: '10-10-2020'
      });
    expect(postResponse.statusCode).toBe(201);
  });
})
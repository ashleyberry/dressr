const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log( 'in clothing GET')
    const query = `SELECT * FROM "clothing";`
    pool.query( query )
    .then( results => {
        res.send( results.rows );
    })
    .catch( error => {
        console.log( 'error in clothing GET',error );
        res.sendStatus(500);
    })
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log( 'req.body is:', req.body )
  const query = `INSERT INTO "clothing" ("type", "kind", "brand", "image_url", "color", "material", "description", "user_id") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
    pool.query(query, [ req.body.type, req.body.kind, req.body.brand, req.body.image_url, req.body.color, req.body.material, req.body.description, req.user.id ])
  .then(result => {
    res.sendStatus( 201 );
  }).catch(err => {
    console.log( err );
    res.sendStatus( 500 )
  })
});

/**
 * Update an item
 */
router.put('/:id', (req, res) => {
  console.log( 'in edit router:', req.body)
  const query = `
    UPDATE "clothing" 
    SET "type" = $1, 
    "kind" = $2, 
    "brand" = $3, 
    "image_url" = $4, 
    "color" = $5, 
    "material" = $6, 
    "description" = $7 
    WHERE "id" = $8;
`
  pool.query(query, [ req.body.type, req.body.kind, req.body.brand, req.body.image_url, req.body.color, req.body.material, req.body.description, req.body.id ])
  .then(() => 
      res.sendStatus(200))
  .catch(error => {
      console.log('ERROR:', error);
  })
});

module.exports = router;

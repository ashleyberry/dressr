const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all items
router.get('/', (req, res) => {
    console.log( 'in clothing GET')
    const query = `SELECT * FROM "clothing" JOIN "type" ON "type"."id" = "clothing"."type_id";
    `
    pool.query( query )
    .then( results => {
        res.send( results.rows );
    })
    .catch( error => {
        console.log( 'error in clothing GET',error );
        res.sendStatus( 500 );
    })
  });

// Delete a clothing item
router.delete('/:id', (req, res) => {
  console.log( 'in delete router:', req.params.id)
  const query = `DELETE FROM "clothing" WHERE "id"=$1;`
  pool.query(query, [req.params.id])
  .then(() => 
      res.sendStatus(200))
  .catch(error => {
      console.log('ERROR in clothing DELETE:', error);
      res.sendStatus( 500 )
  })
});

// Add a clothing item
router.post('/', (req, res) => {
  console.log( 'req.body is:', req.body )
  const query = `INSERT INTO "clothing" ("type_id", "kind", "brand", "image_url", "color", "material", "description", "user_id") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
    pool.query(query, [ req.body.type_id, req.body.kind, req.body.brand, req.body.image_url, req.body.color, req.body.material, req.body.description, req.user.id ])
  .then(result => {
    res.sendStatus( 201 );
  }).catch(err => {
    console.log( 'ERROR in clothing POST:', err );
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
    SET "type_id" = $1, 
    "kind" = $2, 
    "brand" = $3, 
    "image_url" = $4, 
    "color" = $5, 
    "material" = $6, 
    "description" = $7 
    WHERE "id" = $8;
`
  pool.query(query, [ req.body.type_id, req.body.kind, req.body.brand, req.body.image_url, req.body.color, req.body.material, req.body.description, req.body.id ])
  .then(() => 
      res.sendStatus(200))
  .catch(error => {
      console.log('ERROR:', error);
  })
});

module.exports = router;

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all types from the database
router.get('/', (req, res) => {
    console.log( 'in type.router.get' );
      const queryText = `SELECT * FROM "type" ORDER BY "type" ASC;`;
        pool.query( queryText )
            .then( ( result ) => {
                res.send( result.rows );
            })
            // catch for query
            .catch( ( error ) => {
                console.log( `Error on query ${error}` );
                res.sendStatus( 500 );
            });
    });

// get specific type from the database
router.get('/:id', (req, res) => {
  console.log( 'in type router, type id to retrieve:', req.params.id )
  let clothingId = req.params.id;
  // query to get clothing and types
  const queryText = `SELECT * FROM "clothing"
  JOIN "clothing_type" 
  ON "clothing_type"."clothing_id" = "clothing"."id"
  JOIN "type" 
  ON "clothing_type"."type_id" = "type"."id"
  WHERE "clothing"."id" = $1;`;
  pool.query( queryText, [ clothingId ] )
  .then( results => {
      res.send( results.rows );
  })
  .catch( error => {
      console.log( 'error in type router GET', error );
      res.sendStatus( 500 );
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
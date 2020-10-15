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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

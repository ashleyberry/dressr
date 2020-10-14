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
  // POST route code here
});

module.exports = router;

const router = require('express').Router();
const { computeCone } = require('../controllers/controllers');

router.post('/compute-cone', computeCone);

module.exports = router;
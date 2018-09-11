const router = require('express').Router();
const { create,update,remove,read } = require('../controllers/categoryController');

router.post('/',create);
router.put('/:id',update);
router.delete('/:id',remove);
router.get('/',read);

module.exports = router;
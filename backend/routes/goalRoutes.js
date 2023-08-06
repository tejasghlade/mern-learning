const express = require('express');
const { getGoals, postGoals, updateGoals, deleteGoals } = require('../controllers/goalController');
const router = express.Router();



router.route('/').get(getGoals).post(postGoals)

// router.get('/',getGoals)
// router.post('/',postGoals)


router.route('/:id').put(updateGoals).delete(deleteGoals)

// router.put('/:id',updateGoals)
// router.delete('/:id',deleteGoals)

module.exports = router
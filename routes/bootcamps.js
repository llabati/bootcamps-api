const express = require('express')

/*router.get('/', (req, res) => {
    res.sendStatus(200)
    res.send({ name: 'Julien' })
    res.write(`<h1>Hello ${name}!</h1>`)
    res.end()
})*/

const { 
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp
} = require('../controllers/bootcamps.js')

const router = express.Router()
/*
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' })
})

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: "Add a new bootcamp" })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp #${req.params.id}` })
})
*/

router
    .route('/').get(getBootcamps).post(createBootcamp)

router
    .route('/:id').get(getBootcamp).put(updateBootcamp)

module.exports = router
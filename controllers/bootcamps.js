// @desc    Get all bootcamps
// @route   GET /bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' })
}

// @desc    Get single bootcamp
// @route   GET /bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp #${ req.params.id }`})
}

// @desc    Create a new bootcamp
// @route   POST /bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Add a new bootcamp' })
}

// @desc    Update a bootcamp
// @route   PUT /bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp #${ req.params.id }` })
}


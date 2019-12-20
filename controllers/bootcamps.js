// GET - Get all bootcamps - Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Get all bootcamps'});
};

// GET - Get single bootcamps - Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Get a bootcamp ${req.params.id}`});
};

// POST - Create new bootcamp - Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'});
};

// PUT - Update a bootcamp - Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
};

// DELETE - Delete a bootcamp - Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
};


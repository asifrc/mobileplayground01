var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res) {
	res.sendfile(path.resolve('./views/mockup01.html'));
});

module.exports = router;
const router = require('express').Router(); // This imports express router library


// below allows me to create routes in a similar fashion as app.get in previous apps
router.get('/',(req,res,next) => {
  res.render('main/landing');
})

module.exports = router;

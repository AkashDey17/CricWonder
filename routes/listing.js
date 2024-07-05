const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedin, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



router.route("/")
.get( wrapAsync(listingController.index))
.post( isLoggedin,upload.single('listing[image]'),validateListing, wrapAsync( listingController.createListing
))



//New Route
router.get("/new", isLoggedin,listingController.renderNewForm);



router.route("/:id")
.get( wrapAsync( listingController.showListing
))
.put(isLoggedin,isOwner,upload.single('listing[image]'), wrapAsync(listingController.updateListing
))
.delete(isLoggedin,isOwner,wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit",isLoggedin,isOwner, wrapAsync( listingController.renderEditForm
));


module.exports = router;



//Show Route
// router.get("/:id", wrapAsync( listingController.showListing
// ));
//Index Route
// router.get("/", wrapAsync(listingController.index)
// );
//Create Route
// router.post("/" , isLoggedin, validateListing, wrapAsync( listingController.createListing
// )
// );


//Update Route
// router.put("/:id",isLoggedin,isOwner, wrapAsync(listingController.updateListing
// ));
//Delete Route
// router.delete("/:id",isLoggedin,isOwner,wrapAsync(listingController.destroyListing));
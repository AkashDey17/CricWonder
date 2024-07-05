const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedin, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");




//Review Route
router.post("/",isLoggedin ,validateReview, wrapAsync(reviewController.createReview));

//Delete Route for review

router.delete("/:reviewId",isLoggedin,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
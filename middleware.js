const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./Schema.js");

module.exports.isLoggedin = (req,res,next) => 
  
  {
       if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
  req.flash("error","you must be logged in to create listing");
 return res.redirect("/login");
}
next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
   if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
   }
   next();
}

module.exports.isOwner = async (req,res,next) => {
   let {id} = req.params;
  let listing = await Listing.findById(id);
  if(  !listing.owner.equals(res.locals.currUser._id)){
           req.flash("error", "You dont have permission to edit");
         return  res.redirect(`/listings/${id}`);
  }
  next();
}


//Middleware for Joi Server Side Validation for schema
module.exports.validateListing = (req,res,next) => {
   let {error} = listingSchema.validate(req.body);
   if(error){
     throw new ExpressError(400, error);
   }
   else{
     next();
   }
 };

 //Middleware for joi server side validation for reviews
module.exports.validateReview = (req,res,next) => {
   let {error} = reviewSchema.validate(req.body);
   if(error){
     let errMsg = error.details.map((el) => el.message).join(',');
     throw new ExpressError(400, errMsg);
   }
   else{
     next();
   }
 };


 module.exports.isReviewAuthor = async (req,res,next) => {
   let {id,reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if(  !review.author.equals(res.locals.currUser._id)){
           req.flash("error", "You did not create this review");
         return  res.redirect(`/listings/${id}`);
  }
  next();
}
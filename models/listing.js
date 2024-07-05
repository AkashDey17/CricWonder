const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
  title :{ 
   type : String,
   required : true,
  },
  description : String,
  image : { 
    // default :  "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    // type : String, 
    // set : (v) => v === "" ? "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" : v, 
    url : String,
    filename : String
  },
  price : Number,
  location : String,
  country : String,
  reviews : [
    {
      type : Schema.Types.ObjectId,
      ref : "Review"
    }
  ],
  owner : {
    type : Schema.Types.ObjectId,
    ref : "User",
  }
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing){
       await Review.deleteMany({_id : {$in : listing.reviews}})
  }
    });

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
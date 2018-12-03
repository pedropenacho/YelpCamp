var Campground = require("./models/campground"),
    mongoose   = require("mongoose"),
    Comment    = require("./models/comment");
    
var data = [
        {
            name: "Clouds Rest",
            image: "https://images.unsplash.com/photo-1538168929250-7746d352aac2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=086b0c3f60b83cc2e66f7d46cc7f374b&auto=format&fit=crop&w=500&q=60",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Desert Mesa",
            image: "https://images.unsplash.com/photo-1520294396198-7d7e6bd041f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=03f8b72366fbc2bd993a4428c3fd5635&auto=format&fit=crop&w=500&q=60",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Dreamy Sky",
            image: "https://images.unsplash.com/photo-1538592716926-9a321f0614ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8c06d9d038648c6c4e1ac43e63e332e&auto=format&fit=crop&w=500&q=60",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        } 
    ];
  
function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //  //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //add comments
        //             Comment.create(
        //                 {
        //                     text: "This place is great but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("created new comment");
        //                     }
                            
        //                 }
        //             );
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;

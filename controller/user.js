const User = require("../model/user")

exports.Register = (req, res) => {

    const user = new User(req.body);

    user.save((err, user) => {
        if (err) {
            return res.json(err).status(404)
        }
        return res.json({ Message: "USER STORED IN DB", user })
    })
}


exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.json(err)
        }

        return res.json(users)
    })
}


exports.getUserById = (req,res,next,name) => {

    User.findOne({_id : name  } , (err,user) => {
        if(err){
            return res.json(err)
        }
        
        req.user = user;
         next();
    } )

}

exports.updateUser = (req,res) => {

  const userID = req.user._id;

  User.findByIdAndUpdate(userID,{useFindAndModify : true},req.body,(err,updateUser) => {
      if(err){
          return res.json(err)
      }
      res.json({Message : "USER IS UPDATED"  , updateUser})
  } )

}

exports.deleteUser = (req,res) => {

    const userID = req.user._id;

    User.findByIdAndDelete(userID, (err,deleteUser) => {
            if(err){
                return res.json(err)
            }
            return res.json({Message : "User succesfully deleted from DB",deleteUser} )
    }  )

}
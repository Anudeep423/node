const express = require("express");

const Router = express.Router();

const {Register,getAllUsers,getUserById,updateUser,deleteUser} = require("../controller/user")

//params 
Router.param("userId"  ,  getUserById )


// routes
Router.post("/register" , Register )
 
Router.get("/getallusers", getAllUsers )

Router.get("/getauser/:userId" , () => {console.log("GOT IT")} )

Router.put("/updateuser/:userId" , updateUser  )

Router.delete("/deleteuser/:userId" , deleteUser  )

module.exports = Router;
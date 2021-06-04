const express = require("express");

const app = express();

const port = 8080;

const mongoose = require("mongoose");

const userRoutes = require("./view/user")

const bodyParser = require("body-parser")

//connecting to DB

mongoose.connect("mongodb+srv://Anudeep123:12345678aA$@cluster0.ni9vp.mongodb.net/practise?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => { console.log(`DB CONNECTED`) })
    .catch(err => { console.log(err) })

// middlewares  

    app.use(bodyParser.json())
    app.use(userRoutes);


    const role = 1;

    const isAdmin = (req,res,next) => {
        if(role === 1){
              next();  
        }else{
     res.json({Error : "You are not an admin"})
        }
    }


app.get("/products", isAdmin ,  (req, res) => {
    res.json({Message : "Welcome Admin", product1: "Car", product2: "Bike" }).status(200)
});




app.listen(port, () => {
    console.log(`server started running on port ${port} !!`)
})


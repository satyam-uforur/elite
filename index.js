const express = require("express");
const path = require("path");
const collection = require("./config");

const app = express();
// convert data into json format
app.use(express.json());
// Static file
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
//use EJS as the view engine
app.set("view engine", "ejs");


let msg=false;
let msg1=false;
let var1=0;
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    msg=false
    res.render("login",{msg});
});

app.get("/signup", (req, res) => {
    msg1=false
    res.render("signup",{msg1});
});
function hom(combcheck){
app.get("/home", (req, res) => {
    res.render("home",{combcheck});
});
app.get("/store", (req, res) => {
    res.render("store",{combcheck});
});
app.get("/bmi", (req, res) => {
    res.render("bmi",{combcheck});
});
app.get("/diet", (req, res) => {
    res.render("diet",{combcheck});
});
app.get("/contact", (req, res) => {
    res.render("contact",{combcheck});
});

}
  

// Register User
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        password: req.body.password
    }
    
    // Check if the username already exists in the database
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        msg1=true;
        res.render('signup',{msg1});
    } 
    else {
        collection.insertMany(data);
        console.log(data);
        res.render("login",{msg})
    }

});

app.post("/login", async (req, res) => {
    try {
        let msg={
            pass:"false",
            det:"false"
        }
        const check = await collection.findOne({ name: req.body.username });
        const use1 = await collection.find().limit(10);
        const combcheck = [check,...use1]
        
        ;
        if (!check) {
            res.send("User name cannot found")
        }
        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = ()=>
            {
                if(check.password===req.body.password)
                    {
                        return true;
                    }
                else
                {
                    return false;
                }
            }
        console.log(isPasswordMatch());
        if (!isPasswordMatch()) {
            msg=true
            res.render("login",{msg});

        }
        else {
            hom(combcheck);
            res.render("home",{combcheck});
        }
    }
    catch {
        msg=true
        res.render("login",{msg});
    }
});



app.listen(5000)

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/Todo");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to Mongo Database Atlas");
})
.catch((err)=>{
    console.log("Error occured in connecting to Mongo Database Atlas");
    console.log(err);
})

app.listen(process.env.PORT, ()=>{
    console.log("Server started at",process.env.PORT);
})
app.use(cors({
    origin: "https://abhi-todo-app-react.onrender.com"
}));
app.use("/todos", router);

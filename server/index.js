const express = require("express")
const cors = require("cors")
const { connection } = require("./db.js");
const { userRouter } = require("./routes/user.routes.js");
const { noteRouter } = require("./routes/note.routes.js");
require("dotenv").config({path: '/.env'});
const PORT = process.env.PORT

const app = express()
app.use(cors())


app.use(express.json())
app.use("/user", userRouter)
app.use("/note", noteRouter)


app.get("/", (req, res)=>{
    res.send({
        message: "API is Working fine"
    })
})

app.listen(PORT, async()=>{

    try {
        await connection
        console.log(`DataBase is connected Successfully`);
    } catch (error) {
        console.log(error);
    }

    console.log(`Server is running on ${PORT} Port`);
})

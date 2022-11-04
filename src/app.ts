import express from "express";
import cors from "cors";
import { formatInterface, postInterface, PostAnswers, operation } from "./utils/interface"
import { errorResponse, handleError } from "./utils/responses"

const app = express()
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    try {
        const details: formatInterface = {
            slackUsername: "Akinsuyi Taiwo",
            backend: true,
            age: 25,
            bio: `I am a backend developer(nodejs). Asides coding i enjoy playing football and video games. I'm looking forward to getting better with being a developer.`
        }
        return res.json(details);
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, "server error")
    }
});

app.post("/",(req, res) => {
    try{
        const{x,y, operation_type}:postInterface = req.body;
        if(!operation_type || !x || !y){
            return errorResponse( res, 400 , "you have input an invalid input")
        }
        const X = Number(x);
        const Y = Number(y);
    let answer;
    if(operation_type === "addition"){
        answer = X + Y;
    }else if(operation_type === "multiplication"){
        answer = X * Y;
    }else if(operation_type === "subtraction"){
        answer = X - Y;
    }else{
        return errorResponse(res, 400, "Invalid operation" )
    }
    const outcome : PostAnswers ={
        slackUsername:"akinsuyitaiwo",
        operation_type,
        answer
    };
    return res.json(outcome)
    }catch (error){
        return errorResponse(res, 500, "serve error");
    }
    app.use((req, res) => res.status(404).send({
        status: "error",
        error: "Not found",
        message: "Incorrect route .",
      }));
});

app.listen(3000, () => {
    console.log(`app is listening on ${port}`)
})

export default app;
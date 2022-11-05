import express from "express";
import cors from "cors";
import { formatInterface, postInterface, PostResult, operation } from "./utils/interface"
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
    let result;
    if(operation_type === "addition"){
        result
         = X + Y;
    }else if(operation_type === "multiplication"){
        result = X * Y;
    }else if(operation_type === "subtraction"){
        result = X - Y;
    }else{
        return errorResponse(res, 400, "Invalid operation" )
    }
    const outcome : PostResult ={
        slackUsername:"akinsuyitaiwo",
        operation_type,
        result
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

(async () => {
    app.listen(port, async () => {
      console.log(` API listening on ${port}`);
    });
  })();

export default app;
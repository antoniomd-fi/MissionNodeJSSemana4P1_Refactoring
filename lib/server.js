const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const req = require("express/lib/request");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response)=>{
    const mission = request.params.mission;
    const exploresInMission = ExplorerController.getExplorersByMission(mission);
    response.json(exploresInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response)=>{
    const mission= request.params.mission;
    const amount = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mssion: request.params.mission, quantity: amount});
});

app.get("/v1/explorers/usernames/:mission", (request, response)=>{
    const mission= request.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mssion: request.params.mission, explorers: usernames});
});

app.get("/v1/fizzbuzz/:score", (request, response)=>{
    const score= request.params.score;
    const trick = ExplorerController.getExplorerTrickByNumber(score)
    response.json({score: request.params.score, trick: trick});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
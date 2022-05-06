const ReaderService = require('./../../lib/utils/Reader')

describe ("Tests for ReaderService", () =>{

    test ("1.Read a JSON file" , ()=> {
        const explorer = {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
              "javascript",
              "reasonML",
              "elm"
            ]
          }
        const explorer2 = ReaderService.readJsonFile("explorers.json")
        expect(explorer2[0].name).toBe(explorer.name)
        expect(explorer2[0].githubUsername).toBe(explorer.githubUsername)
        expect(explorer2[0].score).toBe(explorer.score)
        expect(explorer2[0].mission).toBe(explorer.mission)
    });
    
})
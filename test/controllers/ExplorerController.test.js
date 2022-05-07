const ExplorerController = require("./../../lib/controllers/ExplorerController");
const ExploreController= require("./../../lib/controllers/ExplorerController");

describe ("Tests for ExploreService", () =>{

    test ("1. Filter By Mission" , ()=> {
        const explorersInMission = ExploreController.getExplorersByMission("node")
        expect(explorersInMission[0].mission).toBe("node");
        expect(explorersInMission[1].mission).toBe("node");
        expect(explorersInMission[2].mission).toBe("node");
        expect(explorersInMission[3].mission).toBe("node");
        expect(explorersInMission[4].mission).toBe("node");
        expect(explorersInMission[5].mission).toBe("node");
    });

    test ("2. Amount of Explorers" , ()=> {
        const explorersAmount = ExploreController.getExplorersAmountByMission("java");
        expect(explorersAmount.length).toBe(5);
    });

    test ("3. Explorers usernames" , ()=> {
        const explorersInMission = ExplorerController.getExplorersUsernamesByMission("java")
        expect(explorersInMission[0].githubUsername).toBe("ajolonauta6");
        expect(explorersInMission[1].githubUsername).toBe("ajolonauta7");
        expect(explorersInMission[2].githubUsername).toBe("ajolonauta8");
        expect(explorersInMission[3].githubUsername).toBe("ajolonauta9");
        expect(explorersInMission[4].githubUsername).toBe("ajolonauta10");
    });
});
const ExplorerController = require("./../../lib/controllers/ExplorerController");
const ExploreController= require("./../../lib/controllers/ExplorerController");

describe ("Tests for ExplorerController", () =>{

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
        expect(explorersAmount).toBe(5);
    });

    test ("3. Explorers usernames" , ()=> {
        const explorersInMission = ExplorerController.getExplorersUsernamesByMission("java")
        expect(explorersInMission[0]).toBe("ajolonauta6");
        expect(explorersInMission[1]).toBe("ajolonauta7");
        expect(explorersInMission[2]).toBe("ajolonauta8");
        expect(explorersInMission[3]).toBe("ajolonauta9");
        expect(explorersInMission[4]).toBe("ajolonauta10");
    });
});
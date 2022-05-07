const ExploreService = require("./../../lib/services/ExplorerService");
const read = require ("./../../lib/utils/Reader");

describe ("Tests for ExploreService", () =>{

    test ("1. Filter By Mission" , ()=> {
        const explorers = read.readJsonFile("explorers.json");
        const explorersInMission = ExploreService.filterByMission(explorers,"node");
        expect(explorersInMission[0].mission).toBe("node");
        expect(explorersInMission[1].mission).toBe("node");
        expect(explorersInMission[2].mission).toBe("node");
        expect(explorersInMission[3].mission).toBe("node");
        expect(explorersInMission[4].mission).toBe("node");
        expect(explorersInMission[5].mission).toBe("node");
    });

    test ("2. Amount of Explorers" , ()=> {
        const explorers = read.readJsonFile("explorers.json");
        const explorersInMission = ExploreService.filterByMission(explorers,"java");
        expect(explorersInMission.length).toBe(5);
    });

    test ("3. Explorers usernames" , ()=> {
        const explorers = read.readJsonFile("explorers.json");
        const explorersInMission = ExploreService.filterByMission(explorers,"java");
        expect(explorersInMission[0].githubUsername).toBe("ajolonauta6");
        expect(explorersInMission[1].githubUsername).toBe("ajolonauta7");
        expect(explorersInMission[2].githubUsername).toBe("ajolonauta8");
        expect(explorersInMission[3].githubUsername).toBe("ajolonauta9");
        expect(explorersInMission[4].githubUsername).toBe("ajolonauta10");
    });
});
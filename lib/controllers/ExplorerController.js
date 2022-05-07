const ExploreService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const read = require ("./../../lib/utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = read.readJsonFile("explorers.json");
        return ExploreService.filterByMission(explorers,mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = read.readJsonFile("explorers.json");
        return ExploreService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){
        const explorers = read.readJsonFile("explorers.json");
        return ExploreService.getAmountOfExplorersByMission(explorers,mission);
    }
}

module.exports = ExplorerController;
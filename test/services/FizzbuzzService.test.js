const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const read = require ("../../lib/utils/Reader");

describe ("Tests for Reader", () =>{

    test ("1. No divisible" , ()=> {
        const explorers = read.readJsonFile("explorers.json");
        const explore1 = FizzbuzzService.applyValidationInExplorer(explorers[0]);
        expect(explore1.trick).toBe(explorers[0].score);
    });

    test ("2. Module 3" , ()=> {
        const explorers = read.readJsonFile("explorers.json");
        const explore1 = FizzbuzzService.applyValidationInExplorer(explorers[2]);
        expect(explore1.trick).toBe("FIZZ");
    });

    test ("3. Module 5" , ()=> {
        const explorers = read.readJsonFile("explorers.json");
        const explore1 = FizzbuzzService.applyValidationInExplorer(explorers[4]);
        expect(explore1.trick).toBe("BUZZ");
    });

    test ("4. Module 3 & Module 5" , ()=> {
        const explorers = read.readJsonFile("explorers.json");
        const explore1 = FizzbuzzService.applyValidationInExplorer(explorers[14]);
        expect(explore1.trick).toBe("FIZZBUZZ");
    });

    test ("5. Get trick by Number" , ()=> {
        const trick = FizzbuzzService.applyValidationInNumber(3);
        const trick2 = FizzbuzzService.applyValidationInNumber(5);
        const trick3 = FizzbuzzService.applyValidationInNumber(15);
        expect(trick).toBe("FIZZ");
        expect(trick2).toBe("BUZZ");
        expect(trick3).toBe("FIZZBUZZ");
    });
    
});
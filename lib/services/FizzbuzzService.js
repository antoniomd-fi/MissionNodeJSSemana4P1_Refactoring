class FizzbuzzService{
    static applyValidationInExplorer(explore){
        if (explore.score%5==0 && explore.score%3==0){
            explore.trick="FIZZBUZZ";
        }
        else if(explore.score%5==0){
            explore.trick="BUZZ";
        }
        
        else if(explore.score%3==0){
            explore.trick="FIZZ";
        }
        else{
            explore.trick=explore.score;
        }
        return explore;
    }

    static applyValidationInNumber(number){
        var trick;
        if (number%5==0 && number%3==0){
            trick="FIZZBUZZ";
        }
        else if(number%5==0){
            trick="BUZZ";
        }
        
        else if(number%3==0){
            trick="FIZZ";
        }
        else{
            trick=number;
        }
        return trick;
    }
}

module.exports = FizzbuzzService;
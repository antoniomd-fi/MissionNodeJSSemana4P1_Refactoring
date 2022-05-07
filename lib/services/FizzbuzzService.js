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
}

module.exports = FizzbuzzService;
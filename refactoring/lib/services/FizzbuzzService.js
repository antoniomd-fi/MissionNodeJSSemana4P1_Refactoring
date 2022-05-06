class FizzbuzzService{
    static applyValidationInExplorer(explore){
        if (explore.score%3==0){
            explore.assign(trick,"FIZZ")
        }
        else if(explore.score%5==0){
            explore.assign(trick,"BUZZ")
        }
        
        else if(explore.score%3==0 && explore.score%5==0){
            explore.assign(trick,"FIZZBUZZ")
        }
        else{
            explore.assign(trick,explore.score)
        }
    }
}
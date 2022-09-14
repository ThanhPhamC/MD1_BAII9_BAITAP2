class Temperature {
    doC;
    constructor(doC) {
        this.doC = doC;
    }
    setDoC(doC){
        this.doC=doC
    }
    getDoC(){
        return this.doC
    }
    getDoF(){
        return (9*this.doC/5)+32
    }
    getDoKevlvin(){
        return this.doC+273.15
    }

}
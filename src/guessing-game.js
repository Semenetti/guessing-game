class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.leftSide = min, this.rightSide = max;
        }
    
        guess() {    
        return this.answer = Math.round((this.leftSide+this.rightSide)/2);
        }
    
        lower() {
        return this.rightSide = this.answer;
        }
    
        greater() {
        return this.leftSide = this.answer;
        }
}

module.exports = GuessingGame;

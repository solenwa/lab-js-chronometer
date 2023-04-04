class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalID = setInterval(() => {
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime +=1
    },1000)

  }

  getMinutes() {
    // ... your code goes here
    return this.minutes = Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.seconds = Math.floor(this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
      let valueString = value.toString();

      return valueString.padStart(2, `0`)
  }

  stop() {
    // ... your code goes here
      return clearInterval(this.intervalID);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutesSplit = this.computeTwoDigitNumber(this.getMinutes());
    let secondsSplit = this.computeTwoDigitNumber(this.getSeconds());


    return `${minutesSplit}:${secondsSplit}`
  }
}

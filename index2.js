// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTime } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');




nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTimesFlyOver(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printTimesFlyOver = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds((pass.risetime) - 25200);
  
    // The 25,200 seconds being subtracted are to return the time in PST
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
  
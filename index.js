// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTime } = require('./iss');



fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});



fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});

const coordsExample = { latitude: '49.26200', longitude: '-123.09230' };

fetchISSFlyOverTime(coordsExample, (error, passOverTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Fly Over Times:' , passOverTimes);
});
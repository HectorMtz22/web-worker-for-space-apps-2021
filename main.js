// const number = document.querySelector("#number");
// const buttonCalc = document.querySelector("#calc");

const start = Cesium.JulianDate.fromDate(new Date());
const totalSeconds = 60 * 30;
const stop = Cesium.JulianDate.addSeconds(
  start,
  totalSeconds,
  new Cesium.JulianDate()
);
const timestepInSeconds = 90;

if (window.Worker) {
  const myWorker = new Worker("workers/worker.js");

  //   buttonCalc.addEventListener("click", working);

  function working() {
    myWorker.postMessage({ start, totalSeconds, timestepInSeconds });
  }
  working();

  myWorker.onmessage = function (e) {
    // number.innerHTML = e.data;
    console.log(e.data);
  };
}

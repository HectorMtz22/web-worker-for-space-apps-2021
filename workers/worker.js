importScripts("./getPoints.js");
importScripts("./calculatePositions.js");

onmessage = function (e) {
  console.log("Worker: Message received from main script");
  let data = [];
  let { start, timestepInSeconds, totalSeconds } = e.data;
  (async () => {
    const rawData = await getPoints(10);
    for (const element of rawData) {
      const [id, name, tl1, tl2, description] = element;
      const res = calculatePositions({
        tl1,
        tl2,
        start,
        timestepInSeconds,
        totalSeconds,
      });
      const newData = {
        id,
        name,
        description,
        position: res,
      };
      data.push(newData);
    }
    postMessage(data);
  })();
};

importScripts("./getPosition.js");

const calculatePositions = async ({
  totalSeconds,
  timestepInSeconds,
  start,
  tl1,
  tl2,
}) => {
  try {
    const positionsOverTime = new Cesium.SampledPositionProperty();
    for (let i = 0; i < totalSeconds; i += timestepInSeconds) {
      const time = Cesium.JulianDate.addSeconds(start, i, new JulianDate());
      const jsDate = Cesium.JulianDate.toDate(time);
      const res = getPosition(tl1, tl2, jsDate);
      const position = Cesium.Cartesian3.fromDegrees(
        res.longitude,
        res.latitude,
        res.height
      );
      await (() => Cesium.positionsOverTime.addSample(time, position));
    }
    return positionsOverTime;
  } catch (e) {
    // console.error(e);
  }
};

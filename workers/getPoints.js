const getPoints = async (limit = 0) => {
  let response = await fetch("../data/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      if (limit) res = res.slice(0, limit);
      console.log(res);
      return res;
    });

  return response;
};

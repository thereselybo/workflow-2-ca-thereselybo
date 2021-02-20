fetch(
  "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json",
  {
    headers: {
      "Access-Control-Allow-Headers": "*",
    },
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    updateHumansInSpace(data);
  })
  .catch(function (error) {
    console.dir(error);
  });

interface HumansInSpace {
  number: number;
}

function updateHumansInSpace(humans: HumansInSpace) {
  const numberOfHumans = humans.number;
  const humansDiv = document.querySelector(
    "#humans-in-space .number"
  ) as HTMLDivElement;
  humansDiv.innerText = numberOfHumans.toString();
}

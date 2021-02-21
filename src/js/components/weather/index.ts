export default function handleWeather() {
  fetch(
    "https://api.nasa.gov/insight_weather/?api_key=yqhLhEsvHwxQuxrqhhAgVRGLkZUtZP4E7Zkbir3k&feedtype=json&ver=1.0"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayWeather(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// interface Weather {
//   [index: string]: Sol;
//   sol_keys?: string,

//   // solIndex: {
//   //   [sol: string]: {
//   //     First_UTC: string,

//   //   };
//   // };
// }

// interface Sol {
//   First_UTC: string,
//   PRE: {
//     mn: number,
//     mx: number,

//   }
// }

function displayWeather(weather: any) {
  //fix any later
  // console.dir(weather);
  const allSols = weather.sol_keys;
  const numberOfSols: number = allSols.length;
  // console.log(allSols.length);

  const mostRecentContainer = document.querySelector(
    "#most-recent-report"
  ) as HTMLDivElement;
  const moreReportsContainer = document.querySelector(
    "#more-reports"
  ) as HTMLDivElement;

  let sol: string;
  let fullDate: string;
  let numberedMonth: string;
  let month: string = "";
  let date: string;
  let highTemp: string;
  let lowTemp: string;

  for (let i = numberOfSols - 1; i >= 0; i--) {
    // console.log("hello");
    // console.log(numberOfSols);
    // console.log(i);
    // console.log("current sol:", allSols[i]);

    sol = allSols[i];
    const currentSolData = weather[sol];

    // console.log("current sol:", sol);
    // console.log("sol data", weather[sol]);

    fullDate = currentSolData.First_UTC;
    numberedMonth = fullDate.substring(5, 7);

    switch (numberedMonth) {
      case "01":
        month = "Jan";
        break;
      case "02":
        month = "Feb";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "Aug";
        break;
      case "09":
        month = "Sep";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
    }
    // getMonth(numberedMonth, month);

    date = fullDate.substring(8, 10);

    (() => {
      highTemp = currentSolData.PRE.mx.toString();
      // highTemp = highTemp.toString();
      highTemp = highTemp.split(".")[0];
    })();

    (() => {
      lowTemp = currentSolData.PRE.mn.toString();
      // lowTemp = lowTemp.toString();
      lowTemp = lowTemp.split(".")[0];
    })();

    if (i === numberOfSols - 1) {
      mostRecentContainer.innerHTML += `
                <div class="mars-date row">
                    <span class="sol">Sol ${sol}</span>
                    <span>${month} ${date}</span>
                </div>
                <div class="mars-temp row">
                    <span>High: ${highTemp} &#8451</span>
                    <span>Low: ${lowTemp} &#8451</span>
                </div>`;
    } else {
      moreReportsContainer.innerHTML += `
                <div class="report-div row">
                    <div class="mars-date">
                        <span class="sol">Sol ${sol}</span>
                        <span>${month} ${date}</span>
                    </div>
                    <div class="mars-temp">
                        <span>High: ${highTemp} &#8451</span>
                        <span>Low: ${lowTemp} &#8451</span>
                    </div>
                </div>`;
    }
  }
}

// function getMonth(numberedMonth: string, month: string) {
//   switch (numberedMonth) {
//     case "01":
//       month = "Jan";
//       break;
//     case "02":
//       month = "Feb";
//       break;
//     case "03":
//       month = "March";
//       break;
//     case "04":
//       month = "April";
//       break;
//     case "05":
//       month = "May";
//       break;
//     case "06":
//       month = "June";
//       break;
//     case "07":
//       month = "July";
//       break;
//     case "08":
//       month = "Aug";
//       break;
//     case "09":
//       month = "Sep";
//       break;
//     case "10":
//       month = "Oct";
//       break;
//     case "11":
//       month = "Nov";
//       break;
//     case "12":
//       month = "Dec";
//   }
// }

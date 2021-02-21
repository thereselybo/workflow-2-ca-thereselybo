export default function handleLaunches(): void {
  fetch("https://api.spacexdata.com/v3/launches/past")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      displayLaunch(json);
      // console.log(json);
    })
    .catch(function (error) {
      console.dir(error);
    });
}

interface Launches {
  [index: string]: Launch;
}

interface Launch {
  launch_date_local: string;
  mission_name: string;
  details: string;
}

function displayLaunch(json: Array<Launches>): void {
  const results = json.reverse();
  const container = document.querySelector(
    "#previous-missions"
  ) as HTMLDivElement;
  for (let i = 0; i < 20; i++) {
    const fullLaunchDate = results[i].launch_date_local.toString();
    const launchDate = fullLaunchDate.substring(0, 10);
    const missionName = results[i].mission_name;
    const details = results[i].details;

    container.innerHTML += `<div class="launch rectangle">
                                    <span class="line"></span>
                                    <span class="circle"></span>
                                    <span class="launch-date">${launchDate}</span>
                                    <h3 class="mission-name">${missionName}</h3>
                                    <p class="details">${details}</p>
                                </div>`;
  }
}

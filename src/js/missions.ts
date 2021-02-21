// <script src="./js/navigation.js"></script>
// <script src="./js/mission-countdown.js"></script>
// <script src="./js/timeline.js"></script>
// <script src="./js/loading.js"></script>

import displayNav from "./components/common/navigation/index";
import handleLoadingSpinner from "./components/common/loadingSpinner/index";
import handleLaunch from "./components/missionCountdown/index";
import handleLaunches from "./components/timeline/index";

displayNav();
handleLoadingSpinner();
handleLaunch();
handleLaunches();

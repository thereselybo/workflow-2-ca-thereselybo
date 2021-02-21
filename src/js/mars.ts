import displayNav from "./components/common/navigation/index";
import handleLoadingSpinner from "./components/common/loadingSpinner/index";
import updateTimer from "./components/marsCountdown/index";
import handleWeather from "./components/weather/index";

displayNav();
handleLoadingSpinner();
const countdownToManOnMars = setInterval(updateTimer, 1000);
handleWeather();

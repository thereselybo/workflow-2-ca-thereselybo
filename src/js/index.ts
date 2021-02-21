// <script src="../dist/js/navigation.js"></script>
// <script src="../dist/js/humans-in-space.js"></script>
// <script src="../dist/js/mission-countdown.js"></script>
// <script src="../dist/js/embed-map.js"></script>
// <script src="../dist/js/subscribe-form.js"></script>
// <script src="../dist/js/loading.js"></script>

import displayNav from "./components/common/navigation/index";
import handleLoadingSpinner from "./components/common/loadingSpinner/index";
import handleHumansInSpace from "./components/humansInSpace/index";
import handleLaunch from "./components/missionCountdown/index";
import handleMap from "./components/embedMap/index";
import handleSubscribeForm from "./components/subscribeForm/index";

displayNav();
handleLoadingSpinner();
handleHumansInSpace();
handleLaunch();
handleMap();
handleSubscribeForm();

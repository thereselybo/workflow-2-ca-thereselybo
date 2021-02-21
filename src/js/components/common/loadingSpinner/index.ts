const loadingWrapper = document.querySelector(
  ".loading-wrapper"
) as HTMLDivElement;
const loader = document.querySelector(".loader") as HTMLDivElement;

export default function handleLoadingSpinner(): void {
  fadeLoader();
  removeLoader();
  window.addEventListener("load", function () {
    setTimeout(fadeLoader, 1000);
    setTimeout(removeLoader, 1200);
  });
}

function fadeLoader(): void {
  loadingWrapper.style.opacity = "0";
  loadingWrapper.style.transition = "all ease-in .2s";

  loader.style.opacity = "0";
  loader.style.transition = "all ease-in .2s";
}

function removeLoader(): void {
  loadingWrapper.style.display = "none";
  loader.style.display = "none";
}

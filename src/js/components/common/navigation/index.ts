export default function displayNav(): void {
  const burger = document.querySelector(".burger") as HTMLDivElement;
  const nav = document.querySelector(".mainnav") as HTMLUListElement;

  burger.addEventListener("click", function (): void {
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  });
}

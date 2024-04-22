import "./index.css";

const loginBtn = document.getElementById("login");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");
const toggleTheme = document.getElementById("toggleTheme");
const switchToggle = document.getElementById("switchToggle");
const html = document.querySelector("html");
let isDarkmode = false;
const darkIcon = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-yellow-400">
<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`;
const lightIcon = `
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-6 h-6 stroke-white stroke-2"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
/>
</svg>
`;

toggleTheme.addEventListener("click", () => {
  isDarkmode = !isDarkmode;
  switchTheme();
});

function switchTheme() {
  if (isDarkmode) {
    html.classList.add("dark");
    switchToggle.classList.remove("bg-yellow-500", "-translate-x-2");
    switchToggle.classList.add("bg-gray-500", "translate-x-full");
    setTimeout(() => {
      switchToggle.innerHTML = darkIcon;
    }, 100);
  } else {
    html.classList.remove("dark");
    switchToggle.classList.add("bg-yellow-500", "-translate-x-2");
    switchToggle.classList.remove("bg-gray-500", "translate-x-full");
    setTimeout(() => {
      switchToggle.innerHTML = lightIcon;
    }, 100);
  }
}

loginBtn.addEventListener("click", function () {
  modal.classList.remove("opacity-0", "pointer-events-none");
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("opacity-0", "pointer-events-none");
});

function renderList(id) {
  const targetUl = document.getElementById(id);

  let svgColor = "text-primary";

  if (id === "list2") {
    svgColor = "text-white";
  }

  const templateLi = `
    <li class="flex items-center mt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-4 stroke-current ${svgColor}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        /></svg
      >item bla bla bla bla
    </li>
  `;

  let htmlStr = "";

  for (let i = 0; i < 5; i++) {
    htmlStr = htmlStr + templateLi;
  }

  targetUl.innerHTML = htmlStr;
}

renderList("list1");
renderList("list2");
renderList("list3");

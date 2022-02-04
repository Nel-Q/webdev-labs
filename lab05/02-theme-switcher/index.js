const toDefaultTheme = () => {
   document.querySelector("body").className = "";
};

const toOceanTheme = () => {
   document.querySelector("body").className = "ocean";
};

const toDesertTheme = () => {
   document.querySelector("body").className = "desert";
};

const toHighContrastTheme = () => {
   document.querySelector("body").className = "high-contrast";
};

document.querySelector("#default").addEventListener('click', toDefaultTheme);
document.querySelector("#ocean").addEventListener('click', toOceanTheme);
document.querySelector("#desert").addEventListener('click', toDesertTheme);
document.querySelector("#high-contrast").addEventListener('click', toHighContrastTheme);
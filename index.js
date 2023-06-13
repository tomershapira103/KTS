function openMenu() {
  document.getElementById("menuList").style.display = "block";
  window.addEventListener('click', function(e){
    if (!document.getElementById('menu').contains(e.target)){
      closeMenu();
    } 
  })
  window.addEventListener('touchend', function(e){
    if (!document.getElementById('menu').contains(e.target)){
      closeMenu();
    } 
  })
}

function closeMenu() {
  document.getElementById("menuList").style.display = "none";
}




const pageList = ["HomePage","AboutMethodPage","AboutTeamPage","AboutClinicPage","FaqPage"];

function showPage(pageName) {
  closeMenu();
  for (let item of pageList) {
    if (item==pageName) {
      document.getElementById(item).style.display = "flex";
    } else {
      document.getElementById(item).style.display = "none";
    }
    if (pageName=="HomePage") {
      document.getElementById("little-logo").style.display = "none";
    } else {
      document.getElementById("little-logo").style.display = "block";   
    }
  }
}

function showAccessibilityPage() {
  document.getElementById("AccessibilityPage").style.display="flex";
}

function hideAccessibilityPage() {
  document.getElementById("AccessibilityPage").style.display="none";
}

let largeFonts = false;
let largeSpacing = false;

function enlargeFonts() {
  if (largeFonts==false) {
    document.getElementById("accessibility--enlargeFonts").innerHTML = "הקטנת כתב";
    largeFonts = true;
  } else {
    document.getElementById("accessibility--enlargeFonts").innerHTML = "הגדלת כתב";
    largeFonts = false;
  }
}



function enlargeSpacing() {
  if (largeSpacing==false) {
    document.getElementById("accessibility--enlargeSpacing").innerHTML = "הקטנת מרווח שורות";
    largeSpacing = true;
  } else {
    document.getElementById("accessibility--enlargeSpacing").innerHTML = "הגדלת מרווח שורות";
    largeSpacing = false;
  }
}
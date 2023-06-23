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
    document.getElementById("accessibility-enlargeFonts-botton").innerHTML = "הקטנת כתב";
    var elements = document.getElementsByClassName('accessibility-text');
    largeFonts = true;
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.fontSize = "2em";
    }
  } else {
    document.getElementById("accessibility-enlargeFonts-botton").innerHTML = "הגדלת כתב";
    largeFonts = false;
    var elements = document.getElementsByClassName('accessibility-text');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.fontSize = "1em";
    }
  }
}



function enlargeSpacing() {
  if (largeSpacing==false) {
    document.getElementById("accessibility-enlargeSpacing-botton").innerHTML = "הקטנת מרווח שורות";
    largeSpacing = true;
    var elements = document.getElementsByClassName('accessibility-text');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.lineHeight = "2";

    }
  } else {
    document.getElementById("accessibility-enlargeSpacing-botton").innerHTML = "הגדלת מרווח שורות";
    largeSpacing = false;
    var elements = document.getElementsByClassName('accessibility-text');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.lineHeight = "normal";

    }
  }
}

function send_phone_number() {
  Email.send({
    SecureToken : "090a790b-86d5-4fa2-be32-5122ae16d337",
    To : 'kts.ortho@gmail.com',
    From : "kts.ortho@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}
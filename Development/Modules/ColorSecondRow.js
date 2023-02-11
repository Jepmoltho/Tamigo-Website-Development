function colorSecondRow() {
  var rowLength = document.getElementsByClassName("checkmark-row").length;
  for (i = 0; i < rowLength; i++) {
    if (i & 1) {
      //odd
      document.getElementsByClassName("checkmark-row")[i].style.background =
        "blue";
    } else {
      //even
      document.getElementsByClassName("checkmark-row")[i].style.background =
        "none";
    }
  }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks, mobileTabContent;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  var mobileTabContent = document.getElementsByClassName("pricing-acc-mobile");
  console.log(mobileTabContent);
  for (i = 0; i < mobileTabContent.length; i++) {
    console.log(mobileTabContent);
    mobileTabContent[i].style.display = "none";

    console.log(mobileTabContent[i]);
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  var mobileTabContent = document.getElementsByClassName("pricing-acc-mobile");
  for (i = 0; i < mobileTabContent.length; i++) {
    mobileTabContent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  var premrow, advrow, stanrow, essrow;
  premrow = document.getElementsByClassName("check-row-mobile-premium");
  advrow = document.getElementsByClassName("check-row-mobile-advanced");

  if (
    evt.currentTarget.classList.contains("premium-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    console.log("true");
    document.getElementsByClassName("premium-btn-dupl")[1].style.display =
      "block";
    for (i = 0; i < advrow.length; i++) {
      advrow[i].classList.add("row-to-be-hidden");
    }
  }
  if (
    evt.currentTarget.classList.contains("advanced-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    document.getElementsByClassName("advanced-btn-dupl")[1].style.display =
      "block";
  }
  if (
    evt.currentTarget.classList.contains("standard-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    document.getElementsByClassName("standard-btn-dupl")[1].style.display =
      "block";
  }
  if (
    evt.currentTarget.classList.contains("essential-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    document.getElementsByClassName("essential-btn-dupl")[1].style.display =
      "block";
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

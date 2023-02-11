function hideThemCheckMarks() {
  $(".hideCheckmark").css("display", "none");
  $(".hideCheckmarkRow").css("display", "none");
}

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
  standrow = document.getElementsByClassName("check-row-mobile-standard");
  essrow = document.getElementsByClassName("check-row-mobile-essential");

  if (
    evt.currentTarget.classList.contains("premium-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    console.log("true");
    document.getElementsByClassName("premium-btn-dupl")[1].style.display =
      "block";
    for (i = 0; i < advrow.length; i++) {
      advrow[i].classList.add("row-to-be-hidden");
      standrow[i].classList.add("row-to-be-hidden");
      essrow[i].classList.add("row-to-be-hidden");
      premrow[i].classList.remove("row-to-be-hidden");
    }
  }
  if (
    evt.currentTarget.classList.contains("advanced-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    document.getElementsByClassName("advanced-btn-dupl")[1].style.display =
      "block";
    //
    for (i = 0; i < advrow.length; i++) {
      standrow[i].classList.add("row-to-be-hidden");
      essrow[i].classList.add("row-to-be-hidden");
      premrow[i].classList.add("row-to-be-hidden");
      advrow[i].classList.remove("row-to-be-hidden");
    }
  }
  if (
    evt.currentTarget.classList.contains("standard-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    document.getElementsByClassName("standard-btn-dupl")[1].style.display =
      "block";
    for (i = 0; i < standrow.length; i++) {
      essrow[i].classList.add("row-to-be-hidden");
      premrow[i].classList.add("row-to-be-hidden");
      advrow[i].classList.add("row-to-be-hidden");
      standrow[i].classList.remove("row-to-be-hidden");
    }
  }
  if (
    evt.currentTarget.classList.contains("essential-btn-dupl") &&
    evt.currentTarget.classList.contains("active")
  ) {
    document.getElementsByClassName("essential-btn-dupl")[1].style.display =
      "block";
    for (i = 0; i < essrow.length; i++) {
      //console.log(advrow[i])
      premrow[i].classList.add("row-to-be-hidden");
      advrow[i].classList.add("row-to-be-hidden");
      standrow[i].classList.add("row-to-be-hidden");
      essrow[i].classList.remove("row-to-be-hidden");
    }
  }
  extendRowSize();
  hideThemCheckMarks();
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
hideThemCheckMarks();

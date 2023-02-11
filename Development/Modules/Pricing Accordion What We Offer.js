if (
  document
    .getElementsByClassName("padding-what-we-offer-container")[0]
    .classList.contains("d-False")
) {
  $(".padding-what-we-offer-container").css("display", "none");
}

if (
  document
    .getElementsByClassName("padding-what-we-offer-container")[0]
    .classList.contains("d-True") &&
  screen.width < 991
) {
  $(".title-container-pricing-unique")[0].style.marginLeft = "45px";
}

function extendBtnSize() {
  var btnLength = document.getElementsByClassName("btn-desk").length;
  var isTall = false;
  for (i = 0; i < btnLength; i++) {
    if (
      document.getElementsByClassName("button-text-container")[i].clientHeight >
      65
    ) {
      isTall = true;
    }
  }
  if (isTall == true) {
    for (i = 0; i < btnLength; i++) {
      document.getElementsByClassName("btn-desk")[i].style.height = "78px";
    }
  }
}

function extendSubtitle() {
  var subtitleLenght = document.getElementsByClassName("box-s").length;
  var isTallSub = false;
  for (i = 0; i < subtitleLenght; i++) {
    if (
      document.getElementsByClassName("box-s")[i].children[0].clientHeight > 50
    ) {
      isTallSub = true;
    }
  }
  if (isTallSub == true) {
    for (i = 0; i < subtitleLenght; i++) {
      document.getElementsByClassName("box-s")[i].style.height = "95px";
    }
  }
}

function extendColorBox() {
  var colotTextLenght = document.getElementsByClassName("box-s").length;
  var isTallBox = false;
  for (i = 0; i < colotTextLenght; i++) {
    if (
      document.getElementsByClassName("box-body-text-container")[i].children[0]
        .clientHeight > 200
    ) {
      isTallBox = true;
    }
  }
  if (isTallBox == true) {
    for (i = 0; i < colotTextLenght; i++) {
      document.getElementsByClassName("box-color-container")[i].style.height =
        "440px";
      document.getElementsByClassName("box-body-text-container ")[
        i
      ].style.height = "220px";
      document.getElementsByClassName("box-b")[i].style.height = "180px";
    }
  }
}

extendColorBox();
extendBtnSize();
extendSubtitle();

setTimeout(() => {
  //Extend boxes
  extendColorBox();
  extendBtnSize();
  extendSubtitle();
}, "2000");

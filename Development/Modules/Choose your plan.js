if (
  document
    .getElementsByClassName("choose-your-plan-container")[0]
    .classList.contains("d-False")
) {
  $(".choose-your-plan-container").css("display", "none");
}

function extendPlanHeadline() {
  var planLength = document.getElementsByClassName(
    "btn-headline-container"
  ).length;
  var isTallHeadline = false;
  for (i = 0; i < planLength; i++) {
    if (
      document.getElementsByClassName("btn-headline-container")[i]
        .clientHeight > 48
    ) {
      isTallHeadline = true;
    }
  }
  if (isTallHeadline == true && $(window).width() > 1020) {
    for (i = 0; i < planLength; i++) {
      document.getElementsByClassName("btn-headline-container")[
        i
      ].style.height = "88px";
      document.getElementsByClassName("btn-headline-container")[
        i
      ].style.display = "flex";
      document.getElementsByClassName("btn-headline-container")[
        i
      ].style.justifyContent = "center";
      document.getElementsByClassName("btn-headline-container")[
        i
      ].style.alignItems = "center";
    }
  }
}

extendPlanHeadline();

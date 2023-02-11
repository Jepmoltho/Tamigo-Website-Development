var indexes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

//Filtering blog sections to display by the value in visibility toggle
for (let i = 0; i < indexes.length; i++) {
  if ($(".index-" + indexes[i]).hasClass("d-False") == true) {
    $(".index-" + indexes[i]).css("display", "none");
  }
}

//Filtering empty image containers to not display
for (let i = 0; i < indexes.length; i++) {
  if (
    document
      .getElementsByClassName("img-index-" + indexes[i])[0]
      .innerHTML.includes("media") == false
  ) {
    $(".img-index-" + indexes[i]).css("display", "none");
  }
}

//Hides Related articles section if visibility is turned off
if (
  document
    .getElementsByClassName("related-articles")[0]
    .innerHTML.includes("d-False") == true
) {
  $(".related-articles").css("display", "none");
}

//Wraps related article cards in bootstrap columns. Nessesary to reuse same card components as on the main blog page in bootstraps gridsystem
for (let i = 0; i < 3; i++) {
  $(".blog-card-container")[i].classList.add("col-lg");
}

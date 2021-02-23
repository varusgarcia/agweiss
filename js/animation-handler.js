var tagArray = ["interface", "animation", "code", "film", "tinker"];
var selectedTags = [true, true, true, true, true]


// var interfaceTag = declareTagAnimation(tagArray[0], "navbar-tag-")
var interfaceTag = declareAnimation("navbar-tag-" + tagArray[0], "tag-" +tagArray[0])
checkTagSelection(interfaceTag, 0, 36, 0)
var animationTag = declareAnimation("navbar-tag-" + tagArray[1], "tag-" +tagArray[1])
checkTagSelection(animationTag, 1, 36, 0)
var codeTag = declareAnimation("navbar-tag-" + tagArray[2], "tag-" +tagArray[2])
checkTagSelection(codeTag, 2, 36, 0)
var filmTag = declareAnimation("navbar-tag-" + tagArray[3], "tag-" +tagArray[3])
checkTagSelection(filmTag, 3, 36, 0)
var tinkerTag = declareAnimation("navbar-tag-" + tagArray[4], "tag-" +tagArray[4])
checkTagSelection(tinkerTag, 4, 36, 0)

// var interfaceDarkTag = declareTagAnimation(tagArray[0] + "-dark", "header-tag-")
var interfaceDarkTag = declareAnimation("header-tag-" + tagArray[0]  + "-dark", "tag-" +tagArray[0]  + "-dark")
checkTagSelection(interfaceDarkTag, 0, 36, 0)
var animationDarkTag = declareAnimation("header-tag-" + tagArray[1]  + "-dark", "tag-" +tagArray[1]  + "-dark")
checkTagSelection(animationDarkTag, 1, 36, 0)
var codeDarkTag = declareAnimation("header-tag-" + tagArray[2]  + "-dark", "tag-" +tagArray[2]  + "-dark")
checkTagSelection(codeDarkTag, 2, 36, 0)
var filmDarkTag = declareAnimation("header-tag-" + tagArray[3]  + "-dark", "tag-" +tagArray[3]  + "-dark")
checkTagSelection(filmDarkTag, 3, 36, 0)
var tinkerDarkTag = declareAnimation("header-tag-" + tagArray[4]  + "-dark", "tag-" +tagArray[4]  + "-dark")
checkTagSelection(tinkerDarkTag, 4, 36, 0)




var logoAnimation = declareAnimation("navbar-logo-img", "logo")
playAnimation(logoAnimation, 0, 82)


function hoverEnterTagAnimation(id) {
  console.log("HoverEntered");
  var tagName = id.split("navbar-tag-").pop()
  tagName = tagName.split("header-tags-").pop()
  tagName = tagName.replace("-dark","")

  if (selectedTags[tagArray.indexOf(tagName)]) {
    playTagAnimation(tagName, 36, 20)
    playTagAnimation(tagName + "-dark", 36, 20)
  }else {
    playTagAnimation(tagName, 0, 16)
    playTagAnimation(tagName + "-dark", 0, 16)
  }
}

function hoverLeaveTagAnimation(id) {

  var tagName = id.split("navbar-tag-").pop()
  tagName = tagName.split("header-tags-").pop()
  tagName = tagName.replace("-dark","")
  console.log("HoverLeft, ID: " + tagName);
  if (selectedTags[tagArray.indexOf(tagName)]) {
    playTagAnimation(tagName, 21, 36)
    playTagAnimation(tagName + "-dark", 21, 36)
  }else {
    playTagAnimation(tagName, 16, 0)
    playTagAnimation(tagName + "-dark", 16, 0)
  }
}

function clickedTagAnimation(id){
  var tagName = id.split("navbar-tag-").pop()
  tagName = tagName.split("header-tags-").pop()
  tagName = tagName.replace("-dark","")
  var tagHeaderText = document.getElementById("header-tag-text-" + tagName)
  console.log(tagHeaderText.className);
  if (selectedTags[tagArray.indexOf(tagName)]) {
    playTagAnimation(tagName, 20, 16)
    playTagAnimation(tagName + "-dark", 20, 16)
    tagHeaderText.classList.add("header-tag-inactive");
  }else {
    playTagAnimation(tagName, 16, 21)
    playTagAnimation(tagName + "-dark", 16, 21)
    tagHeaderText.classList.remove("header-tag-inactive");
  }
  selectedTags[tagArray.indexOf(tagName)] = !selectedTags[tagArray.indexOf(tagName)]
  reloadTags()
  console.log(selectedTags);
}


function declareAnimation(elemId, pathName){
  return lottie.loadAnimation({
    container: document.getElementById(elemId),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "assets/animation/" + pathName + ".json"
  })
}

function playAnimation(elem, start, end){
  console.log("Playing Animation");
  elem.playSegments([start, end], true);
}

function playTagAnimation(elem, start, end){
  console.log("Playing: " + elem + ", from: " + start + " to: " + end);
  if (elem == tagArray[0]) {
    interfaceTag.playSegments([start, end], true);
  } else if (elem == tagArray[1]) {
    animationTag.playSegments([start, end], true);
  }else if (elem == tagArray[2]) {
    codeTag.playSegments([start, end], true);
  }else if (elem == tagArray[3]) {
    filmTag.playSegments([start, end], true);
  }else if (elem == tagArray[4]) {
    tinkerTag.playSegments([start, end], true);
  }

  if (elem == tagArray[0] + "-dark") {
    interfaceDarkTag.playSegments([start, end], true);
  } else if (elem == tagArray[1] + "-dark") {
    animationDarkTag.playSegments([start, end], true);
  }else if (elem == tagArray[2] + "-dark") {
    codeDarkTag.playSegments([start, end], true);
  }else if (elem == tagArray[3] + "-dark") {
    filmDarkTag.playSegments([start, end], true);
  }else if (elem == tagArray[4] + "-dark") {
    tinkerDarkTag.playSegments([start, end], true);
  }
}

function checkTagSelection(elem, id, startFrameActive, startframeInactive){
  console.log(selectedTags[id]);
  if (selectedTags[id]){
    console.log(tagArray[id]);
    elem.goToAndStop(startFrameActive, true)
  }else{
    console.log(tagArray[id]);
    elem.goToAndStop(startframeInactive, true)
  }
}

console.log("Animations Lodaded!");

// tagArray = ["interface", "animation", "code", "film", "tinker"];
var collaboratorsArray = ["isa", "nadia", "yaron" ]
var cardData = [
  {
    "id":"wunschit",
    "title":"Wunsch-it",
    "state":[18],
    "tags":[0,1],
    "collaborators":[0],
    "subtitle":"Financial education for children",
    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "id":"anatom",
    "title":"Anatom",
    "state": [100],
    "tags":[0,1,2],
    "collaborators":[],
    "subtitle":"Learn Anatomy easly",
    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "id":"yolsandals",
    "title":"Yolsandals",
    "state": [100],
    "tags":[0,1,2],
    "collaborators":[],
    "subtitle":"Reflexology Sandal Branding",
    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "id":"muttimachts",
    "title":"Mutti Macht's",
    "state": [18],
    "tags":[0,1],
    "collaborators":[0],
    "subtitle":"Parental financial supervision",
    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "id":"lamp",
    "title":"Lämp",
    "state": [100],
    "tags":[2,4],
    "collaborators":[],
    "subtitle":"DIY IOT Lamp",
    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]

cardData.sort(function(b, a){
  return a.state[0] == b.state[0] ? 0 : +(a.state[0] > b.state[0]) || -1;
});

createHtml()
// reloadTags()


function reloadTags(){
  var selectedTagsClasses
  for (var i = 0; i < selectedTags.length; i++) {
    if (selectedTags[i]) {
      selectedTagsClasses = selectedTagsClasses + " " + tagArray[i]
    }
  }

  // for (var i = 0; i < cardData.length; i++) {
  //   var excluded = true
  //   for (var e = 0; e < cardData[i].tags.length; e++) {
  //     if (selectedTags[cardData[i].tags[e]]) {
  //       excluded = false
  //     }
  //   }
  //   if (excluded) {
  //     document.getElementById("card-" + cardData[i].id).style.display = "none"
  //   }else {
  //     document.getElementById("card-" + cardData[i].id).style.display = "initial"
  //   }
  // }
}

 function createHtml(){
   for (var i = 0; i < cardData.length; i++) {
     var cardContainer = document.getElementById("card-container")

     var cardElemTags = ""

     for (var e = (cardData[i].tags.length)-1; e > -1; e--) {
       cardElemTags = cardElemTags + " " + tagArray[cardData[i].tags[e]] + "Tag"
     }

     var cardElemContainer = document.createElement("a")
     cardElemContainer.className = "card-elem-container col-md-6 " + cardElemTags
     cardElemContainer.id = "card-" + cardData[i].id

     var cardElem = document.createElement("div")
     cardElem.className = "card-elem"

     var cardElemTop = document.createElement("div")
     cardElemTop.className = "card-elem-top"

     var cardElemTitle = document.createElement("p")
     cardElemTitle.className = "card-elem-title"
     cardElemTitle.innerHTML = cardData[i].title

     var cardElemMetadata = document.createElement("div")
     cardElemMetadata.className = "card-elem-metadata"

     var cardState = ""
     if (cardData[i].state.length > 1) {
       cardState = "20" + cardData[i].state[1] + "–" + "20" + cardData[i].state[0]
     } else{
       if (cardData[i].state[0] == 100) {
         cardState = "In Progress"
       }else {
         cardState = "20" + cardData[i].state[0]
       }

     }
     var cardElemMetadataState = document.createElement("p")
     cardElemMetadataState.className = "card-elem-metadata-state"
     cardElemMetadataState.innerHTML = cardState

     var cardElemMetadataTags = document.createElement("div")
     cardElemMetadataTags.className = "card-elem-metadata-tags"

     for (var e = (cardData[i].tags.length)-1; e > -1; e--) {
       var cardElemMetadataTag = document.createElement("img")
       cardElemMetadataTag.className = "card-elem-metadata-tag"
       cardElemMetadataTag.src = "./assets/tag/" + tagArray[cardData[i].tags[e]] +".svg"
       cardElemMetadataTags.append(cardElemMetadataTag)
     }

     var cardElemSubtitle = document.createElement("p")
     cardElemSubtitle.className = "card-elem-subtitle"
     cardElemSubtitle.innerHTML = cardData[i].subtitle

     var cardElemText = document.createElement("p")
     cardElemText.className = "card-elem-text"
     cardElemText.innerHTML = cardData[i].text

     var cardElemCollaborators = document.createElement("div")
     cardElemCollaborators.className = "card-elem-collaborators"

     for (var e = 0; e < cardData[i].collaborators.length; e++) {
       var cardElemCollaborator = document.createElement("img")
       cardElemCollaborator.className = "card-elem-collaborator"
       cardElemCollaborator.src = "./assets/collaborators/" + collaboratorsArray[cardData[i].collaborators[e]] +".png"
       cardElemCollaborators.append(cardElemCollaborator)
     }

     cardElemMetadata.append(cardElemMetadataState)
     cardElemMetadata.append(cardElemMetadataTags)

     cardElemTop.append(cardElemTitle)
     cardElemTop.append(cardElemMetadata)


     cardElem.append(cardElemTop)
     cardElem.append(cardElemSubtitle)
     cardElem.append(cardElemText)
     cardElem.append(cardElemCollaborators)


     cardElemContainer.append(cardElem)
     cardContainer.append(cardElemContainer)
     //document.getElementById("card-" + cardData[i].id).style.paddingTop = (Math.floor(Math.random() * 100) + 20) + "px";

   }
 }

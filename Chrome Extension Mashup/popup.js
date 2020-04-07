// Yanxin Jiang
// Adapted from Daniel Shiffman

let greeting = "I'm always watching you.";
let generic1 = "Nice site.";
let generic2 = "... Interesting.";
let generic3 = "Good choice.";
let generic4 = "Thank you, nexttt.";
let generic5 = "Eh, this one's boring.";
let generic6 = "You have bland taste.";
let generic7 = "This is alright, I guess.";
let generic8 = "Boooooring.";
let genericSayings = [generic1, generic2, generic3, generic4, generic5, generic6, generic7, generic8];

function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}

let genericNumber = getRandom(genericSayings.length);
let genericSaying = genericSayings[genericNumber];
let url;

function setup() {
  createCanvas(300, 150);
  background(50);
}

function draw() {
  textSize(20);
  fill(255);
  textAlign(CENTER);
  text(greeting, 150, 40);

  text(genericSaying, 150, 120);
  // reference: https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      url = tabs[0].url;
      //console.log("url    ", url);
      text(url, 150, 80);
  });
}

// Yanxin Jiang
// Adapted from Daniel Shiffman

let greeting = "I'm always watching you.";
let generic1 = ", nice."
let generic2 = "... interesting.";
let generic3 = ". Good choice.";
let genericSayings = [generic1, generic2, generic3];

// reference: https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let current= tabs[0].url;
});

function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}

let genericNumber = getRandom(genericSayings.length);
let genericSaying = genericSayings[genericNumber];

function setup() {
  createCanvas(300, 180);
  background(50);
}

function draw() {
  textSize(20);
  fill(255);
  textAlign(CENTER);
  text(greeting, 150, 40);

  text(current.toString(), 150, 100);
  //text(genericSaying, 150, 100);

}

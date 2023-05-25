let wordArray1 = ["foo", "bar", "baz", "qux"];
let wordArray2 = ["quux", "corge", "grault", "garply"];
let randomWord = "";

function setup() {
  createCanvas(400, 400);
  textSize(32);
  
  let button = createButton('nyomod fasz');
  button.mousePressed(generateRandomWord);
}

function draw() {
  background(220);
  text(randomWord, 10, 50);
}

function generateRandomWord() {
  let word1 = random(wordArray1);
  let word2 = random(wordArray2);
  
  randomWord = word1 + " " + word2;
}

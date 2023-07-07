let wordArray1 = ["kula", "pina", "gaga", "csók", "faló", "zsófi", "lőcs", "puszi", "faló", "szex", "peti", 
"ondó", "vega", "ideg", "kuki", "peti", "geci", "pita", "izom", "nedv", "xddd", "cici", "husi", "nyál", 
"ortó", "kábó", "mell", "répa", "anál","bika", "csöcs", "cumi", "drog", "acél", "fasz", "pénz", 
"szex", "nyelő", "nyál", "didi", "love", "hulk", "izom", "acél", "fing", "pink", "túró", "szopó", "nagy", 
"szar", "kópé", "baby", "szopó", "nagy", "kaka", "edda", "röfi", "lady", "segg", "géza", "ideg", "csöcs", 
"szag", "xddd", "zsír", "olaj", "basz", "suna", "szaft", "matu", "sára", "töki", "töki","dákó","dákó",
"rizz","rizz","zaza","zaza","slay","mini","kóla","cigi","heni","büfé","boci","manó","jizz","mome","popó",
"metu","bruh","bánk","acél","pisi","pöcs","suna","bíró","span","cica","cica","maci","latyó","csár","pici","puki"];

let wordArray2 = ["abor tusz", "halo kmeg", "nagy árpi", "ütve kúró", "sört ide!", "basz ható", "jézu sél!", "gyur csány",
"négy húsz", "ruff zsófi", "lafi esta", "kasza tibi", "kati béla", "burg king", "jáno spál", "ibbi gang", "mr.b usta", 
"addi kció", "manó rudi", "elkú rtuk", "basz ógép", "atei zmus", "addi kció", "flex elés", "burg king", 
"bört önőr", "kábó tide", "adjc igit", "bizt osúr", "gang bang", "pina gyár", "love hate", "bánk itó!","albé rlet",
"club mate","kari geri","hell nahh","bíró zsófi","latyó haze","poci éhes","subi dubi","drsz ex69","muki úr69","sara cica",
"frad ista"];

document.title = 'bánk itó!'; 

let randomWord = "";

let displayText = "";

let button;
let switchButton;


function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(windowWidth * 0.04);
  
  canvas.parent('canvas-wrapper'); // Append the canvas to #canvas-wrapper

  button = select('#word-button'); // Select the existing button
  button.mousePressed(generateRandomWord);
  button.style('background-color', '#FF5757');
  button.style('border', 'none');
  button.style('color', 'white');
  button.style('font-size', '24px');
  button.style('padding', '15px 32px');
  button.style('text-align', 'center');
  button.style('text-decoration', 'none');
  button.style('display', 'inline-block');
  button.style('margin', '120px 2px');
  button.style('cursor', 'pointer');

  switchButton = select('#switch-word-button'); // Select the new button
  switchButton.mousePressed(switchWordOrder);
  // styling for the new button
  switchButton.style('margin', '-100px 2px'); // adjust the top/bottom margin as needed
  switchButton.style('background', 'transparent'); // make the button background transparent
  switchButton.style('border', 'none'); // remove the border of the button
  switchButton.style('cursor', 'pointer');
}

// In draw function:
function draw() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  text(displayText, windowWidth / 2, windowHeight / 2);
}

function switchWordOrder() {
  // Split the displayText into words, reverse the array, and join it back together
  displayText = displayText.split(" ").reverse().join(" ");
}


function generateRandomWord() {
  // Load a new cat image
  loadCatImage();

  switchButton.attribute('disabled', ''); // disable the new button
  button.attribute('disabled', '');
  let chance = random(1);
  
  if (chance < 0.15) {
    randomWord = random(wordArray2);
  } else {
    let word1 = random(wordArray1);
    let word2 = random(wordArray1);
  
    randomWord = word1 + " " + word2;
  }
  
  // Clear the currently displayed text
  displayText = "";
  
  // Start a new interval timer that will add one character from randomWord to displayText every 100 milliseconds
  let index = 0;
  let intervalId = setInterval(function() {
    if (index < randomWord.length) {
      displayText += randomWord[index];
      index++;
    } else {
      // Stop the interval timer once the entire word has been displayed
      clearInterval(intervalId);
      button.removeAttribute('disabled'); // enable the button
      switchButton.removeAttribute('disabled');
    }
  }, 65);
}

function loadCatImage() {
  // Load left and right cat image
  let url = "https://api.thecatapi.com/v1/images/search?limit=1";

  httpGet(url, 'json', false, function(response) {
    // The response is an array of objects, we just want the first two objects
    document.getElementById("cat-image").src = response[0].url;
    
  });
}
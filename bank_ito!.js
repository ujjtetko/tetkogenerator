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

let button;
let switchButton;

function setup() {
  button = select('#word-button'); // Select the existing button
  button.mousePressed(generateRandomWord);

  switchButton = select('#switch-word-button'); // Select the new button
  switchButton.mousePressed(switchWordOrder);
  switchButton.style('background', 'transparent'); // make the button background transparent
  switchButton.style('border', 'none'); // remove the border of the button
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
  let textElement = select('#generated-text');
  textElement.html("");
  
  // Start a new interval timer that will add one character from randomWord to the HTML element every 100 milliseconds
  let index = 0;
  let intervalId = setInterval(function() {
    if (index < randomWord.length) {
      textElement.html(textElement.html() + randomWord[index]);
      index++;
    } else {
      // Stop the interval timer once the entire word has been displayed
      clearInterval(intervalId);
      button.removeAttribute('disabled'); // enable the button
      switchButton.removeAttribute('disabled');
    }
  }, 65);
}

function switchWordOrder() {
  // Split the displayText into words, reverse the array, and join it back together
  let textElement = select('#generated-text');
  let newText = textElement.html().split(" ").reverse().join(" ");
  textElement.html(newText);
}

function loadCatImage() {
  // Load left and right cat image
  let url = "https://api.thecatapi.com/v1/images/search?limit=1";

  httpGet(url, 'json', false, function(response) {
    // object
    document.getElementById("cat-image").src = response[0].url;
  });
}

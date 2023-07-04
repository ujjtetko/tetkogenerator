let wordArray1 = ["kula", "pina", "gaga", "csók", "faló", "zsófi", "lőcs", "puszi", "faló", "szex", "peti", 
"ondó", "vega", "ideg", "kuki", "peti", "geci", "pita", "izom", "nedv", "xddd", "cici", "husi", "nyál", 
"ortó", "kábó", "mell", "répa", "anál", "acél", "bika", "csöcs", "cumi", "drog", "acél", "fasz", "pénz", 
"szex", "nyelő", "nyál", "didi", "love", "hulk", "izom", "acél", "fing", "pink", "túró", "szopó", "nagy", 
"szar", "kópé", "baby", "szopó", "nagy", "kaka", "edda", "röfi", "lady", "segg", "géza", "ideg", "csöcs", 
"szag", "xddd", "zsír", "olaj", "basz", "suna", "szaft", "matu", "sára", "töki", "töki","dákó","dákó","kuri",
"rizz","rizz","zaza","zaza","slay","mini","kóla","cigi","heni","büfé","boci","manó","jizz","mome",
"metu","bruh","bánk","acél","pisi","pöcs","suna"];

let wordArray2 = ["abor tusz", "halo kmeg", "nagy árpi", "ütve kúró", "sört ide!", "basz ható", "jézu sél!", "gyur csány",
"négy húsz", "ruff zsófi", "lafi esta", "kasza tibi", "kati béla", "burg king", "jáno spál", "ibbi gang", "mr.b usta", 
"addi kció", "manó rudi", "elkú rtuk", "basz ógép", "atei zmus", "addi kció", "flex elés", "burg king", 
"bört önőr", "kábó tide", "adjc igit", "bizt osúr", "gang bang", "pina gyár", "love hate", "bánk itó!","albé rlet",
"club mate","kari geri","hell nahh"];

document.title = 'bánk itó!'; 

let randomWord = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(50);
  
  let button = createButton('nyomod fasz');
  button.style('background-color', '#FF5757');
  button.style('border', 'none');
  button.style('color', 'white');
  button.style('font-size', '24px');
  button.style('padding', '15px 32px');
  button.style('text-align', 'center');
  button.style('text-decoration', 'none');
  button.style('display', 'inline-block');
  button.style('margin', '4px 2px');
  button.style('cursor', 'pointer');
  button.position((windowWidth / 2) - 100.4, windowHeight / 2);
  button.mousePressed(generateRandomWord);
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  text(randomWord, windowWidth / 2, windowHeight / 2 - 50);
}

function generateRandomWord() {
  let chance = random(1);
  
  if (chance < 0.15) {
    randomWord = random(wordArray2);
  } else {
    let word1 = random(wordArray1);
    let word2 = random(wordArray1);
  
    randomWord = word1 + " " + word2;
  }
}

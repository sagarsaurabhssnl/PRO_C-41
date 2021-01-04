var firebaseConfig = {
  apiKey: "AIzaSyCMxOjVyQNwCQz8UP-nLj2yQnacIHyeEH0",
  authDomain: "fruit-catcher-d9394.firebaseapp.com",
  projectId: "fruit-catcher-d9394",
  storageBucket: "fruit-catcher-d9394.appspot.com",
  messagingSenderId: "972549804596",
  appId: "1:972549804596:web:ff1bf842347f7d7f0ff061"
};
firebase.initializeApp(firebaseConfig);

var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var inputName;
var rankCheck = 0;

var player, form, game;
var player1, player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var winImg, looseImg, winSound, looseSound;
var player_img;

function preload() {
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  winImg = loadImage("images/win.jpg");
  looseImg = loadImage("images/loose.jpg");
  winSound= loadSound("sound/win.mp3");
  looseSound= loadSound("sound/loose.mp3");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back_img);
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (player.score >= 20) {
    game.update(2);
  }
  if (gameState === 2) {
    clear();
    imageMode(CENTER);
    game.end();
    if (player.rank && player.rank === 1) {
      image(winImg, 500, 300);
    } else if (player.rank && player.rank === 2) {
      image(looseImg, 500, 300);
    }
  }

  if (form && form.input.value() === "" && gameState === 0) {
    push();
    noStroke();
    fill(255);
    rect(displayWidth / 2 - 265, displayHeight / 2, 173, 30);
    stroke(5);
    fill(0);
    text("Enter your Name in the Text Box", displayWidth / 2 - 265, displayHeight / 2 + 20);
    pop();
  }
}

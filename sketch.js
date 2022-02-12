const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher,playerImage
var baseImage;
var bow, bowImage

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
  bowImage=loadImage("../assets/playerArcher.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options={
    isStatic:true
  }

  playerBase=Bodies.rectangle(200,350,180,150,options)
  World.add(world,playerBase)

  player=Bodies.rectangle(250,190,50,180,options)
  World.add(world,player)

  bow=Bodies.rectangle(280,210,90,80,options)
  //criar corpo da base do jogador

  //criar corpo do jogador



}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  


  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);

  image(baseImage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerImage,player.position.x,player.position.y,50,180)
  image(bowImage,bow.position.x,bow.position.y,90,80)
  image(palyer)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}

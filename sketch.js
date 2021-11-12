var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, edges;
var music;

function preload(){
    // carregue o som aqui
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,20);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(290,580,200,20);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(500,580,200,20);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(710,580,200,20);
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 6;
    bola.velocityY = 6;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    bola.bounceOff(edges);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0;
        bola.velocityY = 0;
        //escreva o código para parar a música
        
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        
    }

    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        
    }
    drawSprites();
}
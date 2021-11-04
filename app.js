// canvas 
let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = "#0e77aa"
let ctx = canvas.getContext('2d')


//DOM
let gameOverWritting = document.querySelector("#gameOver")
let startBtn = document.querySelector('#start')
let intro = document.querySelector('#intro')
let restartBtn = document.querySelector('#restart')
let intervalId =0 ;
let gameIsOver = false;
let score = 0;
let audio = new Audio('bensound-hey.mp3')
let effect = new Audio('bottle_pop_2.wav')
let carrotSound = new Audio('1196_crowd-excited-01.mp3')
let takaSound = new Audio('takaSound.mp3')
let enemySound = new Audio('1029_champagne-bottle-pop-01.mp3')
let x = 700
let z = 400
let y = 660
let width = 45
let height = 42
let decrement = 1.5
let pointsGiven = 0
let pointsDeducted =0
let animalClick = false
let enemyClick = false
let clientX = 0 
let clientY = 0


//load images
let background = new Image();
background.src = 'sky.jpg'
let sunset = new Image();
sunset.src = 'sunset.jpg'
let animal1 = new Image();
animal1.src = 'elephant.png'
let animal2= new Image();
animal2.src= 'giraffe.png'
let animal3 = new Image();
animal3.src = 'hippo.png'
let animal4 = new Image();
animal4.src = 'monkey.png'
let animal5= new Image();
animal5.src = 'panda.png'
let animal6 = new Image();
animal6.src = 'parrot.png'
let animal7 = new Image();
animal7.src = 'penguin.png'
let animal8 = new Image();
animal8.src = 'rabbit.png'
let animal9= new Image();
animal9.src = 'snake.png'
let animal10 = new Image();
animal10.src = 'pig.png' 
let carrot = new Image();
carrot.src = 'carrots.png'
let taka = new Image();
taka.src= 'taka.PNG'
let enemy1 = new Image();
enemy1.src = 'flyMan_fly.png'
let enemy2 = new Image();
enemy2.src = 'spikeBall1.png'
let enemy3 = new Image();
enemy3.src = 'spikeMan_jump.png'
let enemy4 = new Image();
enemy4.src = 'springMan_stand.png'
let enemy5 = new Image();
enemy5.src = 'wingMan1.png'
let summer = new Image();
summer.src = 'summer.jpg'
let spring = new Image();
spring.src = 'spring.png'
let autunm = new Image();
autunm.src = 'autunm.jpg'
let winter = new Image();
winter.src = 'winter.jpg'


let animals =[{x:100, y:660 , image: animal1},
    {x:200, y : 660 , image: animal2},
    {x:400, y : 660 , image: animal3},
    {x:600, y : 660 , image: animal4},
    {x:800, y : 660 , image: animal5},
    {x:1000, y : 660 , image: animal6},
    {x:1200, y : 660 , image: animal7},
    {x:1400, y : 660 , image: animal8},
    {x:100, y : 660 , image: animal9},
    {x:300, y : 660 , image: animal10},
    {x:500, y : 660 , image: carrot, magic: true}]

let enemies = [{x:100, y:660 , image: enemy1},
    {x:700, y : 660 , image: enemy2},
    {x:900, y : 660 , image: enemy3},
    {x:1100, y : 660 , image: enemy4},
    {x:1300, y : 660 , image: enemy5},
    {x:100, y : 660 , image: taka, death: true}]
  

function draw (){
    if(score >= 25 && score <50){
        decrement = 2
        ctx.drawImage(winter,0,0)
    }
    else if(score >= 50 && score < 75 ){
        decrement = 3
        ctx.drawImage(spring,0,0,canvas.width,canvas.height)
    }
    else if(score >= 75){
        decrement = 4
        ctx.drawImage(summer,0,0,canvas.width,canvas.height)
    }

    for (let i=0; i<animals.length; i++){
        ctx.drawImage(animals[i].image, animals[i].x, animals[i].y, width, height)
        animals[i].y= animals[i].y - decrement
        if(animals[i].y < 0){
            animals[i].y = Math.floor(Math.random()*400 + canvas.height) 
            animals[i].x = Math.floor(Math.random()*canvas.width -50)
        }
        if(clientX < animals[i].x + width && animals[i].x < clientX && clientY > animals[i].y && clientY < animals[i].y + height){
            console.log('collision')
            animals[i].x = -100 
            if(animals[i].magic == true){
                score = score +100
                carrotSound.play()
                carrotSound.volume =0.3
            } else {
             score = score + 10
             effect.play()
             effect.volume = 0.3
            }
        } 
    }
    for (let i=0; i<enemies.length; i++){
        ctx.drawImage(enemies[i].image, enemies[i].x, enemies[i].y, width, height)
        enemies[i].y= enemies[i].y - decrement
        if(enemies[i].y < 0){
            enemies[i].y = Math.floor(Math.random()*400 + canvas.height) 
            enemies[i].x = Math.floor(Math.random()*canvas.width - 50)
        }
        if(clientX < enemies[i].x + width && enemies[i].x < clientX && clientY > enemies[i].y && clientY < enemies[i].y + height){
            console.log('collision')
            enemies[i].x = -100
            if(enemies[i].death == true){
                score = -1
                takaSound.play()
                takaSound.volume =0.5
            }else{
                score = score -50
                enemySound.play()
                enemySound.volume =0.4
                    
            }
        } 
    }
}



function animation(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(autunm,0,0)

    draw()

    if (score < 0 || score >= 100){
        cancelAnimationFrame(intervalId)
        gameOver()
        audio.pause()
    }
    else {
        intervalID = requestAnimationFrame(animation)
    }


    ctx.font = '32px Arial'
    ctx.fillStyle = 'grey'
    ctx.fillText(`Score:${score}`,50,100)

   
 
}


function handleStart(){
    startBtn.style.display = 'none'
    gameOverWritting.style.display = 'none'
    restartBtn.style.display = 'none'
    canvas.style.display = 'block'
    audio.play()
    audio.volume = 0.1
    
    animation()
}

function gameOver(){
    gameOverWritting.style.display = 'block'
    restartBtn.style.display = 'block'
    canvas.style.display = 'none'
    score = 0
     animals =[{x:100, y:660 , image: animal1},
        {x:200, y : 660 , image: animal2},
        {x:400, y : 660 , image: animal3},
        {x:600, y : 660 , image: animal4},
        {x:800, y : 660 , image: animal5},
        {x:1000, y : 660 , image: animal6},
        {x:1200, y : 660 , image: animal7},
        {x:1400, y : 660 , image: animal8},
        {x:100, y : 660 , image: animal9},
        {x:300, y : 660 , image: animal10},
        {x:500, y : 660 , image: carrot, magic:true}]
    
     enemies = [{x:100, y:660 , image: enemy1},
        {x:700, y : 660 , image: enemy2},
        {x:900, y : 660 , image: enemy3},
        {x:1100, y : 660 , image: enemy4},
        {x:1300, y : 660 , image: enemy5},
        {x:100, y : 660 , image: taka, death:true}]
        
}

window.addEventListener('load',() =>{
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'
    gameOverWritting.style.display = 'none'
    
    startBtn.addEventListener('click',() =>{
        intro.classList.add('intro')
        handleStart()
    })

    restartBtn.addEventListener('click',() =>{
        intro.classList.add('intro')
        handleStart()
    })

    document.addEventListener('click', (event) => {
        let elemLeft = canvas.offsetLeft + canvas.clientLeft;
        let elemTop = canvas.offsetTop + canvas.clientTop;
        clientX = event.pageX - elemLeft;
        clientY = event.pageY - elemTop;
        console.log(clientX, clientY)
     })

})
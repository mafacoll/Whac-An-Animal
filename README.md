<h1>WHAC-AN-ANIMAL</h1>

<h2>Description</h2>
In this repo we've created a variation of the famous arcade game Whac-A-Mole, but we'll be using all different types of animals instead.

The game works the following way: an animal will pop on the screen and you'll need to whac (or click) on it. This will award you 10 points. Careful though, because every animal that you miss will deduct 20 points from your counter. If the counter reaches 0 the game will be over and the animal kingdom will have won. 
The animals will sense that you're winning and will send members of their army faster in an attempt to destroy you. 

<h2>Planning:</h2> 

Minimal Viable Product
<ol>
<li>game has animals that pop from the bottom up</li>
<li>a click on the animal will give points</li>
<li>after 100 points you win</li>
<li>if three animals are missed game over</li>
<li>simple background</li>
<li>add scoreboard</li>
</ol>

Product backlog
<ol>
<li>adding the music</li>
<li>adding the sound effects</li>
<li>increasing difficulty</li>
<li>points will be deducted for every animal missed</li>
<li>adding the golden mole</li>
<li>adding more animals</li>
<li>adding more details in the background</li>
<li>make the animal pop out of the actual hole</li>
<li>changing background to signal passage of time</li>

</ol>

<h2>Data structure:</h2>
<h3>index.html<h3>
<ol>
<li>canvas</li>
<li>start button</li>
<li>restart button</li>
<li>home page</li>
<li>game page</li>
</ol>
  
<h3>style.css<h3>
<ol>
<li>centering canvas</li>
<li>styling buttons</li>
<li>styling instructions</li>


</ol>
  
<h3>app.js<h3>
<ol>
<li>buildSplashScreen</li>
<li>buildGameScreen</li>
<li>buildGameOverScreen</li>
<li>startGame</li>
<li>clickAnimal</li>
<li>checkClick</li>
<li>increasescore</li>
<li>decreaseScore</li>
<li>addSpeed</li>
</ol>
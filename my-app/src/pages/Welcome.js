

import React from 'react';
import { useState } from 'react'





function Welcome() {
  const [result, setResult] = useState(0);

  //an array for each emoji group
  const smileys = ['mask', 'clown', 'robot', 'alien', 'skull', 'poop', 'ghost', 'imp', 'goblin', 'ogre', 'bone', 'brain', 'heart']
  const people = ['farmer', 'chef', 'ninja', 'cop', 'coder', 'artist', 'astronaut', 'fairy', 'doctor', 'teacher', 'buidler', 'scientist']
  const animals = ['gorilla', 'wolf', 'horse', 'unicorn', 'camel', 'butterfly', 'eagle', 'croc', 'dinoasaur', 'serpent', 'whale', 'beetle']
  const plants = ['cactus', 'palm', 'seedling', 'herb,', 'evergreen', 'clover', 'maple', 'tulip', 'rose', 'sunflower', 'blossom', 'hibiscus']
  const food = ['watermelon', 'strawberry', 'coconut', 'pepper', 'mushroom', 'croissant', 'hamburger', 'taco', 'egg', 'popcorn','dango', 'cookie']
  const zodiac = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
  const object = ['console', 'dice', 'pawn', 'baseball', 'key', 'magnet', 'satellite', 'pill', 'disc', 'diamond', 'lipstick', 'moneybag']
 
  //generating random emoji phrase from each group whenever the randomClick button function is clicked
  let rSmiley = smileys[Math.floor(Math.random()*smileys.length)];
  let rPeople = people[Math.floor(Math.random()*people.length)];
  let rAnimal = animals[Math.floor(Math.random()*animals.length)];
  let rPlant = plants[Math.floor(Math.random()*plants.length)];
  let rFood = food[Math.floor(Math.random()*food.length)];
  let rZodiac = zodiac[Math.floor(Math.random()*zodiac.length)];
  let rObject = object[Math.floor(Math.random()*object.length)];
 

  let randomPhrase = `${rSmiley}, ${rPeople}, ${rAnimal}, ${rPlant}, ${rFood}, ${rZodiac}, ${rObject}`;

  let randomClick = () => {
    setResult(randomPhrase);
  }



  return (
    <div>
     
      

      
     
      
      <main >
        
       

        <div>
          <h1>
            Welcome to ParzifaL
          </h1>
          <div style={{ backgroundImage: "url(/parzifal.png)"}}>
          </div>
          <div>
            <h3>
              Get started by generating your quest-phrase{' '}
            </h3>
            <button onClick={randomClick}>Generate</button>
            <p>Quest items you need: {result}</p>
          </div>
        </div>       
      </main>

     
    </div>
  )
}

export default Welcome;
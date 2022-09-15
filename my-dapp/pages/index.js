import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from 'react'

export default function Welcome() {

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
 

  let randomPhrase = `${rSmiley},${rPeople},${rAnimal},${rPlant},${rFood},${rZodiac},${rObject}`;

  let randomClick = () => {
    setResult(randomPhrase);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ParzifaL</title>
        <meta name="description" content="random word game meets NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <li>
          <Link href="/">
            <a>Welcome</a>
          </Link>
        </li>
        <li>
          <Link href="/Mint">
            <a>Mint</a>
          </Link>
        </li>
      </ul>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ParzifaL
        </h1>

        <p className={styles.description}>
          Get started by generating your random phrase{' '}
        </p>

        <div className={styles.phrase}>
          <button onClick={randomClick}>random</button>
          <h3>result:{result}</h3>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


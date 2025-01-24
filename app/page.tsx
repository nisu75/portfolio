"use client";

import { useState, useEffect } from "react";
import CustomLink from "./components/customlink";

const hobbies = [
  "working through a 3000 piece jigsaw puzzle",
  "riding my motorcycle",
  "maintaining my 500+ day duolingo streak",
  "shadowboxing in my room",
  "learning blender",
  "finding new escape rooms",
  "reading manga",
  "unsuccessfully attempting a kickflip",
  "curating spotify playlists",
  "relearning piano",
  "experimenting with new soup recipes",
  "crocheting yet another plushie",
  "waiting for the next meteor shower",
];

const hobbiesEmoji = ['🧩', '🏍️', '🦉', '🥊', '🎬', '♟️', '📖', '🛹', '🎵', '🎹', '😋', '🪼', '💫']

const soups = [
  "miso",
  "chicken noodle",
  "tomato egg drop",
  "罗宋汤",
  "bone broth",
  "wintermelon and meatball",
  "beef noodle",
  "hot and sour",
];

function useWordCycle(words: string[]): [string, () => void, boolean] {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setMounted(true);
  }, [words]);

  const handleClick: () => void = () => {
    const currentIndex: number = words.indexOf(currentWord);
    const nextIndex: number = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick, mounted];
}

export default function Home() {
  const [hobby, nextHobby, hobbyMounted] = useWordCycle(hobbies);
  const [soup, nextSoup, soupMounted] = useWordCycle(soups);

  return (
    <div>
      <p>
        hi, i'm nicole!
      </p>
      <br />
      {soupMounted && (
        <p>
          welcome to my {" "}
          <CustomLink
            href=""
            type="real"
          >
            little corner
          </CustomLink>
          {" "} of the internet, 
          i’ll go ahead and make us some {" "}
          <CustomLink 
            href=""
            type="clickable"
            onClick={nextSoup}
          >
            {soup}
          </CustomLink> soup. 
          hope you enjoy your stay! 🍵 
        </p>
      )}
      <br />
      {hobbyMounted && (
        <p>
          i’m interested in all things tech - particularly cybersecurity and game design. 
          i love solving problems and tackling new challenges, and i’m often side questing - you can catch me {" "}
          <CustomLink 
            href=""
            type="clickable"
            onClick={nextHobby}
          >
            {hobby}
          </CustomLink>
          {" "} {hobbiesEmoji[hobbies.indexOf(hobby)]}
        </p>
      )}
      <br />
      <p>
        reach out anytime at {" "}
        <CustomLink
          href="mailto:nicolexcui@gmail.com"
          type="real"
        >
          nicolexcui@gmail.com
        </CustomLink> 📬
      </p>
      <br />
      <p>
        or you can find me at: {" "}
        <CustomLink
          href="https://www.linkedin.com/in/nicolexcui/"
          type="real"
        >
          linkedin
        </CustomLink>
        {" "}
        <CustomLink
          href="https://github.com/nisu75"
          type="real"
        >
          github
        </CustomLink>
      </p>
      <br />
      <p className="hidden text-foreground-60 text-sm md:block">
        ps. try petting the cat in the corner! (it's also the home button)
      </p>
    </div>
  );
}

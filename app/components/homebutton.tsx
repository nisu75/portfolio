"use client";

import { useState } from "react";
import Link from "next/link";
import { arialUnicode } from "../../styles/fonts";

const cats = [
  "&nbsp;∧,,,,∧<br/>( ｡･o･)",
  "&nbsp;∧,,,,∧<br/>( ｡･ω･)",
  "&nbsp;∧,,,,∧<br/>( „• ᴗ •„)",
  "&nbsp;∧,,,,∧<br/>( ✧ω✧)",
  "&nbsp;∧,,,,∧<br/>(  *ˊ▽ˋ*)",
  "&nbsp;∧,,,,∧<br/>(  ◕‿◕)",
  "&nbsp;∧,,,,∧<br/>( ｡ -ω-)",
  "&nbsp;∧,,,,∧<br/>( &nbsp;≧▽≦)",
  "&nbsp;∧,,,,∧<br/>( ๑˃ᴗ˂)",
  "&nbsp;∧,,,,∧<br/>( *ˊᗜˋ*)",
  "&nbsp;∧,,,,∧<br/>( ♡///♡)",
  "&nbsp;∧,,,,∧<br/>( ｡¯ ³¯ ) ♪",
  "&nbsp;∧,,,,∧<br/>( ๑`^´๑)",
  "&nbsp;∧,,,,∧<br/>( &nbsp;⊙_⊙)",
  "&nbsp;∧,,,,∧<br/>( ｡ •̀ᴗ- )✧",
  "&nbsp;∧,,,,∧<br/>( &nbsp;◕ᴥ◕)",
  "&nbsp;∧,,,,∧<br/>( ⓛᴥⓛ)",
  "&nbsp;∧,,,,∧<br/>( ｡ಠᴥಠ)"
];

export default function HomeButton() {
    const [currentCat, setCurrentCat] = useState(cats[1]);

    const getRandomCat = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * (cats.length - 1)) + 1;
        } while (cats[randomIndex] === currentCat);
        return cats[randomIndex];
    };
  
    const handleMouseDown = () => {
      setCurrentCat(cats[0]);
    };
  
    const handleMouseUp = () => {
      setCurrentCat(cats[1]);
    };

    const handleMouseEnter = () => {
      setCurrentCat(getRandomCat());
    };

    return (
        <div className={`${arialUnicode.className} text-foreground-100 ml-2 mb-0`}>
          <Link href="/" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div onMouseEnter={handleMouseEnter}>
              <span dangerouslySetInnerHTML={{ __html: currentCat }} />
            </div>
          </Link>
        </div>
      );
}
"use client";

import { useState, useEffect } from "react";
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
    const [isTouchscreen, setIsTouchscreen] = useState(false);

    useEffect(() => {
        const checkTouchscreen = () => {
            setIsTouchscreen(navigator.maxTouchPoints > 0);
        };
        checkTouchscreen();
    }, []);
    
    const getRandomCat = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cats.length);
        } while (cats[randomIndex] === currentCat);
        return cats[randomIndex];
    };
  
    const handleMouseDown = () => {
        if (!isTouchscreen) {
            setCurrentCat(cats[0]);
        }
    };
  
    const handleMouseUp = () => {
        if (!isTouchscreen) {
            setCurrentCat(cats[1]);
        }
    };

    const handleMouseEnter = () => {
        if (!isTouchscreen) {
            setCurrentCat(getRandomCat());
        }
    };

    const handleTouchStart = () => {
        setCurrentCat(cats[0]);
    };

    const handleTouchEnd = () => {
        setCurrentCat(cats[1]);
    };

    return (
        <Link href="/" passHref>
            <div 
                className={`${arialUnicode.className} text-foreground-100 ml-2 mb-0`}
                onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp} 
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <span dangerouslySetInnerHTML={{ __html: currentCat }} />
            </div>
        </Link>
    );
}
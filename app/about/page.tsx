import Image from "next/image";
import CustomLink from "../components/customlink";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "about"
}

export default function About() {
    return (
        <div className="flex flex-col mt-2 gap-1">
            <div>
                <Image
                    src="/images/oomf.jpg"
                    width={320}
                    height={240}
                    className="mb-2 priority"
                    alt="me next to my goat (camel) at the rom"
                />
                <p>📍 {" "}
                <CustomLink
                    href="https://www.rom.on.ca/"
                    type="real"
                >
                    royal ontario museum
                </CustomLink>
                , toronto </p>
            </div>
            <br />
            <p>
                <b>about me</b>
                <br /><br />
                🚧 ٩( ᐛ )( ᐖ )۶ 🚧
                <br />
                work in progress, please check back later!
            </p>
            <br />
            <p>
                <b>currently, i'm ...</b>
            </p>
            <ul className="list-disc list-outside ml-4">
                <li>
                    studying computer science at the {" "}
                    <CustomLink
                        href="https://cs.uwaterloo.ca/"
                        type="real"
                    >
                        University of Waterloo
                    </CustomLink>
                </li>
                <li>
                    completing my second internship (ai + cybersec @ {" "}
                    <CustomLink
                        href="https://www.globys.com/"
                        type="real"
                    >
                        Globys
                    </CustomLink>
                    )
                </li>
                <li>
                    preparing for exchange! (winter 2026 @ {" "}
                    <CustomLink
                        href="https://nus.edu.sg/"
                        type="real"
                    >
                        NUS
                    </CustomLink>
                    ) 
                </li>
            </ul>
            <br />
            <p>
                <b>previously, i ...</b>
            </p>
            <ul className="list-disc list-outside ml-4">
                <li>
                    reached tier 3 in the WiCyS Security Training Scholarship
                </li>
                <li>
                    passed the ISC2 Certified in Cybersecurity exam
                </li>
                <li>
                    completed my first internship (cybersecurity @ Globys)
                </li>
                <li>
                    received the René Descartes National Scholarship ($25 000 CAD)
                </li>
                <li>
                    placed first in Canada CyberTitan 2023, second in 2022 as part of team {" "}
                    <CustomLink
                        href="https://etalentcanada.ca/news/art-academy-wins-canadas-cybertitan-vi-championship-tight-race"
                        type="real"
                    >
                        Art Academy
                    </CustomLink>
                </li>
                <li>
                    qualified for the American Invitational Mathematics Examination 2023 + 2022
                </li>
            </ul>
        </div>
    );
}
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
                    alt="a selfie with a camel statue at the rom!"
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
                hello, nice to meet you! my name is nicole, and i'm a computer science student typically in the cold, cold city of Waterloo. i'm currently studying abroad in the {" "}
                <CustomLink
                    href="https://www.weather.gov.sg/home/"
                    type="real"
                >
                        very not cold
                </CustomLink>
                 {" "} country of Singapore, so my time zone may be a few hours ahead of yours :)
            </p>
            <br />
            <h2>
                <b>currently, i'm ...</b>
            </h2>
            <ul className="list-disc list-outside ml-4">
                <li>
                    on exchange! (winter 2026 @ {" "}
                    <CustomLink
                        href="https://nus.edu.sg/"
                        type="real"
                    >
                        NUS
                    </CustomLink>
                    ) 
                </li>
                <li>
                    studying computer science at the {" "}
                    <CustomLink
                        href="https://cs.uwaterloo.ca/"
                        type="real"
                    >
                        University of Waterloo
                    </CustomLink>
                </li>
                
            </ul>
            <br />
            <h2>
                <b>previously, i ...</b>
            </h2>
            <ul className="list-disc list-outside ml-4">
                <li>
                    reported a zero-day vulnerability to Trend Micro ZDI, in progress as ZDI-CAN-28685
                </li>
                <li>
                    received the President's International Experience Award and the University of Waterloo International Experience Award ($2500 CAD combined)
                </li>
                <li>
                    completed my third internship (vulnerability research intern @ {" "}
                    <CustomLink
                        href="https://www.zerodayinitiative.com/"
                        type="real"
                    >
                        Trend Micro
                    </CustomLink>
                    , working with reports from the ZDI initiative)
                </li>
                <li>
                    competed in {" "}
                    <CustomLink
                        href="https://cybersecuritychallenge.ca/en/"
                        type="real"
                    >
                        CyberSci
                    </CustomLink>
                     {" "} as part of UWaterloo's Team Egg, specializing in cryptography and placing 5th regionals
                </li>
                <li>
                    worked part time as ai + cybersec @ {" "}
                    <CustomLink
                        href="https://www.globys.com/"
                        type="real"
                    >
                        Globys
                    </CustomLink>
                    {" "} and returned for my second internship
                </li>
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
                    received the René Descartes National Scholarship ($25000 CAD)
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
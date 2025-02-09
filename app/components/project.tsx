import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./customlink";

interface ProjectProps {
    item: {
        name: string;
        description: string;
        date: string;
        link: string;
        image: string;
    };
    index: number;
}

export default function Project({ item }: ProjectProps) {
    const { name, description, date, link, image } = item;

    return (
        <div className="flex flex-col w-full mb-10">
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image 
                    src={image} alt={name} width={500} height={300} unoptimized
                    className="w-full mb-5 border-2 project-image"/>
            </Link>
            <h2>
                <CustomLink href={link} type="real">
                    <i>{name}</i>
                </CustomLink>
                {" // " + date}
            </h2>
            <p>{description}</p>
        </div>
    );
}
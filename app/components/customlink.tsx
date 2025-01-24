import Link, { LinkProps } from "next/link";
import { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

interface CustomLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    type?: "navbar" | "real" | "clickable";
    [key: string]: any;
}

const CustomLink = ({ children, className, type = "real", target, ...props }: CustomLinkProps) => {
    let linkClass = "";
    let defaultClassName = "";
    let defaultLinkColor = "";
    let defaultLinkColorRgb = "";
    let additionalProps: { [key: string]: any } = {};

    if (type === "navbar") {
        linkClass = "navbar-link-hover-effect";
    } else {
        linkClass = "general-link-hover-effect";
        if (type === "clickable") {
            defaultLinkColor = "--foreground";
            defaultLinkColorRgb = "--foreground-rgb";
        } else {
            additionalProps = {
                rel: "noopener noreferrer",
                target: "_blank",
            };
            defaultClassName = "text-highlight-70";
            defaultLinkColor = "--highlight";
            defaultLinkColorRgb = "--highlight-rgb";
        }
    }

    const style: CSSProperties = {
        "--link-color": `var(${defaultLinkColor})`,
        "--link-color-rgb": `var(${defaultLinkColorRgb})`
    } as CSSProperties;

    return (
        <Link {...props} {...additionalProps} className={clsx(linkClass, defaultClassName, className)} style={style}>
            {children}
        </Link>
    );
};

export default CustomLink;
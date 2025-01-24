import Link, { LinkProps } from "next/link";
import { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

interface CustomLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    type?: "navbar" | "real" | "clickable";
    target?: string;
}

const CustomLink = ({ children, className, type = "real", target, ...props }: CustomLinkProps) => {
    let linkClass = "";
    let additionalProps = {};
    let defaultClassName = "";
    let defaultLinkColor = "";
    let defaultLinkColorRgb = "";

    if (type === "navbar") {
        linkClass = "navbar-link-hover-effect";
    } else {
        linkClass = "general-link-hover-effect";
        if (type === "clickable") {
            defaultLinkColor = "--foreground";
            defaultLinkColorRgb = "--foreground-rgb";
        } else {
            additionalProps = {
                target: "_blank",
                rel: "noopener noreferrer",
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
        <Link {...props} {...additionalProps} className={clsx(linkClass, defaultClassName, className)} target={target} style={style}>
            {children}
        </Link>
    );
};

export default CustomLink;
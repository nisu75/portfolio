import { arialUnicode } from "../styles/fonts";
import CustomLink from "./components/customlink";

export default function NotFound() {
  return (
    <div>
        <b>404</b>
        <br /><br />
        <p>
            this page could not be found {" "}
            <span className={`${arialUnicode.className}`}>(°ロ°) !</span>
        </p>
        <h3 className="hidden text-foreground-60 text-sm md:block">
          how'd you get here?
        </h3>
        <br />
        <p>
          click on the cat in the corner to go home!
        </p>
    </div>
  )
}
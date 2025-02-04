import Link from 'next/link'
import { arialUnicode } from "../../styles/fonts";
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
    </div>
  )
}
import { arialUnicode } from "../styles/fonts";

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
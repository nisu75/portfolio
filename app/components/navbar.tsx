import NavLinks from "./navlinks";

export default function NavBar() {
    return (
        <div className="flex flex-col">
            <div className="flex grow flex-row md:flex-col md:items-end">
                <NavLinks />
            </div>
        </div>
    );
}
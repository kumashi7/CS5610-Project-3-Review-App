import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div>
            <nav id="navbar">
                <a className="flex-nav-item" href="./">HOME</a>
                <a className="flex-nav-item" href="Login">Log in</a>
                <a className="flex-nav-item" href="createUser">Sign up</a>
            </nav>
        </div>
    )

}
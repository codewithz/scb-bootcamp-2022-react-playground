import { Link } from "react-router-dom"

export function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand" to="/">Standard Chartered</Link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        {/* <a class="nav-link" href="/">Home </a> */}
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="/products">Products</a> */}
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="/posts/2022/02">Posts</a> */}
                        <Link className="nav-link" to="/posts/2022/02">Posts</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="/admin-dashboard">Admin</a> */}
                        <Link className="nav-link" to="/admin-dashboard">Admin</Link>
                    </li>
                    <li class="nav-item">

                        <Link
                            className="nav-link"
                            to="/use-case-one">
                            UC-1
                        </Link>
                    </li>
                    <li class="nav-item">

                        <Link
                            className="nav-link"
                            to="/use-case-two">
                            UC-2
                        </Link>
                    </li>
                    <li class="nav-item">

                        <Link
                            className="nav-link"
                            to="/use-case-three">
                            UC-3
                        </Link>
                    </li>
                    <li class="nav-item">

                        <Link
                            className="nav-link"
                            to="/material-ui">
                            Material UI
                        </Link>
                    </li>
                    <li class="nav-item">

                        <Link
                            className="nav-link"
                            to="/material-sign-in">
                            Material UI- SIgn In
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>


    )
}
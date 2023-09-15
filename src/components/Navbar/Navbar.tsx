import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    padding: 1% 5%;

    .logo-div {
        width: 7%;
        text-align: center;
    }

    .nav-div {
        display: flex;
        justify-content: center;
        width: 80%;
        align-items: center;
    }

    .nav-link {
        color: #000158;
        text-align: center;
        text-decoration: none;
        font-weight: 520;
        font-size: 1.1rem;
        margin: 0% 5%;
    }

    .search-dev {
        width: 10%;
    }
`;

function Navbar() {
    return (
        <Nav>
            <div className="logo-div">
                <Link to="/">
                    <StaticImage
                        src="../../images/logo.jpg"
                        alt="main-img"
                        className="hero-img"
                        placeholder="tracedSVG"
                        layout="fullWidth"
                    ></StaticImage>
                </Link>
            </div>
            <div className="nav-div">
                <Link className="nav-link" to="/tags">
                    TAGS
                </Link>
                <Link className="nav-link" to="/services">
                    SERVICES
                </Link>
                <Link className="nav-link" to="/about">
                    ABOUT
                </Link>
                <Link className="nav-link" to="/contact">
                    CONTACT
                </Link>
            </div>
            <div className="search-dev">{/* Search Bar */}</div>
        </Nav>
    );
}

export default Navbar;

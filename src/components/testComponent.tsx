import React from "react";
import SignIn from "./sign-in";

export default function Navbar({ fixed }:any) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <SignIn/>
        </>
    );
}

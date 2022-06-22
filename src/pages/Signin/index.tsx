import { Navigate } from "react-router-dom";


import { Section } from "./styles";
import { SigninButton } from "../../components/SigninButton";

export function Signin() {
    const isAuthenticated = localStorage.getItem('@MC_AC'); 

    if (isAuthenticated) return <Navigate to="/" replace={true} />

    return (
        <Section>
            <h1>Wellcome to <span>Marvel</span> <br/> Catalog.</h1>

            <SigninButton />
        </Section>
    )
}
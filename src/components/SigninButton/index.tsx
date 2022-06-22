import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAppDispatch } from "../../hooks/useReduxApp";
import { clientId } from "../../config/googleClientId";
import { setUser } from "../../slicers/userSlice";
import { SigninButtonWrapper } from "./styles";

export function SigninButton() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function onSigninSuccess(response:  GoogleLoginResponse | GoogleLoginResponseOffline) {
        const { profileObj, accessToken } = response as GoogleLoginResponse;

        const { name, email } = profileObj;
        
        const isAuthenticated = name && email ? true : false;
        
        if (!isAuthenticated) return;
        
        const user = {
            name, 
            email,
            isAuthenticated,
        }
        
        dispatch(setUser(user));

        localStorage.setItem("@MC_AC", accessToken);

        navigate("/", { replace: true });
    }
    
    function onSigninFailure(error: any) {
        setLoading(false);
    }

    return (
        <SigninButtonWrapper>
            <GoogleLogin
                onRequest={() => setLoading(true)}
                disabled={loading}
                clientId={clientId}
                isSignedIn={false}
                className="google-login"
                onSuccess={onSigninSuccess}
                onFailure={onSigninFailure}
                cookiePolicy="single_host_origin"
            />
        </SigninButtonWrapper>
    );
}
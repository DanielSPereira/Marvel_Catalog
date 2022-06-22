import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #0f172a;

        --text-title: #FFFFFF;
        --text-body: #B2B8F0;

        --green: #33CC95;
        --red: #ec1d24;

        --medium-blue: #112945;
        --light-blue: #133962
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;  
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        color: white;
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;
 
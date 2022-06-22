import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    font-size: 1.6rem;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    background: radial-gradient(circle, var(--light-blue) 0%, var(--background) 100%);
    
    h1 {
        margin-bottom: 40px;
        text-align: center;

        span {
            display: inline-block;
            padding: 0 5px;
            background-color: var(--red)
        }
    }
`;



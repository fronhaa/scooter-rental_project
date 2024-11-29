import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
    justify-content: space-between;
    padding: 0 20px 0 20px;
`;

export const HeaderMain = styled.div`
    width: 100%;
`;

export const ImageContainer = styled.div`
    img {
        width: 100px;
    }
`;

export const NavContainer = styled.div`
    nav {
        a {
            color: ${props => props.color};
            text-decoration: none;
            margin-right: 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        span {
            color: ${props => props.color};
        }
    }
`;
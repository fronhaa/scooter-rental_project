import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 84px);
    background-color: ${props => props.theme['purple-dark']};
    border-radius: 16px;
    margin: 41px 0;
`;

export const LoginTitle = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']};
    margin-bottom: 30px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 500px;
    background-color: white;
    border-radius: 16px;
    padding: 30px;
`;

export const ButtonContainer = styled.button`
    width: 100%;
    max-width: 500px;
    border: none;
    background-color: transparent;
    
    & button {
        width: 100%;
        padding: 10px 20px;
        border: none;
        background-color: ${props => props.theme['purple']};
        color: white;
        border-radius: 16px;
        cursor: pointer;
    }
`;
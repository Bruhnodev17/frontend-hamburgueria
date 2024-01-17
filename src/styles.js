import styled from "styled-components"


export const Container = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 100%;
`

export const Image = styled.img`
    margin-top: 30px;
`
export const SubContainer = styled.div`
    padding: 50px 35px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const H1 = styled.h1`
    color: #FFF;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 50px;
    text-align: center;
`
export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px; 
    margin-bottom: 10px;
    margin-left: 10px;
`
export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    padding: 19px 139px 18px 15px;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    margin-bottom: 40px ;
    font-size: 18px;
`
export const Button = styled.button`
    margin-top: 40px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    border-radius: 10px;
    font-size: 17px;
    border: none;
    cursor: pointer;
    background: #D93856;
    color: #FFF;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.7;
    }
`


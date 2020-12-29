import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #01bf71;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 400px;
    height: 500px;
    background: black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const TitleWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
export const FormTitle = styled.div`
    color: white;
    font-size: 20px;
    width: 100%;
    height: 30px;
    width: 240px;

`
export const InputField = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;

`
export const FormLabel = styled.label`
    color: white;
    font-size: 16px;
    width: 100%;

`
export const FormInput = styled.input`
    height: 50px;
    border-radius: 6px;
    width: 100%;
    padding: 0.5em 1em;

`
export const SubmitButton = styled.button`
    width: 85%;
    height: 50px;
    border: 6px;
    border-radius: 6px;
    text-decoration: none;
    padding: 0.5em 3em;
    font-weight: 400;
    color: white;
    text-align: center;
    transition: all 0.15s;
    cursor: pointer;
    background: #01bf71;
    font-size: 20px;
    &:hover {
        background: white;
        color: black;
    }

`
export const Forgot = styled.div`
    font-size: 12px;
    cursor: pointer;
    color: white;
    margin-bottom: 20px;
`
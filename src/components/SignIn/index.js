import React from 'react'
import {Container, Form, TitleWrapper, FormTitle, InputField, FormLabel, FormInput, SubmitButton, Forgot} from './SignInElements'

const SignIn = () => {
    return (
        <Container>
            <Form>
                <TitleWrapper>
                    <FormTitle>Sign in to your account</FormTitle>
                </TitleWrapper>
                <InputField>
                    <FormLabel htmlFor="email"> Email</FormLabel>
                    <FormInput type="email" name="email"/>
                </InputField>
                <InputField>
                    <FormLabel htmlFo="password"> Password</FormLabel>
                    <FormInput type="password" name="password"/>
                </InputField>

                <SubmitButton type="submit">Continue</SubmitButton>
                <Forgot>Forgot Password?</Forgot>
            </Form>
        </Container>
    )
}

export default SignIn

import React from 'react'
import { 
    Container, 
    Form, 
    FormContent, 
    FormWrap,
    Icon,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
 } from './SigninElements'

const SignIn
 = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to= "/"> Wrench </Icon>
                <FormContent>
                    <Form action = "#">
                        <FormH1> Sign into your account </FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type ='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type = 'password' required />
                        <FormButton type = 'submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn

import React, { useState, useEffect } from 'react'

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
    ErrorText,
    Text
 } from './SigninElements'

const SignIn = ({ handleSubmit, errorMessage, onChange }) => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to= "/"> Wrench </Icon>
                <FormContent>
                    <Form action = "#">
                        <FormH1> Sign into your account </FormH1>
                        { errorMessage && 
                            <ErrorText style={{color: 'red'}}> { errorMessage } </ErrorText> }
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput onChange={onChange} type ='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput onChange={onChange} type = 'password' required />
                        <FormButton onClick={handleSubmit} type = 'submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import {
  FormContent,
  FormLabel,
  FormInput,
  FormButton,
  Container,
  FormWrap,
  FormH1,
  Text,
  Form,
  LoginContainer,
  LoginInnerContainer,
  EmailPasswordLogin,
} from "./LoginElements";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const EmailPasswordSignIn = (e) => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     console.log("user ", result.user);
    //   })
    //   .catch((error) => alert(error));
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("user ", result.user);
        alert(JSON.stringify(result.user));
        history.push('/');
      })
      .catch((error) => alert(error));
  };

  const GoogleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("user details");
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://baradana-images.s3.ap-south-1.amazonaws.com/baraDanaLogo.png"
          alt="Baradana"
        />
        <EmailPasswordLogin>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></FormInput>
              <FormButton type="submit" onClick={EmailPasswordSignIn}>
                Sign In
              </FormButton>
              {/* <Text>Forgot password</Text>
                <a href="/signup">
                  <Text>Sign Up</Text>
                </a> */}
            </Form>
          </FormContent>
        </EmailPasswordLogin>
        <Button onClick={GoogleSignIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

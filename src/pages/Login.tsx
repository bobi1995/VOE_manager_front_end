import { Container, Box } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";

const RootStyle = styled("div")({
  height: "80vh",
  display: "grid",
  placeItems: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

const Login = () => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <LoginForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;

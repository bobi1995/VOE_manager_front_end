import { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { gql, useLazyQuery } from "@apollo/client";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import AlertBox from "./AlertBox";

const LOGIN_QUERY = gql`
  query ExampleQuery($username: String, $password: String) {
    login(username: $username, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN_QUERY);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Въведете потребител"),
    password: Yup.string().required("Въведете парола"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      getLogin({
        variables: {
          username: values.username,
          password: values.password,
        },
      });
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  if (data) {
    localStorage.setItem("voeToken", data.login.token);
    localStorage.setItem("voeUserId", data.login.userId);
    return <Navigate to="/home" />;
  }

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              label="Потребител"
              error={Boolean(touched.username && errors.username)}
              helperText={touched.username && errors.username}
              {...getFieldProps("username")}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Парола"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
            sx={{ my: 2 }}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={loading}
            >
              {loading ? "зареждане..." : "Вход"}
            </LoadingButton>
          </Box>
          {error?.message ? (
            <AlertBox
              text={error?.message}
              display={() => {}}
              success={false}
            />
          ) : null}
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;

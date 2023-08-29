import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/RegisterForm";
import useAuthCall from "../hooks/useAuthCall";
import { useSelector } from "react-redux";

export const Register = () => {
  const { register } = useAuthCall();

  return (
    <Container component="main" sx={{ height: "95vh", width: "95vw" }}>
      <Grid
        container
        justifyContent="space-between"
        direction="row-reverse"
        sx={{ height: "100%", p: 2 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ flex: 1, maxWidth: "100%", padding: "1rem" }}
        >
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              bio: "",
              image_link: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            display: { xs: "none", sm: "flex" },
            flex: 1,
            maxWidth: "100%",
            padding: "1rem",
          }}
        >
          <Container>
            <img
              src="/Register.jpg"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

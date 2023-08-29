import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCall from "../hooks/useAuthCall";

//import { useFirebaseBtnStyles } from "@mui-treasury/styles/button/firebase";
//import useButtonStyles from "../styles/SubmitBtn.styles.js";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/emrahugurlu2003">
        emrahugurlu
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Home() {
  const { login } = useAuthCall();
  //const myButtonStyle = useButtonStyles();

  //! harici validasyon şeması
  const loginSchema = object({
    email: string()
      .email("Lutfen geçerli bir email giriniz")
      .required("Bu alan zorunludur"),
    password: string()
      .required("Bu alan zorunludur")
      .min(8, "En az 8 karakter girilmelidir")
      .max(16, "En fazla 16 karakter girilmelidir")
      .matches(/\d+/, "En az bir rakam içermelidir.")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
      .matches(/[!,?{}><%&$#£+-.]+/, "En az bir özel karekter içermelidir."),
  });

  return (
    <Grid container component="main" sx={{ height: "95vh", width: "95vw" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(/LoginPicture.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            height: "100%", // Occupy full height of the container
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Vertically center content
            alignItems: "center",
            padding: 2, // Adjust padding
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "tertiary.main" }}>
            {/* <LockOutlinedIcon /> */}
            <LockPersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
              login(values); // Calling login function
              action.resetForm();
              action.setSubmitting(false);
            }}
          >
            {({ handleChange, handleBlur, values, touched, errors }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 3, mb: 2, backgroundColor: "tertiary.main" }}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Grid>
    </Grid>
  );
}

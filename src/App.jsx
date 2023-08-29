import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      tertiary: {
        light: "#ffb74d",
        main: "#ff9800",
        dark: "#ef6c00",
        contrastText: "#1a237e",
      },
      quaternary: {
        light: "#90a4ae",
        main: "#607d8b",
        dark: "#37474f",
        contrastText: "#ff5722",
      },
      quinary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      senary: {
        light: "#18ffff",
        main: "#00e5ff        ",
        dark: "#00b8d4",
        contrastText: "#000",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;

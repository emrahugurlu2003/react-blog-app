import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import ButtonAppBar from "./components/ButtonAppbar";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ButtonAppBar />
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;

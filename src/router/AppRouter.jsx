import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import ButtonAppBar from "../components/ButtonAppbar";
import Home from "../pages/Home";
import { Register } from "../pages/Register";
// import { About } from "../pages/About";
// import { Contact } from "../pages/Contact";
// import { MyPost } from "../pages/_MyPost";
// import Register from "../pages/Register"
// import PrivateRouter from "./PrivateRouter"
// import Dashboard from "../pages/Dashboard"
// import Home from "../pages/Home"
// import Purchases from "../pages/Purchases"
// import Sales from "../pages/Sales"
// import Products from "../pages/Products"
// import Firms from "../pages/Firms"
// import Brands from "../pages/Brands"

const AppRouter = () => {
  return (
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="register" element={<Register />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="mypost" element={<MyPost />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
        {/* <Route path="blog" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>
        </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

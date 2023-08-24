import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
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
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="register" element={<Register />} /> */}
        {/* <Route path="blog" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
          </Route>
        </Route> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
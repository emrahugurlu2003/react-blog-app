import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
//import Logo from "/FavIconLogo1Compressed.jpg";

export default function ButtonAppBar() {
  //? destruct etmeden açıkça yazarak consume etme
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log("currentUser:", currentUser);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "tertiary.main" }}>
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              // src={Logo}
              src={"/FavIconLogo1Compressed.jpg"}
              alt=""
              style={{ height: "50px", marginRight: "1rem" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuIcon />
            </Box>
          </IconButton>
          <Box sx={{ marginLeft: "auto" }}>
            {/* Ternary şeklinde yazarsak: */}
            {currentUser?.email ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit">Login</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

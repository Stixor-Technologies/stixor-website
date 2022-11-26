import React from "react";
import type { NextPage } from "next";
// import isekaiLogo from "../../public/images/icons/horizontal.png";
// import menu from "../../public/images/icons/menu.png";
import Head from "next/head";
import wallet from "../../public/images/icons/wallet.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import classes from "./navbar.module.css";

type Anchor = "top" | "left" | "bottom" | "right";

const Navbar: NextPage = (props) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      component="div"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.drawer}
    >
      <List>
        <ListItem className={classes.item}>
          <div className={classes.navbar_icons}>
            <Image
              src="/images/home.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          Home
        </ListItem>

        <ListItem className={classes.item}>
          <div className={classes.navbar_icons}>
            <Image
              src="/images/about.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          About us
        </ListItem>

        <ListItem className={classes.item}>
          <div className={classes.navbar_icons}>
            <Image
              src="/images/projects.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          Our Portfolio
        </ListItem>

        <ListItem className={classes.item}>
          <div className={classes.navbar_icons}>
            <Image
              src="/images/blogs.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          Blog
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.nav_content}>
          <div className={classes.logo}>
            <Image src="/images/logo.png" alt="" width={60} height={80} />
          </div>
          <div style={{ marginRight: "20px" }} className={classes.divider}>
            {/* <Image src={rectangle} alt="" /> */}
          </div>
        </div>

        <div className={classes.menu_mob}>
          {(["left"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <button
                onClick={toggleDrawer(anchor, true)}
                className={classes.menu_btn}
              >
                {/* menu */}
                <div className={classes.menu_icon}>
                  <Image
                    src="/images/menu.png"
                    alt=""
                    width={50}
                    height={50}
                    layout="responsive"
                  />
                </div>
              </button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

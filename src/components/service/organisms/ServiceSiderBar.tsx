import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { jsx, css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";

const SiderBar: React.FC = ({
  onClose = () => {
    console.log("closed");
  },
  visible: boolean,
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const styles = {
    drawer: css`
      .MuiPaper-elevation {
        border-radius: 3.125rem 0 0;
      }
    `,
    drawerHeader: css`
      !display: flex;
    `,
    closeIcon: css`
      color: #5693ef;
      margin-left: auto;
    `,
  };

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerVisible(open);
  };

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        anchor="right"
        open={drawerVisible}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={styles.drawer}
      >
        <div style={{ display: "flex", margin: "1rem" }}>
          <CloseIcon sx={styles.closeIcon} onClick={toggleDrawer(false)} />
        </div>
        drawerdrawerdrawerdrawer
      </SwipeableDrawer>
    </>
  );
};

export default SiderBar;

import { useState } from "react";

import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Hidden } from "@material-ui/core";

import cssClasses from "./BondsNav.module.css";

const CONVERTER = {
  all: "All Bonds",
  suggested: "Suggested Bonds",
  corporate: "Corporate Bonds",
  public: "Public Bonds",
  bank: "Bank Issued Bonds"
}

const BondsNav = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuSelectClicked = (val) => {
    handleClose();
    props.changed(val);
  }
  return (
    <div>
      <Hidden smDown>
      <Button
        style={props.type === "all" ? { borderBottom: "4px solid #2BAE66" } : {}}
        onClick={props.changed.bind(null, "all")}
      >
        All Bonds{" "}
      </Button>
      <Button  style={props.type === "suggested" ? { borderBottom: "4px solid #2BAE66" } : {}} onClick={props.changed.bind(null, "suggested")}>
        Suggested Bonds
      </Button>
      <Button style={props.type === "corporate" ? { borderBottom: "4px solid #2BAE66" } : {}} onClick={props.changed.bind(null, "corporate")}>
        Corporate Bonds
      </Button>
      <Button style={props.type === "public" ? { borderBottom: "4px solid #2BAE66" } : {}} onClick={props.changed.bind(null, "public")}>Public Bonds</Button>
      <Button style={props.type === "bank" ? { borderBottom: "4px solid #2BAE66" } : {}} onClick={props.changed.bind(null, "bank")}>
        Bank Issued Bonds
      </Button>
      <Divider className={cssClasses.line} />
      </Hidden>
      <Hidden smUp>
      <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {CONVERTER[props.selectedItem]}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "all")} >All Bonds</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "suggested")} >Suggested Bonds</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "corporate")} >Corporate Bonds</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "public")} >Public Bonds</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "bank")} >Bank Issued Bonds</MenuItem>
          </Menu>
        </div>    
      </Hidden>
    </div>
  );
};

export default BondsNav;

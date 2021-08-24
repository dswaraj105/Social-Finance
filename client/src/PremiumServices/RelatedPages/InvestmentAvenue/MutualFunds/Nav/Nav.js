import { useState } from "react";

import Divider from "@material-ui/core/Divider";
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Hidden } from "@material-ui/core";

import NavBtn from "./NavBtn/NavBtn";
import cssClasses from "./Nav.module.css";

const Converter = {
  'highreturns': "High Returns",
  "taxsaving": "Tax Saving",
  "betterthanfd": "Better Than FD",
  "topcompanies": "Top Companies",
  "sip": "SIP With 500",
  "sector": "Sector Bets"
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
        <NavBtn type={props.type} val='highreturns' clicked={props.changed.bind(null, "highreturns")} >High Returns</NavBtn>
        <NavBtn type={props.type} val="taxsaving" clicked={props.changed.bind(null, "taxsaving")} >Tax Saving</NavBtn>
        <NavBtn type={props.type} val="betterthanfd" clicked={props.changed.bind(null, "betterthanfd")} >Better than fd</NavBtn>
        <NavBtn type={props.type} val="topcompanies" clicked={props.changed.bind(null, "topcompanies")} >Top Companies</NavBtn>
        <NavBtn type={props.type} val="sip" clicked={props.changed.bind(null, "sip")} >SIP With 500</NavBtn>
        <NavBtn type={props.type} val="sector" clicked={props.changed.bind(null, "sector")} >Sector Bets</NavBtn>
      </Hidden>
      <Hidden smUp>
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {Converter[props.selectedItem]}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "highreturns")} >High Returns</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "taxsaving")} >Tax Saving</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "betterthanfd")} >Better Than Fd</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "topcompanies")} >Top Companies</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "sip")} >SIP With 500</MenuItem>
            <MenuItem onClick={handleMenuSelectClicked.bind(null, "sector")} >Sector Bets</MenuItem>
            {/* <MenuItem onClick={handleClose}>High Returns</MenuItem>
            <MenuItem onClick={handleClose}>Tax Saving</MenuItem>
            <MenuItem onClick={handleClose}>Better Than Fd</MenuItem>
            <MenuItem onClick={handleClose}>Top Companies</MenuItem>
            <MenuItem onClick={handleClose}>SIP with 500</MenuItem>
            <MenuItem onClick={handleClose}>Sector Bets</MenuItem> */}
          </Menu>
        </div>
      </Hidden>
      <Divider className={cssClasses.line} />
    </div>
  );
};

export default BondsNav;

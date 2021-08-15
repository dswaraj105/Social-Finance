import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import cssClasses from "./Nav.module.css";

const BondsNav = (props) => {
  return (
    <div>
      <Button
        style={
          props.type === "highreturns"
            ? { borderBottom: "4px solid #2BAE66" }
            : {}
        }
        onClick={props.changed.bind(null, "highreturns")}
      >
        High Returns
      </Button>
      <Button
        style={
          props.type === "taxsaving"
            ? { borderBottom: "4px solid #2BAE66" }
            : {}
        }
        onClick={props.changed.bind(null, "taxsaving")}
      >
        Tax Saving
      </Button>
      <Button
        style={
          props.type === "betterthanfd"
            ? { borderBottom: "4px solid #2BAE66" }
            : {}
        }
        onClick={props.changed.bind(null, "betterthanfd")}
      >
        Better Than Fd
      </Button>
      <Button
        style={
          props.type === "topcompanies" ? { borderBottom: "4px solid #2BAE66" } : {}
        }
        onClick={props.changed.bind(null, "topcompanies")}
      >
        Top Companies
      </Button>
      <Button
        style={
          props.type === "sip" ? { borderBottom: "4px solid #2BAE66" } : {}
        }
        onClick={props.changed.bind(null, "sip")}
      >
        SIP with 500
      </Button>
      <Button
        style={
          props.type === "sector" ? { borderBottom: "4px solid #2BAE66" } : {}
        }
        onClick={props.changed.bind(null, "sector")}
      >
        Sector Bets
      </Button>
      <Divider className={cssClasses.line} />
    </div>
  );
};

export default BondsNav;

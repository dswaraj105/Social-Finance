import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import cssClasses from "./BondsNav.module.css";

const BondsNav = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default BondsNav;

import Button from "@material-ui/core/Button";

const NavBtn = (props) => {


  return (
    <Button
      style={
        props.type === props.val ? { borderBottom: "4px solid #2BAE66" } : {}
      }
      onClick={props.clicked.bind(null, "sector")}
    >
      {props.children}
    </Button>
  );
};

export default NavBtn;

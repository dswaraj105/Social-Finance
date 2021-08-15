import Title from "./title/Title";

const Cources = (props) => {

  const courcesDisplay = props.cources.map((course, index) => {
    return <Title title={course} key={index} index={index+1} courseClicked={props.courseClicked} />
  });

  return (
    <>
      {courcesDisplay}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Cources;

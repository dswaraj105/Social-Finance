import Row from "./Row/Row";

const CryptoTable = (props) => {

  const displayData = props.data.map((crypto, index) => {
    return <Row
      key={index}
      num={(index+1).toString()}
      name={crypto.name}
      price={crypto.price}
      symbol={crypto.symbol}
      volume={crypto.volume}
      week={crypto['7d']}
      day={crypto['24h']}
      supply={crypto.circulatingsupply}
      marketcap={crypto.marketcap}
    />
  });

  return (
    <>
      {displayData}
    </>
  );
};

export default CryptoTable;
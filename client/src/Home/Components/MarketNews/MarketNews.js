import NewsCard from "./NewsCard/NewsCard";

import img1 from "./Images/news1.png";
import img2 from "./Images/news2.png";
import img3 from "./Images/news3.png";
import img4 from "./Images/news4.png";

const NEWS_LIST = [
  {
    image: img2,
    title: "Forex reserves fall $4.5 Billion in two weeks",
    link: "https://economictimes.indiatimes.com/news/economy/finance/forex-reserves-fall-4-5-billion-in-two-weeks/articleshow/88210084.cms",
  },
  {
    image: img1,
    title:
      "Stocks in the news: Star Health, Patym, Infosys, IIFL, Finance and Deepak Financers",
    link: "https://economictimes.indiatimes.com/markets/stocks/news/stocks-in-the-news-star-health-paytm-infosys-iifl-finance-and-deepak-fertilisers/articleshow/88197318.cms",
  },

  {
    image: img3,
    title:
      "Center inks two loan pacts of Rs 2,074 crore with Asian Development Bank",
    link: "https://economictimes.indiatimes.com/news/economy/finance/centre-inks-two-loan-pacts-of-rs-2074-crore-with-asian-development-bank/articleshow/88148224.cms",
  },
  {
    image: img4,
    title:
      "Cryptocurrency regulation needs collective efforts, says Finance Minister Sitharaman",
    link: "https://economictimes.indiatimes.com/news/economy/finance/cryptocurrency-regulation-needs-collective-efforts-says-finance-minister-sitharaman/articleshow/88083836.cms",
  },
];

const MarketNews = () => {
  const newsDisplay = NEWS_LIST.map((news, i) => {
    return (
      <NewsCard key={i} img={news.image} title={news.title} link={news.link} />
    );
  });

  return newsDisplay;
};

export default MarketNews;

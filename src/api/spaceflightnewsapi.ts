import ICardData from '../interfaces/ICardData';

const getAPINews = (
  setItems: React.Dispatch<React.SetStateAction<ICardData[] | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  url: string
) => {
  setItems([]);
  setIsLoading(true);
  fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=20&title_contains=${url}`)
    .then((response) => response.json())
    .then((data) => {
      setIsLoading(false);
      setItems(data);
    });
};

export default getAPINews;

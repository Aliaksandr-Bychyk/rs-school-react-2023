interface ICardData {
  id: number;
  imageUrl: string;
  title: string;
  publishedAt: string;
  newsSite: string;
  url?: string;
  summary?: string;
  updatedAt?: string;
  featured?: boolean;
  launches?: [];
  events?: [];
}

export default ICardData;

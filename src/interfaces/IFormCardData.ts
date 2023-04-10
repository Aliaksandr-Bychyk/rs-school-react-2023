interface IFormCardData {
  name: string;
  birthday: string;
  gender: string;
  file?: FileList;
  picture: File;
  quote: string;
  isSubscribed: boolean;
}

export default IFormCardData;

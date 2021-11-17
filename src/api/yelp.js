import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ZN_3Ovgu68sCv1ZUMLSyWDiHdOLYYA5pAsvGe_U0ylaEqgLodxifSCvvkBqlQlZiEbKNaBqTDOsxgS3JCYK0-ThJDD8AwzxQHLz06iZQLxKn5ALX53TAvbiTsVqVYXYx'
  }
})
import axios from 'axios';

const token = '29af20efc6f6d8a2d9a6ce8d6e35a3b0a65ed5aa31011d22b3a8b3f4b86f6474bf14060ea303a5d64453429cb5685907f61b3dc0bd6ad47b659097cc195315668e4e7fff52731ef9dcf6d1fd472aef85da18f4ff3a4978b602020a701b2372d868a21eeaa0d0aad49831767e7dc4cbff971e02da9c929eebb943ac185960eafa';


export const fetchPageContent = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/contents?populate=*', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(response.data.data[0])
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


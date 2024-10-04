import axios from 'axios';

const token = '3833f43cbd22389bb7cca20e5b95213b97e2469b6b9c87f46299b2f32792613da0df980db11492862852a050dff10757185e0145188dae23ecba649fb1cf73ec770e74c2967763be11ef6f4f10a1b79fc7f8646d57404aa6c16d305e460631ec9d97a6a99fd4f04000c7df61cde14a1033df8f750e7dceb00d5dbdecd9ede0f7';


export const fetchPageContent = async () => {
  try {
    const response = await axios.get('https://worthy-beef-fa3f6b6758.strapiapp.com/api/contents?populate=*', {
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


import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID DB4TkZktmlRd0VNELSdhHorGaqsua8T-HYZuTI26KeM',
    },
    params: {
      query: term,
    },
  });


  return response.data.results;
};

export default searchImages;

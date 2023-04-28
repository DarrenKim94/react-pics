import axios from "axios";

const searchImages = () => {
    axios.get('http://api.unsplash.com/search/photos', {
    headers: {
        Authorization: 'Client-ID DB4TkZktmlRd0VNELSdhHorGaqsua8T-HYZuTI26KeM'
    },
    params: {
        query: 'cars'
    },
    });
}
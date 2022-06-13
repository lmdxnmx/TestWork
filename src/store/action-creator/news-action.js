import axios from 'axios'
import {setNews} from "../newsReducer";

export const getNews = () => {
    return async (dispatch) => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
        dispatch(setNews(response.data))
    }
}
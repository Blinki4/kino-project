import {To} from "react-router-dom";

class SearchService {
    navigateToMovie(navigate: (to: To) => void | Promise<void>, id: number) {
        if (location.href.includes('movie')) {
            navigate(`/movie/${id}`)
            location.reload()
            return
        }
        navigate(`/movie/${id}`)
    }
}

export const searchService = new SearchService()
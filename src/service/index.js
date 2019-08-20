import axios from "./afetch"
import api from './configUrl'

// const service = {
//     articleList: (params) => axios.post(api.articleList,params)
// }

export default {
    articleList: (params) => axios.post(api.articleList,params),
    addArticle: (params) => axios.post(api.addArticle,params),
    deleteArticle: (params) => axios.post(api.deleteArticle,params)
}
/**
 * Created by lenovo on 2/25/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class ReviweAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getReviweUrl();
        return new HttpServiceConfig().get(FETCH_URL);
    }

    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getReviweUrl() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }
    getReviews(id) {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl() + id + "/reviews";
        return new HttpServiceConfig().get(FETCH_URL);
    }
}

export default ReviweAPIControllers;

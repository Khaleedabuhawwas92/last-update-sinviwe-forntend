/**
 * Created by lenovo on 3/3/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class PromoCodeAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getPromoCodeUrl();
        return new HttpServiceConfig().get(FETCH_URL);
    }
    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getPromoCodeUrl() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }
    create(body) {
        const FETCH_URL = new UrlAPIControllers().getPromoCodeUrl();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }
    update(body) {
        const FETCH_URL = new UrlAPIControllers().getPromoCodeUrl();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }
}
export default PromoCodeAPIControllers;
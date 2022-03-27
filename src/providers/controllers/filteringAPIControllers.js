/**
 * Created by lenovo on 3/3/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class filteringAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getFilteringUrl();
        return new HttpServiceConfig().get(FETCH_URL);
    }

    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getFilteringUrl() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }

    create(body) {
        const FETCH_URL = new UrlAPIControllers().getFilteringUrl();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }
    delete(id) {
        const FETCH_URL = new UrlAPIControllers().getFilteringUrl() + id;
        return new HttpServiceConfig().delete(FETCH_URL);
    }


    update(body) {
        const FETCH_URL = new UrlAPIControllers().getFilteringUrl();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }

    filterBetweenDates(startDate, endDate, shop_id) {
        const FETCH_URL = new UrlAPIControllers().getFilteringUrl() + startDate + "/" + endDate + "/" + shop_id ;
        return new HttpServiceConfig().get(FETCH_URL);
    }

  
    getInit() {
        const FETCH_URL = new UrlAPIControllers().getFilteringUrl() + 'initialize';
        return new HttpServiceConfig().get(FETCH_URL);
    }


}

export default filteringAPIControllers;

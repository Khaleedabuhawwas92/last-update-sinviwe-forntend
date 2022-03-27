/**
 * Created by lenovo on 3/3/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class NetprofitAPIController {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getNetprofit();
        return new HttpServiceConfig().get(FETCH_URL);
    }

    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getNetprofit() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }

    create(body) {
        const FETCH_URL = new UrlAPIControllers().getNetprofit();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }
    delete(id) {
        const FETCH_URL = new UrlAPIControllers().getNetprofit() + id;
        return new HttpServiceConfig().delete(FETCH_URL);
    }


    update(body) {
        const FETCH_URL = new UrlAPIControllers().getNetprofit();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }

    filterBetweenDates(startDate, endDate) {
        const FETCH_URL = new UrlAPIControllers().getNetprofit()+"completed/" + startDate + "/" + endDate;
        return new HttpServiceConfig().get(FETCH_URL);
    }



}

export default NetprofitAPIController;

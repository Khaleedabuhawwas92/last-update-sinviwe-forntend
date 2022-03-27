/**
 * Created by lenovo on 2/25/2018.
 */

import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class CountriesAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getCountriesUrl();
        return new HttpServiceConfig().get(FETCH_URL);
    }

    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getCountriesUrl() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }

    create(body) {
        const FETCH_URL = new UrlAPIControllers().getCountriesUrl();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }


    update(body) {
        const FETCH_URL = new UrlAPIControllers().getCountriesUrl();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }

    delete(id) {
        const FETCH_URL = new UrlAPIControllers().getCountriesUrl() + id;
        return new HttpServiceConfig().delete(FETCH_URL);
    }


}

export default CountriesAPIControllers;

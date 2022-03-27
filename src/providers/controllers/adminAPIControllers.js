/**
 * Created by lenovo on 2/25/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class AdminsAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getAdminUrl();
        return new HttpServiceConfig().get(FETCH_URL);
    }

    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getAdminUrl() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }

    create(body) {
        const FETCH_URL = new UrlAPIControllers().getAdminUrl();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }


    update(body) {
        const FETCH_URL = new UrlAPIControllers().getAdminUrl();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }

    delete(id) {
        const FETCH_URL = new UrlAPIControllers().getAdminUrl() + id;
        return new HttpServiceConfig().delete(FETCH_URL);
    }
    updatePasswod(body) {
        const FETCH_URL = new UrlAPIControllers().getAdminPasswordUrl();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }



}

export default AdminsAPIControllers;

/**
 * Created by lenovo on 2/25/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class ShopsAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl();
        return new HttpServiceConfig().get(FETCH_URL);
    }
    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }
    getOrdersById(shopId) {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl() + shopId + "/orders";
        return new HttpServiceConfig().get(FETCH_URL);
    }

    getPendingOrders(shopId) {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl() + shopId + "/pending_orders";
        return new HttpServiceConfig().get(FETCH_URL);
    }

   
    create(body) {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }


    update(body) {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }

    delete(id) {
        const FETCH_URL = new UrlAPIControllers().getShopsUrl() + id;
        return new HttpServiceConfig().delete(FETCH_URL);
    }
    createFileUpload(body) {
        console.log(body);
        const FETCH_URL = new UrlAPIControllers().getAmazonUrl();
        const formData = new FormData();
        formData.append('file', body);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return new HttpServiceConfig().post2(FETCH_URL, formData, config);
    }

    login(body) {
        console.log(body);
        const FETCH_URL = new UrlAPIControllers().getShopsLoginUrl();
        console.log(body);
        return new HttpServiceConfig().postLogin(FETCH_URL, body);
    }


}

export default ShopsAPIControllers;
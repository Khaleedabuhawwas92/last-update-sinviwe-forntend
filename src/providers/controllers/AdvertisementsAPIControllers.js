/**
 * Created by lenovo on 2/25/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class AdvertisementsAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getadvertisements();
        return new HttpServiceConfig().get(FETCH_URL);
    }

    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getadvertisements() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }
    getInit() {
        const FETCH_URL = new UrlAPIControllers().getCitiesUrl() + 'initialize';
        return new HttpServiceConfig().get(FETCH_URL);
    }

    create(body) {
        const FETCH_URL = new UrlAPIControllers().getadvertisements();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }


    update(body) {
        const FETCH_URL = new UrlAPIControllers().getadvertisements();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }

    delete(id) {
        const FETCH_URL = new UrlAPIControllers().getadvertisements() + id;
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
        return new HttpServiceConfig().post(FETCH_URL, formData, config);
    }


}

export default AdvertisementsAPIControllers;

/**
 * Created by lenovo on 2/25/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class UsersAPIControllers {


    findAll() {
        const FETCH_URL = new UrlAPIControllers().getUsers();
        return new HttpServiceConfig().get(FETCH_URL);
    }

    findById(id) {
        const FETCH_URL = new UrlAPIControllers().getUsers() + id;
        return new HttpServiceConfig().get(FETCH_URL);
    }

    create(body) {
        const FETCH_URL = new UrlAPIControllers().getUsers();
        return new HttpServiceConfig().post(FETCH_URL, body);
    }


    update(body) {
        const FETCH_URL = new UrlAPIControllers().getUsers();
        return new HttpServiceConfig().put(FETCH_URL, body);
    }

    delete(id) {
        const FETCH_URL = new UrlAPIControllers().getUsers() + id;
        return new HttpServiceConfig().delete(FETCH_URL);
    }
    login(body) {
        console.log(body);
        const FETCH_URL = new UrlAPIControllers().getLoginUrl();
        console.log(FETCH_URL);
        return new HttpServiceConfig().postLogin(FETCH_URL, body);
    }
    resetPassword(body) {
        const FETCH_URL = new UrlAPIControllers().getUsers()+"reset_password";
        return new HttpServiceConfig().putResetPassword(FETCH_URL, body);
    }


}

export default UsersAPIControllers;

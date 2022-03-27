/**
 * Created by lenovo on 3/3/2018.
 */
import UrlAPIControllers from "../config/httpUrlConfig";
import HttpServiceConfig from "../config/httpServiceConfig";

export class OrderAPIControllers {


    setInProgress(orderId) {
        const FETCH_URL = new UrlAPIControllers().getOrderUrl() + orderId + "/in_progress";
        return new HttpServiceConfig().put(FETCH_URL, {});
    }


    setInComplet(orderId) {
        const FETCH_URL = new UrlAPIControllers().getOrderUrl() + orderId + "/completed";
        return new HttpServiceConfig().put(FETCH_URL, {});
    }
    setRejact(orderId) {
        const FETCH_URL = new UrlAPIControllers().getOrderUrl() + orderId + "/rejected";
        return new HttpServiceConfig().put(FETCH_URL, {});
    }
    setCanseled(orderId) {
        const FETCH_URL = new UrlAPIControllers().getOrderUrl() + orderId + "/cancelled";
        return new HttpServiceConfig().put(FETCH_URL, {});
    }

    getPendingOrders() {
        const FETCH_URL = new UrlAPIControllers().getOrderUrl() + "pending_orders";
        return new HttpServiceConfig().get(FETCH_URL);
    }







}






export default OrderAPIControllers;
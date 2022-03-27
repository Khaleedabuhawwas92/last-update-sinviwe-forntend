//const ONLINE_URL = 'http://app.haleni.com'; //
//const ONLINE_URL = 'http://192.168.1.12'; //
const ONLINE_URL = "http://127.0.0.1"; //
const api = "api/";
const ONLINE_PORT = "3009";
const FakeAPI = ONLINE_URL + ":" + ONLINE_PORT + "/";
export class httpUrlConfig {
  getAdminUrl() {
    return FakeAPI + api + "admins/";
  }
  getReviweUrl() {
    return FakeAPI + api + "reviews/";
  }
  getAdminPasswordUrl() {
    return FakeAPI + api + "admins/change_password/";
  }
  getAnnouncementsdUrl() {
    return FakeAPI + api + "announcements/";
  }

  getCitiesUrl() {
    return FakeAPI + api + "cities/";
  }

  getCountriesUrl() {
    return FakeAPI + api + "countries/";
  }

  getDessertCategoriesUrl() {
    return FakeAPI + api + "dessert_categories/";
  }
  getLoginUrl() {
    return FakeAPI + api + "admins/login/";
  }

  getDessertUrl() {
    return FakeAPI + api + "desserts/";
  }

  getShopsUrl() {
    return FakeAPI + api + "shops/";
  }
  getShopsLoginUrl() {
    return this.getShopsUrl() + "login/";
  }
  getOrderUrl() {
    return FakeAPI + api + "orders/";
  }

  getUsers() {
    return FakeAPI + api + "users/";
  }

  getFilteringUrl() {
    return FakeAPI + api + "orders/";
  }
  getPromoCodeUrl() {
    return FakeAPI + api + "promo_codes/";
  }
  getNetprofit() {
    return FakeAPI + api + "statistics/";
  }

  getadvertisements() {
    return FakeAPI + api + "advertisements/";
  }

  getAmazonUrl() {
    return FakeAPI + api + "amazon/";
  }
}
export default httpUrlConfig;

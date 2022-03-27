/**
 * Created by lenovo on 12/13/2017.
 */
import { post, put } from "axios";

export class HttpServiceConfig {
  get(apiUrl, headers) {
    return new Promise(function (resolve, reject) {
      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  put(apiUrl, body, headers) {
    return new Promise(function (resolve, reject) {
      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  post2(apiUrl, body, config) {
    return post(apiUrl, body, config);
  }

  post(apiUrl, body, headers) {
    return new Promise(function (resolve, reject) {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err.toString());
          reject(err);
        });
    });
  }

  delete(apiUrl) {
    return new Promise(function (resolve, reject) {
      fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  putResetPassword(apiUrl, body, headers) {
    return new Promise(function (resolve, reject) {
      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) =>
          response.json().then((json) => ({
            status: response.status,
            json,
          }))
        )
        .then(
          ({ status, json }) => {
            if (status >= 200 && status < 300) {
              resolve(json);
            }
            if (status >= 400) {
              let data = { status: status, error_message: json };
              resolve(data);
            }
          },
          (err) => {
            console.log("error" + err);
          }
        );
    });
  }

  postLogin(apiUrl, body) {
    return new Promise(function (resolve, reject) {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + body,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default HttpServiceConfig;

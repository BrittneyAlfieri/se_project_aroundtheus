export class Api {
  constructor(options) {}

  getInfo() {
    return fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
      method: "GET",
      headers: {
        authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Error: ${res.status}");
    });
  }
}

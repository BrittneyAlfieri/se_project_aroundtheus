export default class Api {
  constructor(options) {}

  getUserInfo() {
    return fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
      method: "GET",

      headers: {
        authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      method: "GET",
      headers: {
        authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  // getProfileData() {
  //   return fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
  //     method: "PATCH",
  //     headers: {
  //       authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
  //       "Content-Type": "application.json",
  //     },
  //     body: JSON.stringify({
  //       name: " ",
  //       about: " ",
  //     }),
  //   });
  // }

  addNewCard(user) {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      method: "Post",
      headers: {
        authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
        "Content-Type": "application.json",
      },
      body: JSON.stringify({
        name: user.name,
        link: user.link,
      }),
    });
  }
}

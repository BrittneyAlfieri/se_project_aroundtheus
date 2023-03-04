export default class Api {
  constructor() {}

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

  patchProfileData({ name, about }) {
    return fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
      method: "PATCH",
      headers: {
        authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addNewCard({ name, link }) {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      method: "POST",
      headers: {
        authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/group-12/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addCardLike(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/group-12/cards/likes/${cardId}`,
      {
        method: "PUT",
        headers: {
          authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  removeCardLike(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/group-12/cards/likes/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    console.log(this._nameElement);
  }

  getUserInfo() {
    console.log(this._nameElement.textContent);
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
    console.log((this._nameElement.textContent = name));
    console.log(name);
  }
}

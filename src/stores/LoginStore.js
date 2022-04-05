import { defineStore } from "pinia";

export const LoginStore = defineStore({
  id: "login",
  state: () => ({
    users: JSON.parse(localStorage.getItem("userList")) || [
      {
        firstname: "",
        lastname: "",
        email: "",
        username: "admin",
        password: "admin",
        isSuperUser: true,
      },
    ],
    isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
    isSuperUser: JSON.parse(localStorage.getItem("isSuperUser")) || false,
  }),
  getters: {
    getIsLogged: (state) => state.isLogged,
  },
  actions: {
    hasUser(user) {
      return this.users.some((i) => i.username === user.username);
    },
    hasPassword(user) {
      const userFind = this.users.find((i) => i.username === user.username);
      return userFind.password === user.password ? true : false;
    },
    isSuperUser(user) {
      const userFind = this.users.find((i) => i.username === user.username);
      return userFind.isSuperUser;
    },
    setUser(user) {
      this.users = [...this.users, user];
      const userList = JSON.stringify(this.users);
      localStorage.setItem("userList", userList);
    },
    setIsLogged(value) {
      this.isLogged = value;
      localStorage.setItem("isLogged", value);
    },
    setIsSuperUser(value) {
      this.isSuperUser = value;
      localStorage.setItem("isSuperUser", value);
    },
    logout() {
      this.setIsLogged(false);
      this.setIsSuperUser(false);
      localStorage.setItem("isLogged", false);
      localStorage.setItem("isSuperUser", false);
      location.reload();
    },
  },
});

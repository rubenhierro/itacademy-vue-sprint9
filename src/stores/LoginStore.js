import { defineStore } from "pinia";

export const LoginStore = defineStore({
  id: "login",
  state: () => ({
    users: JSON.parse(localStorage.getItem("userList")) || [],
    isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
  }),
  getters: {
    getIsLogged: (state) => state.isLogged
  },
  actions: {
    hasUser(user) {
      return this.users.some((i) => i.username === user.username);
    },
    hasPassword(user) {
      const userFind = this.users.find((i) => i.username === user.username);
      return userFind.password === user.password ? true : false;
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
    logout() {
      this.setIsLogged(false);
      location.reload();
    },
  },
});

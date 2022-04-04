export default class {
  firstname;
  lastname;
  email;
  username;
  password;

  constructor(firstname, lastname, email, username, password) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.username = username),
      (this.password = password);
  }
}

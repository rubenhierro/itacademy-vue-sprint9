export default class {
  firstname;
  lastname;
  email;
  username;
  password;
  isSuperUser;

  constructor(firstname, lastname, email, username, password, isSuperUser) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.username = username),
      (this.password = password);
    this.isSuperUser = isSuperUser;
  }
}

export default class Booking {
  id = 0;
  date;
  start;
  end;
  name;
  email;
  adults;
  childs;
  comment;
  isAproved;

  constructor(start, end, name, email, adults, childs, comment) {
    this.id = Booking.incrementId();
    this.date = new Date();
    this.start = start;
    this.end = end;
    this.name = name;
    this.email = email;
    this.adults = adults;
    this.childs = childs;
    this.comment = comment;
    this.isAproved = null;
  }
  static incrementId() {
    if (!this.id) this.id = 1;
    else this.id++;
    return this.id;
  }
}

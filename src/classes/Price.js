export default class Service {
  start;
  end;
  amount;

  constructor(start, end, amount) {
    (this.start = start.toLocaleDateString()),
      (this.end = end.toLocaleDateString()),
      (this.amount = parseInt(amount));
  }
}

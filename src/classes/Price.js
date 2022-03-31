export default class Price {
  start;
  end;
  amount;

  constructor(start, end, amount) {
    (this.start = start.toLocaleDateString()),
      (this.end = end.toLocaleDateString()),
      (this.amount = parseInt(amount));
  }
}

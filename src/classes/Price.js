export default class Price {
  start;
  end;
  amount;

  constructor(start, end, amount) {
    (this.start = start), (this.end = end), (this.amount = parseInt(amount));
  }
}

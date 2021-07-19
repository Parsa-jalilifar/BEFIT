export class Plan {
  membership: string;
  benefits: string[];
  price: number;

  constructor(membership: string, benefits: string[], price: number) {
    this.benefits = benefits;
    this.membership = membership;
    this.price = price;
  }
}

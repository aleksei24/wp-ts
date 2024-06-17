class Employee {
  fullTitle: string
  constructor(
    public jobTitle: string,
    public lastName: string
  ) {
    this.fullTitle = jobTitle + ' ' + lastName
  }
}
class Employee {
  fullTitle: string
  constructor(jobTitle: string, lastName: string) {
    this.fullTitle = jobTitle + ' ' + lastName
  }
}
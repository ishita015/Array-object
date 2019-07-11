import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  invalid:boolean = true;


  companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company nine", category: "Retail", start: 1981, end: 1989 },
  ];

  ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

  constructor() { }

  ngOnInit() {

    // ----------- for -------------------
    for (let i = 0; i < this.companies.length; i++) {
      console.log("for", this.companies[i]);
    }

    //------------- ForEach----------------
    this.companies.forEach(function (company) {
      console.log("foreach fuction", company.name);
    });

    // ----------- for -------------------
    let canDrive = [];
    for (let i = 0; i < this.ages.length; i++) {
      if (this.ages[i] >= 21) {
        canDrive.push(this.ages[i]);
      }
    }
    console.log("canDrive", canDrive);

    // ----------- filter -------------------
    let canDrive1 = this.ages.filter(function (age) {
      if (age >= 21) {
        return true;
      }
    });
    console.log("canDrive1", canDrive1);

    // ----------- filter -------------------
    let canDrive11 = this.ages.filter(age => age >= 21);
    console.log("canDrive11", canDrive11);

    // ----------- filter finance companies -------------------

    let retailCompanies = this.companies.filter(function (company) {
      if (company.category === 'Finance') {
        return true;
      }
    });
    console.log("retailCompanies", retailCompanies);

    // ----------- filter finance companies -------------------

    let retailCompanies11 = this.companies.filter(company => company.category ===
      'Finance')
    console.log("retailCompanies11", retailCompanies11);

    // ----------- filter and get 80's companies -------------------

    let eightiesCompanies = this.companies.filter(company1 =>
      (company1.start >= 1980 && company1.start < 1990));
    console.log("eightiesCompanies", eightiesCompanies);

    // ----------- filter and get 10 years -------------------
    let lastTenYears = this.companies.filter(company =>
      company.end - company.start >= 10)
    console.log("lastTenYears", lastTenYears);


    // ----------- map -------------------
    const companyNames = this.companies.map((company) => (company.start -
      company.end));
    console.log("companyNames", companyNames);

    const ageMap = this.ages.map(age => Math.sqrt(age))
      .map(age => age * 2);

    console.log("ageMap", ageMap);

    // ------------------ sort -------------------------
    const sortedCompanies = this.companies.sort(function (c1, c2) {
      if (c1.start > c2.start) {
        return 1
      }
      else {
        return -1
      }
    });

    console.log("sortedCompanies", sortedCompanies);

    const sortCompanies = this.companies.sort((a, b) => (a.start > b.start ? 1 : -1))
    console.log("sortCompanies", sortCompanies);

    const sortAges = this.ages.sort((a, b) => (a - b));
    console.log("sortAges", sortAges);

    const sortAges11 = this.ages.sort((a, b) => (b - a));
    console.log("sortAges11", sortAges11);

    // -------------------reduce-------------------------
    let ageSum = 0;
    for (let i = 0; i < this.ages.length; i++) {
      ageSum += this.ages[i];
    }
    console.log("ageSum", ageSum);

    const ageSum11 = this.ages.reduce(function (total, age) {
      return total + age;
    });
    console.log("ageSum11", ageSum11);

    const ageSum12 = this.ages.reduce((total, age) => total + age, 0);
    console.log("ageSum12", ageSum12);

    const totalYears = this.companies.reduce((total, company) => total +
      (company.end - company.start), 0);
    console.log("totalYears", totalYears);

    // -------------------Combine-------------------------
    const combined = this.ages.map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((a,b) => a+b, 0);
    console.log("combined",combined);
  }

  changevalue(valid){
    this.invalid = valid;
  }
}

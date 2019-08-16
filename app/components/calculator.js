import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import * as md5 from 'md5';

export default class CalculatorComponent extends Component {
  years = ["2019", "2020", "2021", "2022", "2023"];
  months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  @tracked userName = "Some_Random_User";
  @tracked expiryYear = "2020";
  @tracked expiryMonth = "Oct";

  get expiryMonthIndex() {
    let index = this.months.indexOf(this.expiryMonth);
    let paddedMonthString = "0" + (index + 1);
    return paddedMonthString.substring(paddedMonthString.length - 2);
  }

  get licenseKey() {
    return md5(this.userName + this.expiryYear + this.expiryMonthIndex);
  }

  @action
  setExpiryYear(year) {
    this.expiryYear = year;
  }

  @action
  setExpiryMonth(month) {
    this.expiryMonth = month;
  }
}

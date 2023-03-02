import { Component, OnInit } from '@angular/core';
import { TipsService } from '../services/tips.service';

@Component({
  selector: 'app-tips-form',
  templateUrl: './tips-form.component.html',
})
export class TipsFormComponent {
  bill: number = 0
  numberOfPeople: number = 1
  tipsValues = [5, 10, 15, 25, 50]

  constructor(private tipService: TipsService) {}

  onChangeTip(newTip: number) {
    this.tipService.setTip(newTip)
  }

  onChangeBill() {
    this.tipService.setBill(this.bill)
  }

  onChangeNumberOfPeople() {
    this.tipService.setNumberOfPeople(this.numberOfPeople)

  }

}

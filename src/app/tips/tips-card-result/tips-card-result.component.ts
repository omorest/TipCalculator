import { Component, OnDestroy, OnInit } from '@angular/core';
import { TipsService } from '../services/tips.service';
import { FormTip, Price } from '../interfaces/tips.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tips-card-result',
  templateUrl: './tips-card-result.component.html',
})
export class TipsCardResultComponent implements OnInit, OnDestroy {

  formTipSub: Subscription = new Subscription
  tipAmountPerPerson: number = 0
  totalPricePerPerson: number = 0
  totalPrice: number = 0

  constructor(private tipService: TipsService) {}

  ngOnInit(): void {
    this.formTipSub = this.tipService.formTipData.subscribe(infoFormTip => {
      const priceInfo = this.calculatePriceInfoPerPerson(infoFormTip)
      this.tipAmountPerPerson = priceInfo.tipPerPerson
      this.totalPricePerPerson = priceInfo.totalPricePerPerson
      this.totalPrice = priceInfo.totalPrice
    })
  }

  resetPrice() {
    this.tipService.reset()
  }

  ngOnDestroy(): void {
    this.formTipSub.unsubscribe()
  }

  private calculatePriceInfoPerPerson(infoFormTip: FormTip): Price {
    const tipAmount = (infoFormTip.bill * (infoFormTip.tip / 100))
    const totalPrice = infoFormTip.bill + tipAmount
    return {
      tip: tipAmount,
      tipPerPerson: Math.trunc((tipAmount / infoFormTip.numberOfPeople) * 100) / 100,
      totalPricePerPerson: Math.trunc((totalPrice / infoFormTip.numberOfPeople) * 100) / 100,
      totalPrice: Math.trunc(totalPrice * 100) / 100
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormTip } from '../interfaces/tips.interface';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  private _formTipData: BehaviorSubject<FormTip> = new BehaviorSubject<FormTip>({bill: 0 , tip: 0, numberOfPeople: 1})

  constructor() { }

  get formTipData() {
    return this._formTipData.asObservable()
  }

  setBill(newBill: number) {
    this._formTipData.next({...this._formTipData.value, bill: newBill,})
  }

  setTip(newTip: number) {
    this._formTipData.next({...this._formTipData.value, tip: newTip,})
  }

  setNumberOfPeople(newNumberOfPeople: number) {
    this._formTipData.next({...this._formTipData.value, numberOfPeople: newNumberOfPeople,})
  }

  reset() {
    this._formTipData.next({bill: 0 , tip: 0, numberOfPeople: 1})
  }

}

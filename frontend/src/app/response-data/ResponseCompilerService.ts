import {Injectable} from '@angular/core';
import {
  ConditionsScreenResponse,
  CoronaScreenResponse,
  FormResponse,
  PersonalData,
  SymptomsScreenResponse,
  WelcomeScreenResponse
} from "./FormResponse";

import {Questionnaire} from "../../api/model/questionnaire"

@Injectable({
  providedIn: 'root'
})
export class ResponseCompilerService {
  private response: Questionnaire;

  constructor() {
    this.response = <Questionnaire>{};
  }

  public isFirstTime(): boolean {
    if (this.response.firstTime == undefined) return true;
    else return !this.response.firstTime;
  }

  addWelcomeScreenData(value: WelcomeScreenResponse): void {
    console.log(value);
    this.response.firstTime = value.seenBefore === "yes";
    if (value.personalData) {
      this.response.age = value.personalData.age || undefined;
      this.response.gender = value.personalData.gender || undefined;
      this.response.zipCode = value.personalData.postcode || undefined;
      return;
    }
  }

  addSymptomsScreenData(value: SymptomsScreenResponse): void {
    console.log(value);
    this.response.cough = value.cough || undefined;
    this.response.coughDry = value.coughData.coughDry || undefined;
    this.response.coughProductive = value.coughData.coughProductive || undefined;
    this.response.coughPainful = value.coughData.coughPainful || undefined;
    this.response.fever = value.fever || undefined;
    this.response.feverSuspected = value.feverData.feverSuspected || undefined;
    this.response.feverConfirmed = value.feverData.feverConfirmed || undefined;
    this.response.noseAffected = value.nose || undefined;
    this.response.pain = value.pain || undefined;
    this.response.painHead = value.painData.painHead || undefined;
    this.response.painLimbs = value.painData.painLimbs || undefined;
    this.response.diarrhea = value.diarrhea || undefined;
    this.response.throat = value.throat || undefined;
    this.response.dyspnea = value.dyspnea || undefined;
    this.response.fatigue = value.fatigue || undefined;
    return;
  }


  addCoronaScreenData(value: CoronaScreenResponse): void {
    console.log(value);
    this.response.coronaTest = value.coronaTested || undefined;
    this.response.coronaPositive = value.positiveTest || undefined;
    this.response.coronaDate = value.testDate || undefined;
    return;
  }

  addConditionsScreenData(value: ConditionsScreenResponse): void {
    console.log(value);
  }

  public submitData(): void {
    // TODO send to API
  }
}

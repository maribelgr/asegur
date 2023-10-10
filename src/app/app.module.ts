import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';
import { Step9Component } from './step9/step9.component';
import { Step10Component } from './step10/step10.component';
import { Step11Component } from './step11/step11.component';
import { Step12Component } from './step12/step12.component';
import { Step13Component } from './step13/step13.component';
import { Step14Component } from './step14/step14.component';
import { Step15Component } from './step15/step15.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step9Component,
    Step10Component,
    Step11Component,
    Step12Component,
    Step13Component,
    Step14Component,
    Step15Component,
    BudgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

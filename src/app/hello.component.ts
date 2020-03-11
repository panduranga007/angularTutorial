import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}} - {{version}}!</h1>

            <h2>Class Binding</h2>
            <h4 [class]="successClass">Class</h4>
            <h4 [class.test-special]="isSpecial">Class</h4>
            <h4 [ngClass]="messageClass">Class</h4>

            <h2>Style Binding</h2>
            <h4 [style.color]="isSpecial ? 'red' : 'orange'"> Style </h4>
            <h4 [ngStyle]="styleClass"> Style </h4>
              
            <h2>Event Binding</h2>
            <h4 [ngClass]="messageClass">This is {{test}}</h4>  
            <button (click)="onSuccess()">Success</button>
            <button (click)="onFailure()">Failure</button>

            <h2>Template Reference Variables</h2>
            <h4>Welcome {{value}}</h4>
            <input #myInput type="text">
            <button (click)="onSubmit(myInput.value)">Submit</button>
            <h4>

            <h2>Two Way Binding [()]</h2>
            <input [(ngModel)]="value" type="text">
            {{value}}


            <h2>Structural Directives</h2>
            <h2>ngIf</h2>
            <h4 *ngIf="false; else elseBlock "> Displaying </h4>
            <ng-template #elseBlock>
              <h4>Hidden</h4>
            </ng-template>
            
            <div *ngIf="true; then thenBlock else elseBlock "></div> 
            <ng-template #thenBlock> <h4>Displaying </h4> </ng-template>
            <ng-template #elseBlock> <h4>Hidden</h4> </ng-template>

            <h2>ngSwitch</h2>
            <div [ngSwitch]="color">
              <h4 *ngSwitchCase="'red'">You picked red</h4>
              <h4 *ngSwitchDefault>Pick Something</h4>
            </div>

           <h2>ngFor</h2>
           <table>
            <div *ngFor="let row of table; index as i">
              <tr>
                <td>{{i+1}}</td>
                <td>{{row.name}}</td>
                <td>{{row.marks}}</td>
              </tr>
            </div>
           </table>

           <h2>Component Interaction</h2>
           <h4>Properties from App comp : {{name}} , {{version}}</h4>
           <h4>Properties to App comp</h4>
           <button (click)="fireEvent('Child')">Send to parent</button>

           <h2>Pipes</h2>
           <h4>{{'AbCd' | lowercase}}</h4>
           <h4>{{'AbCd' | uppercase}}</h4>
           <h4>{{'AbCd' | titlecase}}</h4>
           <h4>{{'AbCd' | slice:1:2}}</h4>
           <h4>{{5.678 | number:'1.2-3' }}</h4>
           <h4>{{5.678 | number:'3.1-2' }}</h4>
           <h4>{{0.25 | percent}}</h4>
           <h4>{{0.25 | currency:'INR'}}</h4>
           <h4>{{0.25 | currency}}</h4>
           
           <h4>{{date | date: 'short'}}</h4> 
           <h4>{{date | date: 'shortDate'}}</h4>
           <h4>{{date | date: 'shortTime'}}</h4> 


            `,
  styles: [`h2 {font-family: Helvetica;} 
            h4 { font-family: Lato;}
            .test-success {
                color: green;
            }
            .test-danger {
                color: red;
            }
            .test-special {
                font-style: italic;
            }
          `]
})
export class HelloComponent  {

  //COMPONENT INTERACTION-(parent to child) (Received from app component)
  @Input() name: string;
  @Input() version: number;


  //COMPONENT INTERACTION-(parent to child) (Sending to app component)
  @Output() childEmitter = new EventEmitter();
  fireEvent(value)
  {
    this.childEmitter.emit(value);
  }

  


  public successClass = "test-success";
  public isSpecial = true;
  public messageClass = {
    "test-success": true,
    "test-special": true,
    "test-danger": false
  };

  public styleClass = {
    "fontStyle": "italic",
    "color": "blue"
  };

  public test = "test";
  onSuccess(){
    this.test = 'Success';
    this.messageClass = {
      "test-success": true,
      "test-special": true,
      "test-danger": false
    };
  }

  onFailure(){
    this.test = 'Danger';
    this.messageClass = {
      "test-success": false,
      "test-special": true,
      "test-danger": true
    };
  }

  public value = "Default";

  onSubmit(val){
    this.value = val;
  }

  public color = 'red';

  public table = [
    {
      "name":"Ram",
      "marks":"75"
    },
    {
      "name":"Shyam",
      "marks":"65"
    },
    {
      "name":"Sita",
      "marks":"78"
    }
  ]

  public date = new Date();



}

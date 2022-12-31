import { Component } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
  exportAs:'ngForm'
})
export class FormComponentComponent {

  submitform(login: any)
  {
    console.log("Form Submitted!",login)
  }

}

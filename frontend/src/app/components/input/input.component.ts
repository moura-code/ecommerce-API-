import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'inputform',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css'],
})
export class InputComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  Password = new FormControl('', [Validators.required, Validators.minLength(6)]);
}

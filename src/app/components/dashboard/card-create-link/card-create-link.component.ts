import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { SetCrearLink } from '../../../store/actions/links.actions';

@Component({
  selector: 'app-card-create-link',
  templateUrl: './card-create-link.component.html',
  styleUrls: ['./card-create-link.component.scss']
})
export class CardCreateLinkComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{}>
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  private buildForm() {
    
    this.form = this.formBuilder.group({
      url: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });

  }

  onSubmit({value, valid}){
    if(valid) {
      this.store.dispatch(SetCrearLink(value))
      console.log(value);
    }
  }
}

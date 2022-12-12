import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  public i18nDPdata: NgbDateStruct;
  public dateHidden: any;
  public dataCountries = [
    {id: 1, country: "México"},
    {id: 2, country: "Estados Unidos"},
    {id: 2, country: "Canada"}
    
  ]

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      country: ['País'],
      city: [''],
      dateOfBirth: ['', Validators.required]
    });
  }

  get nameField(){
    return this.form.get('name');
  }

  get lastNameField(){
    return this.form.get('lastName');
  }

  get emailField(){
    return this.form.get('email');
  }

  get dateOfBirthField(){
    return this.form.get('dateOfBirth');
  }

  saveForm(){
    if(this.form.valid){
      const dataForm = this.form.value; 
      console.log("dataForm: ", dataForm);
    }
    else {
      console.log('Error');
      this.form.markAllAsTouched();
    }
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

  ngOnInit(): void {
  }

}

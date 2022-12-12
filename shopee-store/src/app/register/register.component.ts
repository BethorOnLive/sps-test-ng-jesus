import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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
      this.ConfirmTextOpen(dataForm);
    }
    else {
      console.log('Error');
      this.form.markAllAsTouched();
    }
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

  ConfirmTextOpen(dataForm:any){
    const dataFields = JSON.stringify(dataForm);
    
    Swal.fire({
      title: '¿La información es correcta?',
      text: dataFields,
      icon: 'warning',
      confirmButtonColor: '#28C76F',
      confirmButtonText: ' Sí, es correcta ',
      customClass: {
        confirmButton: 'btn btn-primary',
      }
    }).then(function (result) {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: '¡Gracias!',
          text: 'Recibimos tu información correctamente',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

}

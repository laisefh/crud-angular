import { CachorroService } from './../../cachorro.cachorro/cachorro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-cachorro',
  templateUrl: './add-cachorro.component.html',
  styleUrls: ['./add-cachorro.component.css']
})
export class AddCachorroComponent implements OnInit{
  cachorroForm: FormGroup;

  constructor(
    private CachorroService: CachorroService,
    private fb: FormBuilder,
    private toastr: ToastrService){
      this.cachorroForm = this.createForm();
    }
    ngOnInit(){
      this.CachorroService.getCachorroList;
    }

    createForm(){
      return this.fb.group({
        nome: new FormControl('', Validators.required),
        raca: new FormControl('', Validators.required),
        idade: new FormControl('', Validators.required),
      });
    }
    resetForm(){
      this.cachorroForm.reset();
    }
    submitForm(){
      this.CachorroService.insertCachorro(this.cachorroForm.value);
      this.toastr.success(
        this.cachorroForm.controls['nome']
.value + " adicionado");
    }
    get nome(){
      return this.cachorroForm.get('nome');
    }
    get raca(){
      return this.cachorroForm.get('raca');
    }
    get idade(){
      return this.cachorroForm.get('idade');
    }
  }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { CachorroService } from '../cachorro.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-edit-cachorro',
  templateUrl: './edit-cachorro.component.html',
  styleUrls: ['./edit-cachorro.component.css']
})
export class EditCachorroComponent implements OnInit{
  cachorroForm: FormGroup;

  constructor(
    private cachorroService: CachorroService,
    private fb: FormBuilder,
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ){
    this.cachorroForm = this.createForm();
  }
  createForm(){
    return this.fb.group({
      nome: new FormControl('', Validators.required),
      raca: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.cachorroService.getCachorroById(id).valueChanges().subscribe(data =>{
        this.cachorroForm.setValue(data as any);
      });
    }
  }
  submitForm(){
    this.cachorroService.updateCachorro(this.cachorroForm.value);
    this.toastr.success(
      this.cachorroForm.controls['nome'].value + " atualizado."
    );
    this.router.navigate(['list-cachorro']);
  }
  goback(){
    this.location.back();
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

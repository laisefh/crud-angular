import { CachorroService } from './../../cachorro.cachorro/cachorro.service';
import { Component, OnInit } from '@angular/core';
import { Cachorro } from 'src/app/cachorro.cachorro/cachorro';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-cachorro',
  templateUrl: './list-cachorro.component.html',
  styleUrls: ['./list-cachorro.component.css']
})
export class ListCachorroComponent implements OnInit{
  page = 1;
  listaCachorros: Cachorro[] = [];
  listaVazia: boolean = true;
  mostrarLoader: Boolean = true;

  constructor(
    private CachorroService: CachorroService,
    private toastr: ToastrService
  ){}

  ngOnInit() {
    let fetchData = this.CachorroService.getCachorroList();
    fetchData.stateChanges().subscribe((data)=>{
      this.listaCachorros = [];
      if(data.length <= 0){
        this.listaVazia = true;
      }else{
        this.listaVazia = false;
        data.array.forEach(item: any => {
          let Cachorro = item.payload.toJSON();
          Cachorro['$key'] = item.$key;
          this.listaCachorros.push(Cachorro as Cachorro);
        });
      }
      this.mostrarLoader = false;
    });
  }
  deleteCachorro(Cachorro: Cachorro){
    if(window.confirm('Tem certeza que deseja remover o cachorro?')){
      if(Cachorro.$key != null){
        this.CachorroService.deleteCachorro(Cachorro.$key);
        this.toastr.success(Cachorro.nome + ' removido com sucesso');
      }
    }
  }
}

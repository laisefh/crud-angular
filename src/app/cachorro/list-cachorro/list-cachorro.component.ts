import { CachorroService } from '../cachorro.service';
import { Component, OnInit } from '@angular/core';
import { Cachorro } from 'src/app/cachorro/cachorro';
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
    private cachorroService: CachorroService,
    private toastr: ToastrService
  ){}

  ngOnInit() {
    let fetchData = this.cachorroService.getCachorroList();
    fetchData.snapshotChanges().subscribe((data) => {
      this.listaCachorros = [];
      if (data.length <= 0) {
        this.listaVazia = true;
      } else {
        this.listaVazia = false;
        data.forEach((item: any) => {
          let cachorro = item.payload.toJSON();
          cachorro['$key'] = item.key;
          this.listaCachorros.push(cachorro as Cachorro);
        });
      }
      this.mostrarLoader = false;
    });
  }
  deleteCachorro(cachorro: Cachorro) {
    if (window.confirm('Tem certeza que deseja remover o cachorro?')) {
      if (cachorro.$key != null) {
        this.cachorroService.deleteCachorro(cachorro.$key);
        this.toastr.success(cachorro.nome + ' removido com sucesso.');
      }
    }
  }
}

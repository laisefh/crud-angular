import { Cachorro } from './cachorro';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CachorroService {
  listaCachorrosRef: AngularFireList<Cachorro>;
  cachorroRef: AngularFireObject<Cachorro>;
  constructor(private db: AngularFireDatabase) {
    this.listaCachorrosRef = this.db.list('list-cachorros');
    this.cachorroRef = this.db.object('list-cachorros/' + 0);
  }
  insertCachorro(cachorro: Cachorro){
    this.listaCachorrosRef.push({
      nome: cachorro.nome,
      raca: cachorro.raca,
      idade: cachorro.idade,
    });
  }
  getCachorroById(id: string):
  AngularFireObject<Cachorro>{
    this.cachorroRef = this.db.object('list-cachorros/' + id);
    return this.cachorroRef;
  }
  getCachorroList(): AngularFireList<Cachorro>{
    return this.listaCachorrosRef;
  }
  updateCachorro(cachorro: Cachorro){
    this.cachorroRef.update({
      nome: cachorro.nome,
      raca: cachorro.raca,
      idade: cachorro.idade,
    })
  }
  deleteCachorro(id: string){
    this.cachorroRef = this.db.object('list-cachorros/' + id);
    this.cachorroRef.remove();
  }
}

import { Cachorro } from './cachorro';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CachorroService {
  ListCachorrosRef: AngularFireList<Cachorro>;
  cachorroRef: AngularFireObject<Cachorro>;
  constructor(private db: AngularFireDatabase) {
    this.ListCachorrosRef = this.db.list('list-cachorros');
    this.cachorroRef = this.db.object('list-cachorros/' + 0);
  }
  insertCachorro(Cachorro: Cachorro){
    this.ListCachorrosRef.push({
      nome: Cachorro.nome,
      raca: Cachorro.raca,
      idade: Cachorro.idade,
    });
  }
  getCachorroById(id: string):
  AngularFireObject<Cachorro>{
    this.cachorroRef = this.db.object('list-cachorros/' + id);
    return this.cachorroRef;
  }
  getCachorroList(): AngularFireList<Cachorro>{
    return this.ListCachorrosRef;
  }
  updateCachorro(Cachorro: Cachorro){
    this.cachorroRef.update({
      nome: Cachorro.nome,
      raca: Cachorro.raca,
      idade: Cachorro.idade,
    })
  }
  deleteCachorro(id: string){
    this.cachorroRef = this.db.object('list-cachorros/' + id);
    this.cachorroRef.remove();
  }
}

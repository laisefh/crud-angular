import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  listaContatosRef: AngularFireList<Contato>;
  contatoRef: AngularFireObject<Contato>;
  constructor(private db: AngularFireDatabase) {
    this.listaContatosRef = this.db.list('list-contatos');
    this.contatoRef = this.db.object('list-contatos/' + 0);
  }
  insertContato(contato: Contato) {
    this.listaContatosRef.push({
      nome: contato.nome,
      telefone: contato.telefone,
      idade: contato.idade,
    });
  }
  getContatoById(id: string): AngularFireObject<Contato> {
    this.contatoRef = this.db.object('list-contatos/' + id);
    return this.contatoRef;
  }
  getContatoList(): AngularFireList<Contato> {
    return this.listaContatosRef;
  }
  updateContato(contato: Contato) {
    this.contatoRef.update({
      nome: contato.nome,
      telefone: contato.telefone,
      idade: contato.idade,
    });
  }
  deleteContato(id: string) {
    this.contatoRef = this.db.object('list-contatos/' + id);
    this.contatoRef.remove();
  }
}

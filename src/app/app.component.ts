
import { Component } from '@angular/core';




import { AngularFireDatabase } from '@angular/fire/compat/database';




@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'crud-angular';

  //DI DEPENDENCI INJECTION
  constructor(public db: AngularFireDatabase){}
  test(){
    const objeto ={
      nome: "Fulano",
      idade: 14,
      matricula: 123456789
    }
    this.db.object("teste").set(objeto).then(()=>console.log("dados salvos"));
  }

  ngOnInit() {

    this.db.list("teste").push("test")

    .then( result =>

      console.log(result.key)

    );

  }
}

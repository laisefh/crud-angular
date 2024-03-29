import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modules';
import { environment } from '../environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxPaginationModule } from 'ngx-pagination';
import { ListCachorroComponent } from './cachorro/list-cachorro/list-cachorro.component';
import { EditCachorroComponent } from './cachorro/edit-cachorro/edit-cachorro.component';
import { AddCachorroComponent } from './cachorro/add-cachorro/add-cachorro.component';





@NgModule({

  declarations: [
    AppComponent,
    AddContatoComponent,
    EditContatoComponent,
    ListContatoComponent,
    ListCachorroComponent,
    EditCachorroComponent,
    AddCachorroComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

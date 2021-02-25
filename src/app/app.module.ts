import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { appRouting } from './app.route';


// Servicios
import { PokedexService } from './services/pokedex.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PokedexComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

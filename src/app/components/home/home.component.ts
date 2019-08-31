import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading:boolean;

  error:boolean;
  mensajeError:string;

  constructor(private spotify:SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewRealeases().subscribe((resp:any)=>{

      this.nuevasCanciones = resp;
      this.loading =false;

    },(err)=>{

      this.loading =false;
      this.error= true;
      this.mensajeError = err.error.error.message;

    });
  }

  ngOnInit() {
  }

}

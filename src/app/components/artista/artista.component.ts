import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any={};
  loading:boolean;
  topTracks:any[] =[];

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) {

    this.loading = true;

    this.router.params.subscribe(resp =>{
      this.getArtista(resp['id']);
      this.getTopTracks(resp['id']);
    });
  }

  ngOnInit() {

  }

  getArtista(id:string){

    this.loading = true;

    this.spotify.getArtista(id).subscribe(data =>{
      this.artista = data;
      this.loading =false;
    });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(data =>{
      this.topTracks = data;
      console.log(data);
    });
  }

}

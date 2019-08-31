import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCQybQmlBni-VilA76M0gdWUaWUywVAUZioIlIY2950uIqrwdnc0VO8pYeHXdrQ_tCUzaDqGx9iycvsiH0'
    });

    return this.http.get(url,{headers});
  }


  getNewRealeases(){

    return this.getQuery('browse/new-releases').pipe(
      map(data=>{
        return data['albums'].items;
      })
    );

  }


  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(
      map(data => data['artists'].items)
    );

  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`);

  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
        map( data => data['tracks']
      )
    );
  }

}

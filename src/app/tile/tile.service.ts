import { Injectable } from '@angular/core';
import { TileInfoVM } from 'src/app/tile/tile.component';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  public baseURL = 'assets/tiles.json';
  constructor(private http: HttpClient) {
  }
  public getTileData(): Observable<TileInfoVM[]> {
    return this.http.get<TileInfoVM[]>(this.baseURL);
  }
}

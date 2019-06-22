import { Component, OnInit } from '@angular/core';
import { TileService } from 'src/app/tile/tile.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private tileService: TileService) { }
  public tileInfo: TileInfoVM[];
  ngOnInit() {
    this.tileService.getTileData().subscribe((tileData: TileInfoVM[]) => {
      this.tileInfo = tileData;
    });
  }

  public startQuiz(topic: string) {
    this.tileService.quiztopic = topic;
  }


}

export interface TileInfoVM {
  title: string;
  imgURl: string;
  description: string;
}


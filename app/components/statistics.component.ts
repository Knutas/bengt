import { Component }      from '@angular/core';
import { Player }         from '../models/player';
import { PlayerService }  from '../player.service';
import { OnInit }         from '@angular/core';
import { Router }         from '@angular/router'

@Component({
  //selector: 'whatever',
  templateUrl: 'statistics.component.html',
  moduleId: module.id
  
})
export class StatisticsComponent implements OnInit {
  players: Player[];
  selectedPlayer: Player;

  constructor(
    private playerService : PlayerService,
    private router : Router
    ){}
  
  ngOnInit(): void {
    this.initPlayers();
  }

  initPlayers() : void {
    this.playerService.getPlayers().then(result => this.players = result);
  }
  
  onSelect(player : Player): void {
    this.selectedPlayer = player;
  } 

  gotoDetail() : void {
    let link = ['/detail', this.selectedPlayer.id];
    this.router.navigate(link);
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StarshipService } from '../../../../services/starship.service';
import { Starship } from '../../../../../shared/models/starship.model';

@Component({
  selector: 'app-starship-wall',
  templateUrl: './starship-wall.component.html',
  styleUrls: ['./starship-wall.component.css']
})
export class StarshipWallComponent implements OnInit {
  public currentStarships: Starship [] = [];
  public nextCall: string | null = null;
  public previousCall: string | null = null;
  public loading: boolean = true;
  public counterPage: number = 1;

  public tooltipContent: Starship | null = null;

  constructor(
    private starShipService: StarshipService,
    ) { }

  ngOnInit() {
  this.getStarships(1);
  }


  getStarships(page: number){
  this.starShipService.getStarships(page).subscribe(pageableStarShips => {
  this.currentStarships = pageableStarShips.results;
  this.nextCall = pageableStarShips.next;
  this.previousCall = pageableStarShips.previous;
  setTimeout(() =>{
    this.loading = false;
  },3000);
  });
  }

  loadNextOrPreviousPage(nextOrPrevious: 'next' | 'previous') {
    this.loading = true;
    const currentUrl = nextOrPrevious === 'next' ? this.nextCall : this.previousCall;
    if(currentUrl){
    this.starShipService.loadNextOrPreviousPage(currentUrl).subscribe( pageableStarShips=> {
      this.currentStarships = pageableStarShips.results;
      this.nextCall = pageableStarShips.next;
      this.previousCall = pageableStarShips.previous;
      this.loading = false;
    });
    }
  }


  showModal(starshipIndex: number): void {
    this.tooltipContent = this.currentStarships[starshipIndex];
  }




}

import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-box-and-ball',
  templateUrl: './box-and-ball.component.html',
  styleUrls: ['./box-and-ball.component.scss']
})
export class BoxAndBallComponent implements OnInit {
  corsAnywherePrefix: string = 'https://cors-anywhere.herokuapp.com/'; //in order to allow calling http from https sites (GH Pages);
  apiEndpoint: string = this.corsAnywherePrefix + 'https://cors-anywhere.herokuapp.com/http://www.colr.org/json/color/random';
  apiResponse: any;
  ballColorFromApi: string;
  ballColorHex: string
  ballColorDefault: string = '000';
  showLayout: boolean;
  movesCounter: number = 0;
  showAboutAuthor: boolean;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.displayLoader('show');
    await this.getSetColor();
    this.showLayout = true;
    this.displayLoader('hide');
  }
  
  async boxOnClick() {
    this.displayLoader('show');
    await this.getSetColor();
    this.displayLoader('hide');
    this.moveTheBall();
  }

  async getSetColor() {
    this.apiResponse = await this.http.get(this.apiEndpoint).toPromise();
    this.ballColorFromApi = this.apiResponse.new_color;
    this.ballColorHex = this.convertColorFromApiToHex(this.ballColorFromApi);
  }

  convertColorFromApiToHex(colorString) {
    //api sometimes generates an empty string instead of a new color and to prevent the ball for being invisible
    if(colorString === "" || colorString === "fffff" || this.ballColorFromApi === "fff") {
      return this.ballColorDefault;
    }
    return `#${colorString}`;
  }

  moveTheBall() {
    let ballClassList = document.querySelector('.ball').classList;

    switch( true ){
      case ballClassList.contains('ballToTopLeft'):
        ballClassList.add('ballToTopRight');
        ballClassList.remove('ballToTopLeft');
        break;
      case ballClassList.contains('ballToTopRight'):
        ballClassList.add('ballToBottomRight');
        ballClassList.remove('ballToTopRight');
        break;
      case ballClassList.contains('ballToBottomRight'):
        ballClassList.add('ballToBottomLeft');
        ballClassList.remove('ballToBottomRight');
        break;
      case ballClassList.contains('ballToBottomLeft'):
        ballClassList.add('ballToTopLeft');
        ballClassList.remove('ballToBottomLeft');
        break;         
    }
    this.updateMovesCounter();
  }

  displayLoader(display: string) {
    const body = <HTMLElement>document.querySelector('body');
    
    if(display.toLowerCase() === "show") {
      body.classList.contains('loader-visible') ? "" : body.classList.add('loader-visible');
    }
    if(display.toLowerCase() === "hide") {
      body.classList.contains('loader-visible') ? body.classList.remove('loader-visible') : "";
    }
  }

  updateMovesCounter() {
    this.movesCounter += 1;

    if(this.movesCounter === 1) {
      return this.showAboutAuthor = true;
    } 
  }

}

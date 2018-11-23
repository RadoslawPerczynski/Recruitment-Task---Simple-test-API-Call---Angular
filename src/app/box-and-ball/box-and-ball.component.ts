import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-box-and-ball',
  templateUrl: './box-and-ball.component.html',
  styleUrls: ['./box-and-ball.component.scss']
})
export class BoxAndBallComponent implements OnInit {
  response: any;
  ballColorFromApi: any;
  ballColorHex: string
  showAboutAuthorButton: boolean;
  showAboutAuthorInfo: boolean;
  countMoves: number = 0;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  

  // firstFunction(() => console.log('huzzah, I\'m done!'));


  boxOnClick() {

    this.getSetColorFromApi()
    this.displayLoader('shoW');

    if(this.countMoves === 1) {
      this.showAboutAuthorButton = true;
      this.showAboutAuthorInfo = true;
    }
  }




  async getSetColorFromApi() {

    let myCall = this.http.get('http://www.colr.org/json/color/random');
    myCall.subscribe((response) => {
      this.response = response;
      this.ballColorFromApi = this.response.new_color;
      this.ballColorHex = this.getSetColorHex(this.ballColorFromApi);
      this.moveTheBall();
      this.displayLoader('hide');
      this.countMoves += 1;
    });
  }

  getSetColorHex(colorString = '000') {

    if(this.ballColorFromApi === undefined) {
      throw "Impossible to retrieve the color from API. Color is undefined.";
    }
    
    if(this.ballColorFromApi === "" ) {
      return '#000';
    }

    if(this.ballColorFromApi === "fffff" || this.ballColorFromApi === "fff") {
      return '#000';
    }

    return `#${colorString}`;

  }

  displayLoader(display: string) {
    const loader = document.getElementById('loading');

    if(display.toLowerCase() === "show") {
      loader.style.display = 'block';

    }
    if(display.toLowerCase() === "hide") {
      loader.style.display = 'none';

    }
  }

  moveTheBall() {
    // await this.getSetColorFromApi();

    let ballClassList = document.querySelector('.ball').classList;

    console.log(ballClassList);
    switch( true ){
      case ballClassList.contains('ballToTopLeft'):
        ballClassList.remove('ballToTopLeft');
        ballClassList.add('ballToTopRight');
        break;
      case ballClassList.contains('ballToTopRight'):
        ballClassList.remove('ballToTopRight');
        ballClassList.add('ballToBottomRight');
        break;
      case ballClassList.contains('ballToBottomRight'):
        ballClassList.remove('ballToBottomRight');
        ballClassList.add('ballToBottomLeft');
        break;
      case ballClassList.contains('ballToBottomLeft'):
        ballClassList.remove('ballToBottomLeft');
        ballClassList.add('ballToTopLeft');
        break;         
    }


  }
  showInfoAboutAuthor() {
    const authorInfo = <HTMLElement>document.querySelector('.about-author');

    this.showAboutAuthorInfo = !this.showAboutAuthorInfo;

    if(!this.showAboutAuthorInfo) {
      authorInfo.style.left = '0';
      //showclassvisible
    }
    else {
      authorInfo.style.left = '-200px';
    }

    
  }


}

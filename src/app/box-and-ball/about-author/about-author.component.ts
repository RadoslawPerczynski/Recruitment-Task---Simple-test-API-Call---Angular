import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-author',
  templateUrl: './about-author.component.html',
  styleUrls: ['./about-author.component.scss']
})
export class AboutAuthorComponent implements OnInit {
  @Input() showAbout: boolean;
  showInfoPanel: boolean;
  isAuthorTextCreated: boolean;
  buttonText: string = "Hi, I'm Radoslaw!";
  //co wpisac
  // minimize sassss
  // dokumentacja
  // github pages

  constructor() { }

  ngOnInit() { }

  toggleAuthorPanel() {
    const authorInfo = <HTMLElement>document.querySelector('.about-author');
    if(!this.isAuthorTextCreated) {
      let description = `
      <img src="https://media.licdn.com/dms/image/C5603AQG51pCwN0licw/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=7j0gRTXA5YoSxmkjds9_-Ri-nTedsMHqlDnhc6xSPTo" />
      <h1>Hi, I am Radoslaw :)</h1>
      <p>Thanks for reviewing my recruitment task which I prepared specially for you.</p>
      <p>Although I am a beginner with Angular I am highly interested in modern JavaScript and JS Frameworks. I prepared this solution with Angular version 7.0.6.</p>
      <p>If you would like to check more about me, here is my <a href="https://www.linkedin.com/in/radoslaw-perczynski" target="_blank">LinkedIn</a></p>
      <p>Don't hesitate to drop me a line: <a href="mailto:perczynski.radoslaw@gmail.com" target="_blank">perczynski.radoslaw@gmail.com</a>.</p>

      <p>If you are checking this code locally, here is the <a href="https://www.linkedin.com/in/radoslaw-perczynski" target="_blank">online version of this project</a>.</p>
      <p>Well, I hope you like it ;)<br>
      Looking forward to hearing from you ;)</p>

      `;

      authorInfo.innerHTML = description;
      this.isAuthorTextCreated = true;
    }

    this.showInfoPanel = !this.showInfoPanel;
    if(this.showInfoPanel) {
      this.buttonText = "Hide Panel";
    } else {
      this.buttonText = "Hi, I'm Radoslaw!"
    }



  }

  
  

}

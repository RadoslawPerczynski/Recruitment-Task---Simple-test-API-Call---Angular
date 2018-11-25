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
  buttonText: string = "Click me!";
  constructor() { }

  ngOnInit() { }

  toggleAuthorPanel() {
    const authorInfo = <HTMLElement>document.querySelector('.about-author-panel');
    if(!this.isAuthorTextCreated) {
      let description = `
      <img src="https://media.licdn.com/dms/image/C5603AQG51pCwN0licw/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=7j0gRTXA5YoSxmkjds9_-Ri-nTedsMHqlDnhc6xSPTo" />
      <h1>Hi! Thanks for reviewing my task :)</h1>
      <p>I made it specially for you. </p>
      <p>This has been done with Angular v.7. Although I am a beginner with this framework I am highly motivated to grow! </p>
      <p>My name is Radoslaw Perczynski. Friends call me "Radek" and feel free to call me as they do :) Currently I am working as a Junior Frontend Dev.</p>
      <ul>
        <li>Here is my <a href="https://www.linkedin.com/in/radoslaw-perczynski" target="_blank">LinkedIn</a>. :)</li>
        <li>Don't hesitate to drop me a line: <a href="mailto:perczynski.radoslaw@gmail.com" target="_blank">perczynski.radoslaw@gmail.com</a>.</li>
        <li>If you are checking this code locally, here is the <a href="https://radoslawperczynski.github.io/Recruitment-Task---Simple-test-API-Call---Angular/" target="_blank">online version</a> on GitHub Pages.</li>
      </ul>
      <p>Well, I hope you like it. I would welcome the chance to speak with you sometime! :)<br>
      Radek</p>
      `;

      authorInfo.innerHTML = description;
      this.isAuthorTextCreated = true;
    }

    this.showInfoPanel = !this.showInfoPanel;
    if(this.showInfoPanel) {
      this.buttonText = "Hide Panel";
    } else {
      this.buttonText = "Click me!"
    }

  }

  
  

}

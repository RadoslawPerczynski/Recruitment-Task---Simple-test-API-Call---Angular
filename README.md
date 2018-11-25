<h1>Box & Ball - recruitment task</h1>

<a href="" target="_blank">
  <img src="https://user-images.githubusercontent.com/28759821/48978779-5e7e1900-f0b1-11e8-8c87-e04f99e8ff81.png" />
</a>

<p>This is the box. And that is a ball. End of story? Not really :) </br>
The color of the ball is being changed dynamically depending on the remote server response. When you click on the box the ball changes it's color and moving to opposite rorner. </br>
<b>HINT:</b> process at least 3 moves :)</p>
<ul>
  <li>Click here to use the <a href="https://radoslawperczynski.github.io/Recruitment-Task---Simple-test-API-Call---Angular/" target="_blank"> Live Demo </a></li>
</ul>
<hr>

<h1>Documentation</h1>

<h2>Files structure:</h2>
<ul>
  <li>app
    <ul>
      <li>box-and-ball-component
        <ul>
          <li>about-author-component</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>assets
    <ul>
      <li>img
        <ul>
          <li>loader.gif</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>sass
    <ul>
      <li>_variables.scss</li>
      <li>style.scss</li>
    </ul>
  </li>
</ul>

<h2>How to run:</h2>
<ul>
  <li>Clone this repository on your PC</li>
  <li>Go to the project's folder and in the terminal type: npm install</li>
  <li>Once installation is finished type ng serve -o (it will open your browser automatically)</li>
</ul>

<h2>How to use: </h2>
<ul>
  <li>Click on the box</li>
  <li>Make at least 3 moves with a ball</li>
</ul>

<h2>Built with:</h2>
<ul>
  <li>Angular v.7</li>
  <li>REST WEB API</li>
  <li>Sass</li>
</ul>

<h2>How it works (flow):</h2>
<ol>
  <li>Initially, the app won't show the layout untill it will get the response from the server and set the color for a ball</li>
  <li>Once it gets the response, layout is visible. The box is always centered and the viewport</li>
   <li>On click:
    <ul>
      <li>It's calling the WEB API which returns couple of things. We take just "new color" which is a string without '#'.</li>
      <li>We pass this string to another function that return a complete HEX color for us and we set this color to the ball.</li>
      <li>In the meantime the loader is being shown to the user in the UI. Once we get the responce and set the color the loader is hidden</li>
    </ul>
      </li>
      <li>If all the steps above are complited we move the ball:
        <ul>
          <li>moves of the ball depends on the classes that we pass to the ball html element</li>
          <li>we check what is the current class of the ball, we remove this class and we set another class depending on which was the previous one</li>
          <li>These classes are styled in the .scss file accordingly.</li>
        </ul>
      </li>
    </ul>
  </li>
  
</ol>

<h2>Some insights from me:</h2>
<ul>
  <li>Sass files have been moved to another folder (as a best practice and personal preference). I believe it allows us to create a more robust Sass foundation.</li>
  <li>API sometimes returns an empty string as a new color. I am not sure if it's a mistake or a trap. In this case I set the color to default color (black). Another solution would be:
    <ul>
      <li>to fix the API</li>
      <li>create a function which returns a random color instead but then we lose the scope of using API ;) </li>
    </ul>
  </li>

   <li>Sometimes the color of the ball is very bright and it's difficult to see the ball on the white background. I prevented the ball to become complitely white (it gets default black color instead) but it doesn't solve the problem fully. However solving this issue is not the main scope of the task and it's a minor thing.</li>
       
   <li>I haven't used any css frameworks there. In my opinion there is no need.</li>
   <li>Sometimes I repeat the names of the classes or I use particular strings more than once. In this case in bigger real app probably we would assign these strings to variables/dictionaries in order to reuse them across the app. I didn't want to blow up the code too much in order to make just 2 components.</li>
   <li>Task contains an additional component which is a panel with a few words from me and few informations.</li>
  <li>Task description specified that the container has to be 400x200 centered on the page. I assumed it's about pixels not the ratio. For this reason it doesn't fit to smaller mobiles phones. I could keep the ratio for devices below 400px width but I assumed that it wasn't the main scope of this task. For the same reason I didn't make my 'about-author' component perfectly responsed too.</li>

</ul>


<hr>

<h3>For users</h3>
<i>If you find software that doesn’t have a license, that generally means you have no permission from the creators of the software to use, modify, or share the software. Although a code host such as GitHub may allow you to view and fork the code, this does not imply that you are permitted to use, modify, or share the software for any purpose.</i>

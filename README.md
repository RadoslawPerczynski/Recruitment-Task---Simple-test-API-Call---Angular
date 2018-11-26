<h1>Box & Ball - recruitment task</h1>

<a href="https://radoslawperczynski.github.io/Recruitment-Task---Simple-test-API-Call---Angular/" target="_blank">
  <img src="https://user-images.githubusercontent.com/28759821/49036940-409bdb80-f1b9-11e8-9a74-8cefddcbb8c4.png" />
</a>

<p>This is the box. And that is a ball. End of story? Not really :) </br>
The color of the ball is being changed dynamically depending on the remote server response. When you click on the box the ball changes it's color and moving to opposite corner. </br>

<ul>
  <li>Click here to use the <a href="https://radoslawperczynski.github.io/Recruitment-Task---Simple-test-API-Call---Angular/" target="_blank"> Live Demo </a></li>
</ul>
<hr>

<h1>Documentation</h1>

<h2>How it works (flow):</h2>
<ol>
  <li>Initially, the app doesn't show the layout until it gets the response from the server and sets the ball's color</li>
  <li>Once the response is successful, the layout is visible. The box is always centered and the viewport</li>
   <li>On click:
    <ul>
      <li>It calls the WEB API which returns a couple of properties. We take just "new color" which is a string without '#'.</li>
      <li>We pass this string to another function that returns a complete HEX color for us and we set this color to the ball.</li>
      <li>In the meantime, the loader is being shown to the user in the UI. Once we receive the response and set the color, we hide the loader</li>
    </ul>
      </li>
      <li>If all the steps above are complited we move the ball:
        <ul>
          <li>Moves of the ball depend on the classes that we pass to the ball HTML element</li>
          <li>We check the current class of the ball, we remove this class and we set another class depending on the previous one</li>
          <li>These classes are styled in the .scss file accordingly</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>

<h2>Some insights from me:</h2>
<ul>

  <li>API sometimes returns an empty string as a new color. I am not sure if it's a mistake or a trap. In this case, I set the color to default color (black). Another solution would be:
    <ul>
      <li>to fix the API</li>
      <li>create a local function which returns a random color instead but then we partly lose the scope of using API ;) </li>
    </ul>
  </li>
  
  <li>I decided to call the API Endpoint with a <a href="https://github.com/Rob--W/cors-anywhere#demo-server">CORS Anywhere</a> prefix in order to be able to call HTTP URL from HTTPS site (GitHub Pages)</li>
    <li>Sass files have been moved to another folder (as a best practice and personal preference). I believe it allows us to create a more robust Sass foundation</li>

   <li>Sometimes the color of the ball is very bright and it's difficult to see the ball on the white background. I prevented the ball from becoming completely white (it gets default black color instead) but it doesn't solve the problem fully. However, solving this issue is not the main scope of the task and it's a minor thing</li>
   <li>Task description specified that the container has to be 400x200 centered on the page. I assumed it's about pixels, not the ratio. For this reason, it doesn't fit smaller mobiles phones so for mobiles the container's width is less than required 400px. I could keep the ratio for devices below 400px width (using JS) but I assume it wasn't the scope of this task</li>
       
   <li>I didn't use any CSS frameworks there. In my opinion, there is no need. I use a few plain @media rules for small devices in portrait and landscape orientation</li>
    
   <li>Sometimes I repeat the names of the classes or I use particular strings more than once. In this case in a bigger real app probably we would assign these strings to variables/dictionaries in order to reuse them across the code. I didn't want to blow up the solution too much</li>
   <li>The task contains an additional component which is a panel with a few words from me and few pieces of information. This panel was not a task's requirement</li>

</ul>

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
  <li>Once the installation is finished type ng serve -o (it will open your browser automatically)</li>
</ul>

<h2>How to use: </h2>
<ul>
  <li>Click on the box and observe the actions</li>
  <li>Click on the button that appeared ;)</li>
</ul>

<h2>Built with:</h2>
<ul>
  <li>Angular v.7</li>
  <li>REST WEB API</li>
  <li>Sass</li>
</ul>


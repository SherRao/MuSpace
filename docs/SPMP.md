
<h1 align="center">
  <a href="./"><img id="header-logo" src="./logo.svg" width="250" alt="MuSpace logo"/></a>
</h1>
<h1 align="center">Software Project Management Plan (SPMP)</h1>

<!-- Introduction -->
<h2>1. Introduction</h2>

<h3>1.1 Project Overview</h3>
<p>MuSpace is a music-based social media platform focused on connecting music fans with one another and allowing them to share their tastes with the world. Each MuSpace user will be provided with a personal feed to post about songs, albums, artists, and playlists that they are interested in. When users share similar listening habits with others, they are recommended as connections via a point-based rating system using the <a href="https://developer.spotify.com/documentation/web-api/">Spotify API</a> and <a href="https://developer.spotify.com/documentation/web-playback-sdk/#about-the-sdk">Spotify SDK</a> data. MuSpace will also offer listening rooms that allow users to listen along with their friends and chat with each other in real-time. Additionally, users can recommend which songs will be played in the listening room.</p>

<h3>1.2 Project Deliverables</h3>

<table>
  <!-- Headers -->
  <tr>
    <th>No.</th>
    <th>Deliverable(s)</th>
    <th>Group Deadline(s)</th>
    <th>Marking Deadline</th>
  </tr>
  <!-- No. 1 -->
  <tr>
    <th rowspan="2">1</th>
    <td>Software Requirement Specification (SRS)</td>
    <td>May 25th, 2021</td>
    <td rowspan="2">May 28th, 2021</td>
  </tr>
  <tr>
    <td>Software Requirement Specification (SRS) Review</td>
    <td>May 27th, 2021</td>
  </tr>
  <!-- No. 2 -->
  <tr>
    <th rowspan="2">2</th>
    <td>Software Project Management Plan (SPMP)</td>
    <td>June 1st, 2021</td>
    <td rowspan="2">June 4th, 2021</td>
  </tr>
  <tr>
    <td>Software Project Management Plan (SPMP) Review</td>
    <td>June 3rd, 2021</td>
  </tr>

  <!-- No. 3 -->
  <tr>
    <th rowspan="2">3</th>
    <td>Analysis</td>
    <td>June 22nd, 2021</td>
    <td rowspan="2">June 25th, 2021</td>
  </tr>
  <tr>
    <td>Analysis SQA</td>
    <td>June 24th, 2021</td>
  </tr>

  <!-- No. 4 -->
  <tr>
    <th rowspan="2">4</th>
    <td>Design</td>
    <td>June 13th, 2021</td>
    <td rowspan="2">June 16th, 2021</td>
  </tr>
  <tr>
    <td>Design Review</td>
    <td>June 15th, 2021</td>
  </tr>

  <!-- No. 5 -->
  <tr>
    <th rowspan="2">5</th>
    <td>Implementation</td>
    <td>July 24th, 2021</td>
    <td rowspan="2">August 5th, 2021</td>
  </tr>
  <tr>
    <td>Implementation SQA</td>
    <td>July 26th, 2021</td>
  </tr>

  <!-- No. 6 -->
  <tr>
    <th rowspan="2">6</th>
    <td>User Documentation</td>
    <td>August 1st, 2021</td>
    <td rowspan="2">August 5th, 2021</td>
  </tr>
  <tr>
    <td>User Documentation Review</td>
    <td>August 3rd, 2021</td>
  </tr>

  <!-- No. 7 -->
  <tr>
    <th>7</th>
    <td>Final Publishing & Deployment</td>
    <td>August 4th, 2021</td>
    <td>August 5th, 2021</td>
  </tr>
</table>

<h3>1.3 Reference Materials</h3>
<ul>
  <li><a href="https://cs.uwaterloo.ca/~apidduck/se362/Assignments/A2/spmp" target="_blank">SPMP Reference Template</a></li>
  <li><a href="https://bohr.wlu.ca/cp317/notes/17_planning.php" target="_blank">Planning Class Notes</a></li>
  <li><a href="http://partyall-docs.herokuapp.com/docs/partyall-spmp.html" target="_blank">PartyAll SPMP</a></li>
</ul>

<h3>1.4 Evolution of the SPMP</h3>
<p>As the team continues through the development process, updates will be made regularly to the SPMP to reflect any changes implemented. Version history will be handled using Google Docs’ editing history feature. At the end of each week, our team leader will review the SPMP to ensure that each team is on track and make any necessary changes.</p>
<p>The specific sections to be updated are:</p>
<ul>
  <li>1.2 Project Deliverables</li>
  <li>1.3 Reference Materials</li>
  <li>1.4 Evolution of the SPMP</li>
  <li>1.5 Definitions and Acronyms</li>
  <li>2.3 Project Responsibilities</li>
  <li>4.1 Methods, Tools and Techniques</li>
</ul>

<h3>1.5 Definitions and Acronyms</h3>
<h4>1.5.1 Definitions</h4>
<ul>
  <li><b>Spotify</b> - Spotify is an audio streaming and media services provider</li>
  <li><b>Spotify Premium Account</b> - The paid music service offered by Spotify that gives users advanced features. For this project, it is required by the Spotify API and SDK for connected Spotify accounts to be a Spotify Premium member to use their web music player features. See <a href="https://developer.spotify.com/documentation/web-playback-sdk/#about-the-sdk" target="_blank">here</a> for more information</li>
  <li><b>Listening Room/Music Room</b> - A chat room hosted by users where they can listen along to the host and chat with other users in the room.</li>
  <li><b>Agile Approach</b> - A method to manage a project by breaking it up into several phases.</li>
  <li><b>Web-based</b> - A piece of software that is solely hosted on a web server over the internet.</li>
  <li><b>Android</b> - The operating system suite developed by Google for mobile devices.</li>
  <li><b>iOS</b> - The operating system developed by Apple for their mobile phones.</li>
  <li><b>Front-end</b> - The user interface and presentation of the application.</li>
  <li><b>Back-end</b> - Data and infrastructure of the application.</li>
  <li><b>DNS Service</b> - Servers responsible for translating the domain names to numeric IP addresses leading them to the correct website.</li>
  <li><b>DDOS Mitigation</b> - Set of network management techniques/tools for resisting or mitigating the impact of denial-of-service attacks on the network.</li>
  <li><b>Matches</b> - Refers to users that have connected through recommended connections (See 4.1.1 Feature Specific Requirements).</li>
  <li><b>Friends</b> - Refers to accounts the user has matched with (See 4.1.1 Feature Specific Requirements) or has added by username.</li>
  <li><b>Sprint</b> - Refers to a two-week block designated to the development of a specific component of the product.</li>
  <li><b>Spam</b> - A large amount (typically more than 10 messages per second) of requests/messages sent to the system.</li>
  <li><b>User</b> - A website visitor who has successfully created and authenticated a MuSpace account login and has connected to a Spotify Premium Account.</li>
  <li><b>OAuth2</b> -  Open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential.</li>
  <li><b>Sidebar</b> - Menu component on the side of the screen, separate from the main page content. In our case, the sidebar will be on the left side of the screen.</li>
  <li><b>Client-Side</b> - Action takes place on the user’s (the client’s) computer.</li>
  <li><b>Server Side</b> - The action takes place on a web server.</li>
  <li><b>Repository</b> - A software repository is a storage location for the application packages.</li>
  <li><b>Codebase</b> - The entirety of the source code used for the application.</li>
  <li><b>V8 JavaScript Engine</b> - An open-source JavaScript engine developed by The Chromium Project for Google Chrome and Chromium web browsers.</li>
  <li><b>Endpoint</b> - A remote computing device that communicates back and forth with a network to which it is connected</li>
  <li><b>Headless</b> - The application is running without a graphical user interface (GUI) and sometimes without a user interface at all.</li>
  <li><b>Chromium</b> - An open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web.</li>
  <li><b>Plaintexts</b> - Text that is not computationally tagged, specially formatted, or written in code.</li>
  <li><b>Chat Rooms/Messaging Page</b> - Personal messaging page between 2 or more people.</li>
</ul>

<h4>1.5.2 Acronyms and Abbreviations</h4>
<ul>
  <li><b>UI</b> - User Interface: A system of interactive visual components for an application.</li>
  <li><b>SDK</b> - Software Development Kit: A collection of software development tools in one package.</li>
  <li><b>API</b> - Application Programming Interface: An interface that defines interactions between multiple software applications.</li>
  <li><b>SDLC</b> - Software Development Life Cycle: Application of standard business practices to build software applications. It is divided into the following steps: Planning, Requirement, Design, Build, Document, Test, Deploy, Maintain. It is an effective way to measure and improve the development process.</li>
  <li><b>SQA</b> - Software Quality Assurance: A means and practice of monitoring the software engineering processes and methods used in a project to ensure the proper quality of software.</li>
  <li><b>SRS</b> - Software Requirement Plan: Document that describes what the software will do and how it will be expected to perform.</li>
  <li><b>SDD</b> - Software Design Description: Document that represents the software design that will be used to record design information and address various design concerns. It is usually accompanied by an architecture diagram with pointers to specific features or smaller pieces of design.</li>
  <li><b>DDOS</b> - Distributed Denial of Service refers to a type of cyber attack that attempts to take down a service via spam.</li>

</ul>

<!-- Project Organization -->
<h2>2. Project Organization</h2>

<h3>2.1 Process Model</h3>
<p>This project will follow a 7 phase SDLC outlined below:</p>
<p><b>Stage 1:</b> Project Planning</p>
<p><b>Stage 2:</b> Gathering Requirements & Analysis</p>
<p><b>Stage 3:</b> Design & Prototyping</p>
<p><b>Stage 4:</b> Software Development</p>
<p><b>Stage 5:</b> Testing</p>
<p><b>Stage 6:</b> Deployment</p>
<p><b>Stage 7:</b> Operations & Maintenance (Post Submission)</p>

<h3>2.2 Organizational Structure</h3>
<p>Using the agile approach, we will be starting on the backend of the project and the UI design as a group. As soon as the UI design is finished and laid out, the front-end developers will begin development. Concurrently, the back-end developers will also begin development. Everything worked on will be done through sprints. After both the frontend and backend of the project are finished, we will port the web-based application onto Android and iOS.</p>

<h3>2.2 Project Responsibilities</h3>
<table>
  <!-- Headers -->
  <tr>
    <th>No.</th>
    <th>Deliverable(s)</th>
    <th>Group(s)</th>
    <th>Group Deadline</th>
  </tr>
  <!-- No. 1 -->
  <tr>
    <th rowspan="2">1</th>
    <td>Software Requirement Specification (SRS)</td>
    <td rowspan="2">All Members</td>
    <td>May 25th, 2021</td>
  </tr>
  <tr>
    <td>Software Requirement Specification (SRS) Review</td>
    <td>May 27th, 2021</td>
  </tr>
  <!-- No. 2 -->
  <tr>
    <th rowspan="2">2</th>
    <td>Software Project Management Plan</td>
    <td rowspan="2">All Members</td>
    <td>June 1st, 2021</td>
  </tr>
  <tr>
    <td>Software Project Management Plan Review</td>
    <td>June 3rd, 2021</td>
  </tr>

  <!-- No. 3 -->
  <tr>
    <th rowspan="2">3</th>
    <td>Analysis</td>
    <td rowspan="2">All Members</td>
    <td>June 22nd, 2021</td>
  </tr>
  <tr>
    <td>Analysis SQA</td>
    <td>June 24th, 2021</td>
  </tr>

  <!-- No. 4 -->
  <tr>
    <th rowspan="2">4</th>
    <td>Design</td>
    <td rowspan="2">All Members</td>
    <td>July 13th, 2021</td>
  </tr>
  <tr>
    <td>Design Review</td>
    <td>July 15th, 2021</td>
  </tr>

  <!-- No. 5 -->
  <tr>
    <th rowspan="6">5</th>
    <td>Back-end Implementation</td>
    <td>Nausher, Robert, Daner, Nish, Jagveer, Jacob, Madhumitha</td>
    <td>July 27th, 2021</td>
  </tr>
  <tr>
    <td>Back-end Implementation SQA</td>
    <td>Front-end team</td>
    <td>July 29th, 2021</td>
  </tr>
  <tr>
    <td>Front-end Implementation</td>
    <td>Adrian, Kelvin, Nausher, Robert, Adepeju, Declan, Daner, Jiten, Gur-Armaan, Farzan,  Jagveer</td>
    <td>July 27th, 2021</td>
  </tr>
  <tr>
    <td>Front-end Implementation SQA</td>
    <td>Back-end team</td>
    <td>July 29th, 2021</td>
  </tr>
  <tr>
    <td>Mobile Implementation</td>
    <td rowspan="2">All Members</td>
    <td>August 3rd, 2021</td>
  </tr>
  <tr>
    <td>Mobile Implementation SQA</td>
    <td>August 5th, 2021</td>
  </tr>

  <!-- No. 6 -->
  <tr>
    <th rowspan="2">6</th>
    <td>User Documentation</td>
    <td rowspan="2">All Members</td>
    <td>August 10th, 2021</td>
  </tr>
  <tr>
    <td>User Documentation Review</td>
    <td>August 12th, 2021</td>
  </tr>

  <!-- No. 7 -->
  <tr>
    <th>7</th>
    <td>Final Publishing & Deployment</td>
    <td>All Members</td>
    <td>August 12th, 2021</td>
  </tr>

</table>


<!-- 3. Managerial Process -->
<h2>3. Managerial Process</h2>

<h3>3.1 Management Objectives and Priorities</h3>
<p>The main objective of this project is to develop a web-based music application that will eventually branch out to Android and iOS. This uses the <a href="https://developer.spotify.com/documentation/web-api/">Spotify API</a> and <a href="https://developer.spotify.com/documentation/web-playback-sdk/#about-the-sdk">Spotify SDK</a> to connect people listening to similar styles of music. By the end of the term (August, 5th 2021), our goal is to have all project deliverables (the SRS, the SPMP, analysis, document, design documentation, back-end implementation, front-end implementation, mobile implementation, and user documentation) complete. By then our goal is to also have a complete well-implemented version of our application, which would be heavily Quality Tested. This project's major priority is to have an easy-to-understand, easy-to-read, consistent, and informative set of documentation as well as a seamless project flow. Since the project has no monetary funding, the completion of deliverables is solely dependent on our time and resources. </p>

<h3>3.2 Monitoring and Controlling Mechanisms</h3>
<p>Our group meetings take place every Tuesday and Thursday during lectures, where we send one person to listen to the lecture, in this case, Jagveer. During this time, we split into groups for sprints, where work ethic is peer-checked.</p>
<p>All calls are done via Discord (as in a person is not applicable), Documentation is done on Google Docs and then transferred onto our project webpage. The UI is designed on Figma. The Github project is our team's central repository for code and resources</p>
<p>SQA is conducted when sprints are done. The process is conducted by those not in the sprint to ensure that quality control is unbiased.</p>

<h3>3.3 Risk Management / User Privacy / User Safety</h3>
<ol>
  <li>
    <b>Risk:</b> Too many users attempting to connect to the website/application. This can overload any of our backend components by creating too many concurrent requests and crashing.<br>
    <b>Solution:</b>Access to the site will be throttled by Cloudflare - Cloudflare is a DNS service that also provides DDOS mitigation. Cloudflare limits the number of people that can concurrently access the website.
  </li>
  <br>
  <li>
    <b>Risk:</b> Too many users attempting to join the same listening room. This can crash a listening room and may even crash the backend used to store the listening room data.<br>
    <b>Solution:</b> If a certain number of users (128) try to connect to a listening room concurrently, they will be put into a queue where the application will limit the number of people who get through to the listening room per second (20 users/second).
  </li>
  <br>
  <li>
    <b>Risk:</b> Too many users attempting to connect to the website/application. This can overload any of our backend components by creating too many concurrent requests and crashing.<br>
    <b>Solution:</b> All account creation, user sign-in and important actions will be verified using Google reCaptcha v2 to assure that the user is indeed human and not a bot. See Risk 4 for the answer for spam messages.
  </li>
  <br>
  <li>
    <b>Risk:</b> An account sends too many chat messages in a certain amount of time (spam).<br>
    <b>Solution:</b> All messages will be rate-limited site-wide to about 5 messages per second.
  </li>
  <br>
  <li>
    <b>Risk:</b> The application is offline due to maintenance, traffic, or other uncertain factors.<br>
    <b>Solution:</b> A page will be displayed for the duration of the offline activity that explains to the user why the application is offline, and how long it’ll take to get back online.
  </li>
  <br>
  
  <li>
    <b>Risk:</b> A new component added to the codebase could make another previous component unstable.<br>
    <b>Solution:</b> Anytime a new feature or piece of code is added, we perform adequate testing. 
  </li>
  <br>
  <li>
    <b>Risk:</b> Spotify or any fundamental API or resource that we are using changes their terms of services or copyright laws.<br>
    <b>Solution:</b> A substitute can be searched for when this happens - no other solution exists for this type of risk.
  </li>
  <br>
  <li>
    <b>Risk:</b> A user experiences harassment, hate, or anything negative.<br>
    <b>Solution:</b> The user can report another user by going onto their profile, This feedback is then stored in the database. The developers will be checking reports often.
  </li>
  <br>
  <li>
    <b>Risk:</b> Data not being securely sent over the internet to the MuSpace server.<br>
    <b>Solution:</b> All data will be securely transferred from a client to the server with Google Firebase’s implementation of data privacy and security. All endpoints used on Firebase are secured through Google’s servers. See <a href="https://firebase.google.com/docs/firestore/security/overview">here</a> for more information on how Google Firebase uses security.
  </li>
  <br>
  <li>
    <b>Risk:</b> Another person hacks into your account.<br>
    <b>Solution:</b> We will use OAuth2 to make sure that the person is who they say they are. See <a href="https://oauth.net/2/">here</a> for more information on how OAuth2 uses security.
  </li>
  <br>

</ol>


<!-- 4. Technical Process -->
<h2>4. Technical Process</h2>

<h3>4.1 Methods, Tools and Techniques</h3>

<h4>Technologies:</h4>
<ul>
  <li><b>JavaScript</b> - <a href="https://www.javascript.com/">JavaScript.com</a></li>
  <li><b>TypeScript</b> - <a href="https://www.typescriptlang.org/">TypeScript: Typed JavaScript at Any Scale. (typescriptlang.org</a></li>
  <li><b>ReactJS framework</b><a href="https://reactjs.org/">React</a></li>
  <li><b>Node.js</b> - <a href="https://nodejs.org/en/">Node.js (nodejs.org)</a></li>
  <li><b>Js-logger</b> - <a href="https://www.npmjs.com/package/js-logger">js-logger - npm (npmjs.com)</a></li>
  <li><b>StyledComponents</b> - <a href="https://styled-components.com/">styled-components</a></li>
  <li><b>Google Firestore</b> - <a href="https://cloud.google.com/firestore">Firestore: NoSQL document database  |  Google Cloud</a></li>
  <li><b>Google Authentication</b> - <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_CA&gl=US">Google Authenticator – Apps on Google Play</a></li>
  <li><b>LyricsGenius API</b> - <a href="https://docs.genius.com/">Genius API</a></li>
  <li><b>Google reCaptcha v2</b> - <a href="https://developers.google.com/recaptcha/docs/display">reCaptcha v2</a></li>
  <li><b>Spotify API</b> - <a href="https://developer.spotify.com/documentation/web-api/">Web API | Spotify for Developers</a></li>
  <li><b>Spotify SDK</b> - <a href="https://developer.spotify.com/documentation/web-playback-sdk/#about-the-sdk">Web Playback SDK | Spotify for Developers</a></li>
  <li><b>Semantic UI</b> - <a href="https://semantic-ui.com/">Semantic UI</a></li>

</ul>

<h4>Project Management Tools:</h4>
<ul>
  <li><b>GitHub</b> - <a href="https://semantic-ui.com/">Repository</a></li>
  <li><b>Figma</b> - <a href="https://www.figma.com/team_invite/redeem/bENflg8BpmlHQtsnZpDSoz">Project</a></li>
  <li><b>Google Drive (Docs, Sheets)</b></li>
  <li><b>Discord</b> - <a href="https://discord.com/brand-new">Discord</a></li>
</ul>

<h4>Project Support Functions:</h4>
<ul>
  <li><b>JavaScript unit testing</b> - <a href="https://jestjs.io/">JestJS</a></li>
  <li><b>Functional testing via Selenium WebDriver</b> - <a href="https://www.selenium.dev/documentation/en/webdriver/">Selenium</a></li>
  <li><b>Functional testing via Selenium WebDriver</b> - <a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a></li>
  <li><b>Configuration Management: Firestore</b> - <a href="https://firebase.google.com/docs/firestore">Firestore</a></li>
</ul>

<!-- UPDATED TO HERE -->

<h3>4.2 Software Documentation</h3>

<h3>4.2.1 Software Requirements Specification (SRS)</h3>
<ul>
  <li>This document can be found <a href="https://github.com/SherRao/MuSpace/blob/main/docs/SRS.md" target="_blank">here</a>.</li>
</ul>

<h3>4.2.2 Software Design Description (SDD)</h3>
<p>We will be using the ReactJS framework and Typescript to develop the front-end, and integrate the Spotify, Discord, and LyricGenius APIs to draw user data, songs, lyrics, and artist bios.</p>
<ul>
  <li>This document can be found <a href="https://github.com/SherRao/MuSpace/blob/main/docs/Conventions.md" target="_blank">here</a>.</li>
</ul>

<h3>4.2.3 Software Test Plan</h3>
<ul>
  <li>This document can be found <a href="https://github.com/SherRao/MuSpace/blob/main/docs/Testing.md" target="_blank">here</a>.</li>
</ul>

<h3>4.3 User Documentation</h3>
<ul>
  <li>GitHub Wiki:<br><a href="https://github.com/SherRao/MuSpace/wiki" target="_blank">https://github.com/SherRao/MuSpace/wiki</a></li>
</ul>

<h3>4.4 Project Support Functions</h3>
<ul>
  <li>JavaScript unit testing: <a href="https://jestjs.io/" target="_blank">JestJS</a></li>
  <li>Functional testing via webdriver: <a href="https://www.selenium.dev/documentation/en/webdriver/" target="_blank">Selenium</a></li>
  <li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library<a></li>
  <li>Configuration Management: <a href="https://firebase.google.com/docs/firestore" target="_blank">Firestore<a></li>
</ul>

<h2>5. Money/Cost</h2>

<img src="https://en.meming.world/images/en/0/0d/In_Terms_Of_Money%2C_We_Have_No_Money.jpg" width="256" />
    
<p>This project is solely dependent on the time and cost of the developement team. No monetary funding is collected or needed for this project. All resources (frameworks, APIs) are free and open source.</p>

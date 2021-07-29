<h1 align="center">
    <a href="./"><img id="header-logo" src="./logo.svg" width="250" alt="MuSpace logo" /></a>
</h1>
<h1 align="center">Software Requirement Specification (SRS)</h1>
<h2>1. Introduction</h2>
<h3>1.1 Project Summary</h3>
<p>
    MuSpace is a music-based social media platform focused on connecting music fans with one another and allowing them to share their tastes with the world. Each MuSpace user will be provided with a personal feed to post about songs, albums, artists, and playlists that they are interested in. Users will be able to add friends on MuSpace with who they can chat, and look at their detailed Spotify listening history. Users will also be able to view detailed statistics about their listening habits, such as listening time, favourite genres, favourite artists, and more. 
</p>
<h3>1.2 Purpose</h3>
<p>
    This is the requirement document, which contains everything necessary for MuSpace. Additionally, the document includes the project features along with a description of how each feature will function.  The audience for this document is potential clients and their corresponding development teams. This is a reference guide for the development teams to ensure that everything runs smoothly, and answer potential questions along the way.
</p>
<h3>1.3 Scope and Business Model</h3>
<h4>1.3.1 Scope</h4>
<p>
    This document outlines the overall functionality, constraints and specifications of MuSpace, an application
    available on various platforms - iOS, Android, and the Web. This is to be used as a social media platform that
    matches people based on their favourite genre, artist, albums, and other musical tastes. You can also message
    various artists directly using an AI chatbot. Users will also be able to host live music-sharing sessions with
    friends, family, and strangers. Music sharing rooms can be locked with user IDs and passwords, generated on the
    creation of the room - the room name has to be a minimum of 5 characters long, and the password should be a
    minimum of 8 characters long.
</p>
<h4>1.3.2 Business Model</h4>
<p>
    The platform will be free to use. It will cost users nothing to download and there will be no advertisements in
    the application. The reasons for allowing users to use the application for free are to first gain exposure and
    publicity as well as develop monetizable content. Once enough exposure and publicity have been reached, R&D will
    be completed to introduce some form of monetization, like monetized concerts and DJ sessions.
</p>
<h2>1.4 Definitions, Acryonyms and Abbreviations</h2>
<h4>1.4.1 Acronyms and Abbreviations</h4>
<ul>
    <li>API - Application Program Interface - External software</li>
    <li>GUI - Graphical User Interface</li>
    <li>SRS - Software Requirement Specification</li>
    <li>2FA - Two Factor Authentication</li>
    <li>PC - Personal Computer</li>
    <li>Mobile-based - for Android / iOS platforms</li>
    <li>R&D - Research and Development</li>
</ul>
<h4>1.4.2 Definitions</h4>
<ul>
    <li>Chat - String of messages sent back and forth between users of an application</li>
</ul>
<h2>1.5 References</h2>
<ul>
    <li>
        <a href="https://bohr.wlu.ca/cp317/notes/IEEE_830.pdf" target="_blank">
        [IEEE 830] IEEE Recommended Practice for Software Requirements Specifications ANSI/IEEE Std. 830-1998
        </a>
    </li>
    <li>
        <a href="http://bluehawk.monmouth.edu/~lvallone/ieee_828-1998_sw_config_mgmt.pdf" target="_blank">
        [IEEE 828] IEEE Standard for Software Configuration Management Plans, ANSI/IEEE Std. 828-199
        </a>
    </li>
    <li>
        <a
            href="https://cours.etsmtl.ca/log792/private/restreint/IEEE_1058_Project_Management_Plan.pdf"
            target="_blank"
            >
        [IEEE 1058] IEEE Standard for Software Project Management ANSI/IEEEStd.1058.1-1987
        </a>
    </li>
    <li>
        <a href="https://bohr.wlu.ca/cp317/shout/Requirements-master/#141-acronyms-and-abbreviations" target="_blank">
        Shout! Software Requirement Specification (wlu.ca)
        </a>
    </li>
</ul>
<h2>2. Overall description</h2>
<h3>2.1 Product Perspective</h3>
<p>
    MuSpace will take a web-based development approach using <a href="https://reactjs.org/" target="_blank">React</a>.
    Major components include user connection to Spotify using <a href="https://developer.spotify.com/documentation/web-api/"     target="_blank">Spotify’s Web API</a>, and web-based chat functionality and listening rooms using <a           href="https://firebase.google.com/?gclid=Cj0KCQjw6NmHBhD2ARIsAI3hrM2r9bx-3SnvqnYGD46fymSbcpADc9fc4uqnhUJbNTPDoJXRWrtDO3gaAhNfEALw_wcB&gclsrc=aw.ds" target="_blank">Google Firebase’s</a> Realtime No-SQL Database.
</p>
<h4>2.1.1 <a href="https://www.figma.com/file/Jh6rAs4sNIZPaELM6qcGEt/Website?node-id=327%3A12583" target="_blank">Sample GUI</a></h4>
<iframe width="960px" height="720px" src="https://www.figma.com/file/Jh6rAs4sNIZPaELM6qcGEt/Website?node-id=327%3A12583" frameBorder="0" scrolling="no" allowFullScreen></iframe>
<h3>2.2 Product Functions</h3>
<p>
    MuSpace is a music application allowing users to connect and chat with each other, as well as look at what music their friends have been listening to. Users will be able to add friends, and friends can chat with each other using the in-app chat feature. The app currently supports Spotify for music preference data.
</p>
<h3>2.3 User Characteristics</h3>
<p>
   MuSpace’s primary users are those trying to connect with others who have a similar taste in music. MuSpace will be easy to use with a minimalistic UI, allowing users with minimal technical literacy to navigate through the application to connect with their friends and share music. A help section, as well as an FAQ, will be included in all versions of MuSpace so that users can quickly get up to speed. 
</p>
<h3>2.4 Constraints</h3>
<p>
    MuSpace users must have an active Spotify account. Without a Spotify account, users will be unable to create their MuSpace account. MuSpace, at this current point in time, will not function on iOS or Android devices, it will only be available on a web browser. IOS and Android functionality will be added in the the near future. 
</p>
<p>
    MuSpace users must have a stable internet connection in order to use the web application. Weak internet connection can result in excessive buffering time.
</p>
<p>
    MuSpace will have time, cost and reliability constraints. Development and testing must be finished before August 15th, 2021, and will be developed for free with no funding from the school or the students. Publication to the Apple App store requires a fee, so this will be a constraint.
</p>
<h3>2.5 Assumptions and Dependencies</h3>
<p>
    It is required that users of MuSpace all have Spotify accounts, with some level of activity on the platform to build a profile. MuSpace is dependent on how rich the user's musical history (songs listened to, artists followed, hours spent listening to certain genres, etc.) is, the more in-depth their profile will be and better the experience they will get from MuSpace.
</p>
<h3>2.6 User Interfaces</h3>
<h4>2.6.1 Sidebar</h4>
<p>The Sidebar will be consistent in all of the pages, except that of the Login/ Register  (2.6.3/ 2.6.4) Pages. It’s functionality will be to access all other pages (except Login/ Register pages) from any other page.</p>
<h4>2.6.2 Searchbar</h4>
<p>The Searchbar, similar to the SideBar (2.6.1) will be present on all pages.. The use of the search bar is to search for friends/ people’s  profiles. Along with this, the search bar contains the notification icon that indicates when a notification is present.</p>
<h4>2.6.3 Login Page</h4>
<p>The Login Page will be the first page that will be displayed to the user. This page will allow the user to login with the credentials using different authentications such as “login with Email” or “login with Google” (with their Google account). The page consists of a “Forgot Password” function that allows the user to reset their password with a link sent to the email linked to the MuSpace account. The sign up/register functionality is available for the user to create a new account and is  found beside the “Forgot Password” function, this function redirects the user to the Registration Page (2.6.4).</p>
<h4>2.6.4 Register Page</h4>
<p>The Register Page, asks for the new user’s information, such as First and Last names, Date of Birth, Username, Email and Password. This information will go into the database.</p>
<h4>2.6.5 Home Page</h4>
<p>The Home Page is the main page the user is redirected to after successfully logging in. This page displays some statistics about the user’s activity on MuSpace including favourite artists of the week, favourite songs of the week, hours spent listening to music, and more. The page also shows the friends activity tab which displays the music and album a particular friend (added previously by the user) is listening to.</p>
<h4>2.6.6 Messages Page</h4>
<p>The Messages Page is where users can go to see all of their chat histories with each of their friends. The main messages page is a list of conversations the user has had with each friend, sorted by the most recent history. Clicking on one of these conversations will bring the user to the chat page, in which they can send a message to the friend whose chat page they opened.</p>
<h4>2.6.7 Notification Page</h4>
<p>The Notification Page is where users can see any unread notifications they received. These could include new messages, friend requests, updates from the developers, or required actions such as updating account information.</p>
<h4>2.6.8 Profile Page</h4>
<p>The profile page is where users go to see their own or their friends' listening activity and statistics on Spotify. Each person's profile page can be customized with a profile picture, and a short biography (max 100 words).</p>
<h4>2.6.9 Friends Page</h4>
<p>The Friends Page will display all current friends, along with their listening activity (what they are currently listening to), along with leaderboards, and a similarity bar. The Leaderboard shows which of your friends has the most listening hours and Unique artists listened to in a given amount of time (to be determined).</p>

<h3>2.7 Use Case Diagram</h3>
<div style="width: 960px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:960px; height:720px" src="https://lucid.app/documents/embeddedchart/3b73c13e-821d-4b73-aea6-bfda8448a12e" id="7rQYm4LzcUxa"></iframe></div>

<h2>3. Technical Requirements</h2>
<h3>3.1 Hardware Interfaces</h3>
<!-- <ul>
    <li>Authentication</li>
    <ul>
        <li>Username/ Password (Google Authentication)</li>
    </ul>
    <li>Messaging</li>
    <ul>
        <li>Timestamps</li>
        <li>Message ID</li>
    </ul>
</ul> -->
<p>
The application will run on any Windows, OSx or Linux machine. The web browsers that can be used include Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge. The input will be received from the keyboard and mouse the system is attached to. 
</p>
<h3>3.2 Functional Requirements</h3>
<h4>3.2.1 Client Requirements</h4>
<ul>
    <li>OS: <a href="https://www.microsoft.com/en-ca/windows" target="_blank">Windows</a>, <a href="https://www.apple.com/ca/macos/big-sur/" target="_blank">MacOS</a>, <a href="https://www.linux.org/" target="_blank">GNU/Linux</a></li>
    <li>Stable network connection</li>
    <li>A device that has access to a modern web browser with JavaScript ES6 capabilities. E.G. <a href="https://www.google.com/intl/en_ca/chrome/" target="_blank">Google Chrome</a>, 
        
  <a href="https://www.mozilla.org/en-CA/firefox/new/" target="_blank">Firefox</a>, <a href="https://www.apple.com/ca/safari/" target="_blank">Safari</a>, <a href="https://www.microsoft.com/en-us/edge" target="_blank">Microsoft Edge</a>, etc. </li>
    <li><a href="https://www.spotify.com/us/home/" target="_blank">Active Spotify Account</a></li>
</ul>
<h4>3.2.2 Server/Development Requirements</h4>
<ul>
    <li>Cloudflare</li>
    <li>Amazon Web Services</li>
    <ul>
        <li>EC2</li>
        <li>CodeDeploy</li>
        <li>S3</li>
    </ul>
    <li>Google Firebase</li>
    <ul>
        <li>Authentication</li>
        <li>Realtime Database</li>
        <li>Firestore</li>
    </ul>
</ul>
<h3>3.3 Security</h3>
<ul>
    <li>Cloudflare</li>
    <ul>
        <li>Used as DDOS protection through their Content Delivery Network (CDN) to prevent many simultaneous connections taking down the server. Also minify our               code and allow it to reach the client quicker.</li>
    </ul>
    <li>Firebase Authentication</li>
    <ul>
        <li>Used as a central repository to create and store users with a generated internal ID that is used to refer to all their settings, data, etc…</li>
    </ul>
    <li>Firebase Firestore</li>
    <ul>
        <li>Used as the main database to store messages, feeds, posts, relationships, and user data. All data is stored as a key-value pair, with the key usually               being a user ID that is generated by Authentication.</li>
    </ul>
    <li>Firebase Cloud Storage</li>
    <ul>
        <li>Used as a CDN to store basic files that are served to clients, such as images.</li>
    </ul>
    <li>Report Feature</li>
    <ul>
        <li>Button on the sidebar that allows anyone to submit an issue that they have encountered via Github Issues.</li>
    </ul>
</ul>
<h3>3.4 Design Constraints</h3>
<p>
    The design tools are limited in solely budget, as the budget is $0.00. The Developer fees however for publishing are not tied down to the cost of the project       itself, and will be split with all team members. All other resources (frameworks, APIs, etc.) are free and open-source.
</p>
<h3>3.5 Portability</h3>
<p>
    Since this is a web-based application. It will be accessible on any device with a modern web browser as long as
    the user has a Spotify account and an internet connection to utilize the app. It will also be available on iOS and
    Android mobile devices.
</p>
<h2>4. Extra Details</h2>
<h3>Version History:</h3>
<ul>
    <li>Version 0.1.0 [Base Document]</li>
    <ul>
        <li>May 24th</li>
        <li>Members - All members</li>
    </ul>
    <li>Version 0.1.1 [Completion]</li>
    <ul>
        <li>May 26th</li>
        <li>Members - All members</li>
    </ul>
    <li>Version 1.0.0 [Finalizing and Publishing]</li>
    <ul>
        <li>May 28th</li>
        <li>Members - All members</li>
    </ul>
    <li>Version 2.0.0 [Reviewing Feedback and Finalizing]</li>
    <ul>
        <li>July 27th</li>
        <li>Members - All members</li>
    </ul>
</ul>
<!-- Authored By: -->
<h3>Authored By:</h3>
<ul>
    <li>Ali, Farzan</li>
    <li>Alting-Mees, Adrian</li>
    <li>Aylani, Jiten</li>
    <li>Goldman, Jacob</li>
    <li>Hollingworth, Declan</li>
    <li>Kellner, Kelvin</li>
    <li>Maan, Gur Armaan</li>
    <li>Manimaran, Mathu</li>
    <li>Mazza, Robert</li>
    <li>Olowonefa, Peju</li>
    <li>Rao, Nausher</li>
    <li>Sangha, Jagveer</li>
    <li>Tewari, Nish</li>
    <li>Yasin, Daner</li>
</ul>

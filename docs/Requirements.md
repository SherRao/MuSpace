<h1 align="center">
    <a href="./"><img id="header-logo" src="./logo.svg" width="250" alt="MuSpace logo" /></a>
</h1>
<h1 align="center">Software Requirement Specification (SRS)</h1>
<h2>1. Introduction</h2>
<h3>1.1 Project Summary</h3>
<p>
    MuSpace is a social media application that utilizes the Spotify API (and others in the future) to match and
    connect users that listen to similar artists, genres, songs, etc.
</p>
<h3>1.2 Purpose</h3>
<p>
    This is the requirement document, which contains everything necessary for MuSpace. Additionally, the document
    includes features along with a description of how each feature will function. The audience for this document is
    potential clients and their corresponding development teams. This is a reference guide for the development teams
    to ensure that everything runs smoothly, and some potential questions are answered.
</p>
<h2>1.3 Scope and Business Model</h2>
<h3>1.3.1 Scope</h3>
<p>
    This document outlines the overall functionality, constraints and specifications of MuSpace, an application
    available on various platforms - iOS, Android, and the Web. This is to be used as a social media platform that
    matches people based on their favourite genre, artist, albums, and other musical tastes. You can also message
    various artists directly using an AI chatbot. Users will also be able to host live music-sharing sessions with
    friends, family, and strangers. Music sharing rooms can be locked with user IDs and passwords, generated on the
    creation of the room - the room name has to be a minimum of 5 characters long, and the password should be a
    minimum of 8 characters long.
</p>
<h3>1.3.2 Business Model</h3>
<p>
    The platform will be free to use. It will cost users nothing to download and there will be no advertisements in
    the application. The reasons for allowing users to use the application for free are to first gain exposure and
    publicity as well as develop monetizable content. Once enough exposure and publicity have been reached, R&D will
    be completed to introduce some form of monetization, like monetized concerts and DJ sessions.
</p>
<h2>1.4 Definitions, Acryonyms and Abbreviations</h2>
<h3>1.4.1 Acronyms and Abbreviations</h3>
<ul>
    <li>API - Application Program Interface - External software</li>
    <li>GUI - Graphical User Interface</li>
    <li>SRS - Software Requirement Specification</li>
    <li>2FA - Two Factor Authentication</li>
    <li>PC - Personal Computer</li>
    <li>Mobile-based - for Android / iOS platforms</li>
    <li>R&D - Research and Development</li>
</ul>
<h3>1.4.2 Definitions</h3>
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
    MuSpace will take a web-based development approach using React and eventually be transferred to IOS and Android
    using React Native. Major components include user connection to Spotify using Spotify’s Web API, and web-based
    chat functionality and listening rooms using Google Firebase’s Realtime No-SQL Database.
</p>
<h4>2.1.1 <a href="https://www.figma.com/file/Jh6rAs4sNIZPaELM6qcGEt/Website?node-id=327%3A12583" target="_blank">Sample GUI</a></h4>
<iframe width="960px" height="720px" src="https://www.figma.com/file/Jh6rAs4sNIZPaELM6qcGEt/Website?node-id=327%3A12583" frameBorder="0" scrolling="no" allowFullScreen></iframe>
<h3>2.2 Product Functions</h3>
<p>
    MuSpace is a music-matchmaking application that takes the user’s musical interest (i.e. Songs, artists, albums,
    etc.) and uses that to build a profile of that user. MuSpace then uses that profile to match the user with other
    users with similar interests. Matched users can chat with each other using the in-app chat feature and can make
    new friends. The app currently supports Spotify for music preference data.
</p>
<h3>2.3 User Characteristics</h3>
<p>
    MuSpace’s primary users are those trying to connect with others who have a similar taste in music. MuSpace will be easy to use with a minimalistic UI, allowing     users with minimal technical literacy to navigate through the application to connect with their friends and share music. A help section, as well as an FAQ,         will be included in all versions of MuSpace so that users can quickly get up to speed. 
</p>
<h3>2.4 Constraints</h3>
<p>
    MuSpace users must have an active Spotify account. Without a spotify account, users will be unable to create their MuSpace account. MuSpace, at this current       point in time, will not function on iOS or Android devices, it will only be available on a web browser. iOS and Android functionality will be done later in         time. 
</p>
<p>
    MuSpace will have time, cost and reliability constraints. Development and testing must be finished before August 15th, 2021, and will be developed for free         with no funding from the school or the students. Publication to the Apple App store requires a fee, so this will be a constraint.
</p>
<h3>2.5 Assumptions and Dependencies</h3>
<p>
    It is required that users of MuSpace all have Spotify accounts, with some level of activity on the platform in order to build a profile. MuSpace is dependent       on how rich the user's musical history (songs listened to, artists followed, hours spent listening to certain genres, etc.) is, the more in-depth their profile     will be and better the experience they will get from MuSpace.
</p>
<h2>3. Technical Requirements</h2>
<h3>3.1 External Interfaces</h3>
<ul>
    <li>Authentication</li>
    <ul>
        <li>Username/ Password (Google Authentication)</li>
    </ul>
    <li>Messaging</li>
    <ul>
        <li>Timestamps</li>
        <li>Message ID</li>
    </ul>
</ul>
<h3>3.2 Performance Requirements</h3>
<h3>3.2.1 Client Requirements</h3>
<ul>
    <li>OS: Windows, MacOS, GNU/Linux, Android, iOS</li>
    <li>Stable network connection</li>
    <li>A device that has access to a modern web browser with JavaScript ES6 capabilities</li>
</ul>
<h3>3.2.2 Server/Development Requirements</h3>
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
    <li>Google Authentication</li>
    <li>Google reCaptcha v2</li>
    <li>2FA (User Safety)</li>
    <li>Report Feature</li>
</ul>
<h3>3.4 Portability</h3>
<p>
    Since this is a web-based application. It will be accessible on any device with a modern web browser as long as
    the user has a Spotify account and an internet connection to utilize the app. It will also be available on iOS and
    Android mobile devices.
</p>
<h2>4. Extra Details</h2>
<h3>Versions</h3>
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
<h3>Developers</h3>
<ul>
    <li><a target="_blank" href="https://www.github.com/Adepeju-nefa">Adepeju Olowonefa</a></li>
    <li><a target="_blank" href="https://github.com/AdrianAltingMees">Adrian Alting-Mees</a></li>
    <li><a target="_blank" href="https://github.com/danerkestey">Daner Yasin</a></li>
    <li><a target="_blank" href="https://github.com/wowitsdeclan">Declan Hollingworth</a></li>
    <li><a target="_blank" href="https://github.com/MAHAULMUSIC">Gur Armaan Maan</a></li>
    <li><a target="_blank" href="https://github.com/Caboji">Jacob Goldman</a></li>
    <li><a target="_blank" href="https://github.com/Jagveer-Sangha">Jagveer Sangha</a></li>
    <li><a target="_blank" href="https://github.com/aylanij">Jiten Aylani</a></li>
    <li><a target="_blank" href="https://github.com/kelvinkellner">Kelvin Kellner</a></li>
    <li><a target="_blank" href="https://www.github.com/MattDank">Mathumithan Manimaran</a></li>
    <li><a target="_blank" href="https://github.com/zancrash">Muhammad Ali</a></li>
    <li><a target="_blank" href="https://www.github.com/sherrao">Nausher Rao</a></li>
    <li><a target="_blank" href="https://github.com/XSilviaX">Nishant Tewari</a></li>
    <li><a target="_blank" href="https://github.com/Robert336">Robert Mazza</a></li>
</ul>

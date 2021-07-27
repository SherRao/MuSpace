<h1 align="center">
    <a href="./"><img id="header-logo" src="./logo.svg" width="250" alt="MuSpace logo"/></a>
</h1>
<h1 align="center">Analysis Document</h1>

<!-- Introduction -->
<h2>Table of Contents</h2>
<h2>1. Introduction</h2>
<h3>1.1 Project Overview</h3>
<p>MuSpace is a music-based social media platform focused on connecting music fans with one another and allowing them to share their tastes with the world. Each MuSpace user will be provided with a personal feed to post about songs, albums, artists, and playlists that they are interested in. Users will be able to add friends on MuSpace who they can chat with, and look at their detailed Spotify listening history. Users will also be able to view detailed statistics about their own listening habits, such as listening time, favourite genres, favourite artists, and more.</p>

<!-- Object Classification -->
<h2>2. Object Classification</h2>
<h3>2.1 Object Diagram</h3>
<div style="width: 960px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:960px; height:720px" src="https://lucid.app/documents/embeddedchart/f369b257-772d-4250-b476-e0a7f3c92e25" id="UtiOslhxY_iS"></iframe></div>
<!-- #################################################### -->

<!-- Entity Objects -->
<h3>2.2 Entity Objects</h3>
<ul>
    <!-- User -->
    <li>
        <b>User (Object)</b> - A person using/interacting with MuSpace
        <ul>
            <li>User ID (unique Long, private) - A unique ID is given to every single User object.</li>
            <li>First Name - (String, private) - The User’s First Name.</li>
            <li>Last Name - (String, private) - The User’s last name.</li>
            <li>Username (String, private) - The User’s account name.</li>
            <li>Password (Hash) - The password to a User’s account.</li>
            <li>Date of Birth (Long, private) - The User’s date of birth.</li>
            <li>Email (String, private) - The User’s email address.</li>
            <li>List of Statistic ID (List of unique Longs, private) - a reference to the User’s Statistic object - every User has one statistic object.</li>
            <li>List of Feed ID (List of unique Longs, private) - a reference to the User’s Feed object - every User has one statistic object.</li>
            <li>List of Chat ID (List of unique Longs, private) - a reference to the Chat ID’s for the User Object.</li>
            <li>List of Friend ID (List of unique Longs, private) - a reference to the Friend ID’s for the User object.</li>
        </ul>
    </li>
    <br/>
    <!-- Profile -->
    <li>
        <b>Profile (Object)</b> - A user’s profile page displaying recent listening history, friends, and account information
        <ul>
            <li>User (Object) - a reference to the user object for showing the users details like username and fullname, and to be used for editing the users account details.</li>
        </ul>
    </li>
    <br/>
    <!-- Feed -->
    <li>
        <b>Feed (Object)</b> - Collection of posts created by a User
        <ul>
            <li>Feed ID (Long, private) - A unique ID is given to every single feed.</li>
            <li>Posts (Object, public)</li>
            <ul>
                <li>Post ID (unique Long, private) - A unique ID is given to every single post.</li>
                <li>Text (String) - The contents of the post</li>
                <li>Spotify URL (String)- a link to the song, album, or artist attached to the post.</li>
            </ul>
        </ul>
    </li>
    <br/>
    <!-- Statistic -->
    <li>
        <b>Statistic (Object)</b> - Collection of specific user statistics (e.g listening time, top album/artist)
        <ul>
            <li>Statistic ID (unique Long, private) - A unique ID is given to every single statistics object.</li>
            <li>Listening Time (float [seconds], public) - total listening time for songs, artists, albums, stored in seconds (float) and converted into minutes and hours.</li>
            <li>Top Artist (String, Public) - top artist the user listens to (artist with most listening time).</li>
            <li>Friend (Object(s)) - A User connecting with other Users.</li>
        </ul>
    </li>
    <br/>
    <!-- Chat -->
    <li>
        <b>Chat (Object)</b> - Chat information and history between two users
        <ul>
            <li>Chat ID - A unique ID is given to every single chat object.</li>
            <li>Messages (List of Message-IDs, private) - Written communication sent to or left for a recipient who cannot be contacted directly.</li>
        </ul>
    </li>
    <br/>
    <!-- Message -->
    <li>
        <b>Message (Object)</b> - A message sent from one user to another. 
        <ul>
            <li>Message-ID (unique Long, private) - A unique ID is given to every single Message object.</li>
            <li>Author ID (unique Long, private) - User ID of User who authored the message.</li>
            <li>Timestamp</li>
            <li>Text (String) - The contents of the message.</li>
        </ul>
    </li>
    <br/>
    <!-- Friend -->
    <li>
        <b>Friend (Object)</b> - A friend that the user has been added / accepted
        <ul>
            <li>Friend ID (unique Long, private) - User ID of Friend.</li>
            <li>Message - Written communication sent to or left for a recipient who cannot be contacted directly.</li>
            <ul>
                <li>Content (String) - String of characters</li>
            </ul>
        </ul>
    </li>
    <br/>
    <!-- Notification -->
    <li>
        <b>Notification (Object)</b> - a message sent by the application to a user when the application is not open.
        <ul>
            <li>Notification ID (unique Long, private)</li>
            <li>Message - Written communication sent to or left for a recipient who cannot be contacted directly.</li>
            <ul>
                <li>Content (String) - String of characters</li>
            </ul>
        </ul>
    </li>
    <br/>
    <!-- Music 
        <li><b>Music (Object)</b>
            <ul>
              <li>Song (Object, Public) - a short poem or other sets of words set to music or meant to be sung.</li>
              <li>Album (Object, Public) - a collection of recordings issued as a single item on Spotify.</li>
              <li>Artist (Object, Public) - a performer, such as a singer, actor, or dancer.</li>
            </ul>
        </li>
        -->
    <br/>
</ul>
<!-- #################################################### -->
<!-- Boundary Objects -->
<h3>2.3 Boundary Objects</h3>
<ul>
    <!-- Login View -->
    <li><b>LoginView</b> - Where a User goes to log in.</li>
    <br/>
    <!-- Register View -->
    <li>
        <b>RegisterView</b> - Where a User goes to sign up.
        <ul>
            <li><b>LinkSpotifyView</b> - Where a User goes to link Spotify with their account.</li>
        </ul>
        <br/>
        <!-- Home View -->
    </li>
    <li>
        <b>HomeView</b> - Where a user goes to see highlights of recent Feed posts, their most active Friend’s Statistics, and the current most popular Song
        <ul>
            <li><b>StatsView</b> - Where a User’s Statistics of their Listening history on Spotify are displayed such as favourite Artist and Song, as well as, Statistics for their most active Friend.</li>
        </ul>
        <br/>
        <!-- ChatView -->
    <li><b>ChatView</b> - Where a User can send/receive messages to their Friends on the platform.</li>
    </li>
    <br/>
    <!-- Friends View -->
    <li>
        <b>FriendsView</b> - Where a User goes to see their friends.
        <ul>
            <li><b>FriendsListView</b> - Where a User views a list of all their Friends</li>
            <li><b>AddFriendsView</b> - Where a User can see to search for Friends.</li>
        </ul>
        <br/>
    </li>
        <!-- Profile View -->
    <li>
        <b>ProfileView</b> - Where a User can view another User’s music preferences and Feed. If a User is looking at their own Profile they can add a new Post to their Feed.
        <ul>
            <li><b>FeedView</b> - Where a User can look at the Statistics of their Music history</li>
            <li><b>AddPostView</b> - Where a User can add a new post to their FeedPage consisting of a message and exactly one Spotify song, album, or artist.</li>
        </ul>
        <br/>
    </li>
        <!-- Search Bar View -->
    <li><b>SearchBarView</b> - Where a User searches for other User by username.</li>
    <br/>
    <!-- Settings Page View -->
    <li><b>SettingsPageView</b> - Where a User can view and edit their user profile information such as display picture, email, password, and full name.</li>
    <br/>
</ul>

<!-- #################################################### -->
<!-- Control Objects -->
<h3>2.4 Control Objects</h3>
<ul>
    <!-- Login Controllers -->
    <li><b>Login Controllers</b></li>
    <ul>
        <li><b>AuthenticateUserController</b> - Coordinates the flag to view protected pages that require a logged-in User.</li>
    </ul>
    <br/>
    <!-- Registration Controllers -->
    <li><b>Registration Controllers</b></li>
    <ul>
        <li><b>RegisterUserController</b> – Coordinates the registration of a new User to the site.</li>
        <li><b>SpotifyConnectionController</b> - Coordinates the connection of a new User account to a Spotify account. </li>
    </ul>
    <br/>
    <!-- Home Page Controllers -->
    <li><b>Home Page Controllers</b></li>
    <ul>
        <li><b>DisplayProfileStatsController</b> - Coordinates the User-specific data that is shown on the home page.</li>
        <li><b>DisplayFriendListeningActivityController</b> - Coordinates the music that the User’s friends are currently Listening to.</li>
        <li><b>DisplayFriendMusicDataController</b> - Coordinates music data related to the User’s friends.</li>
    </ul>
    <br/>
    <!-- Friends Controllers -->
    <li><b>Friends Controllers</b></li>
    <ul>
        <li><b>DisplayFriendListController</b> - Coordinates the List of friends that is displayed to the User.</li>
        <li><b>DisplayFriendMusicDataController</b> - Coordinates music data related to the User’s friends.</li>
        <li><b>DisplayFriendListeningActivityController</b> - Coordinates the music that the User’s friends are currently Listening to.</li>
    </ul>
    <br/>
    <!-- Chat Page Controllers -->
    <li><b>Chat Page Controllers</b></li>
    <ul>
        <li><b>DisplayRecentMessagesController</b> - Coordinates the List of recently messaged friends from the User to be displayed.</li>
        <li><b>DisplayMessageRetreivalController</b> - Coordinates the retrieval of the List of all messages sent and received from a specific User.</li>
        <li><b>SendMessageController</b> - Coordinates the sending of a message to another User.</li>
        <li><b>ReceiveMessageController</b> - Coordinates the receiving of a message from another User.</li>
        <li><b>NewMessageController</b> - Coordinates starting a new DM with another User.</li>
    </ul>
    <br/>
    <!-- Settings Page Controllers -->
    <li><b>Settings Page Controllers</b></li>
    <ul>
        <li><b>EditUserDataController</b> - Coordinates changing and deletion of User data, like the Username, email, password, and date of birth.</li>
        <li><b>DisplayUserDataController</b> - Coordinates the display of User data.</li>
    </ul>
    <br/>
    <!-- Profile Page Controllers -->
    <li><b>Profile Page Controllers</b></li>
    <ul>
        <li><b>FeedPageController</b> - Coordinates the User’s FeedPage and what posts are displayed on the page.</li>
        <li><b>AddNewPostController</b> - Coordinates the addition of a new post to the User’s FeedPage.</li>
    </ul>
    <br/>
    <li><b>SearchController</b> - Coordinates all the search tasks.</li>
</ul>
<!-- Further Steps -->
<h2>3. Further Steps</h2>
<h3>3.1 State Diagram</h3>
<div><iframe width="960px" height="720px" src="https://miro.com/app/live-embed/o9J_l-_TB-k=/?moveToViewport=-3168,751,1845,1101" frameBorder="0" scrolling="no" allowFullScreen></iframe></div>
<br/><br/>

<!-- Non Functional Attributes -->
<h2>4. Non Functional Attributes</h2>
<p><b>Performance and scalability.</b> How fast does the system return results? How much will this performance change with higher workloads?</p>
<p><b>Performance and compatibility.</b> Which hardware, operating systems, browsers, and their versions does the software run on? Does it conflict with other applications and processes within these environments?</p>
<p>MuSpace will be accessible on any device with a modern web browser such as google chrome or firefox as long as the user has a Spotify account and an internet connection to utilize the app. It will also be available on iOS and Android mobile devices.</p>
<p><b>Reliabilty, availability, maintainability.</b> How often does the system experience critical failures? and how much time is available to users against downtimes?</p>
<p><b>Security.</b> How are the system and its data protected against attacks?</p>
<p>
    All data will be securely transferred from a client to the server with Google Firebase’s implementation of data privacy and security. All endpoints used on Firebase are secured through Google’s servers. See 
    <a href="https://firebase.google.com/docs/firestore/security/overview">here</a> 
    for more information on how Google Firebase uses security.
</p>
<p><b>Localization.</b> Does the system match local specifics?</p>
<p><b>This attribute defines how well a system or its element falls in line with the context of the local market-to-be. The context includes local languages, laws, currencies, cultures, spellings, and other aspects. The more a product sticks with it, the more success it should have with a particular target audience.</b></p>
<p><b>The date format must be as follows: day.month.year</b></p>
<p><b>Usability.</b> How easy is it for a customer to use the system?</p>
<!-- Classes -->
<h2>5. Classes</h2>
<p><b>This is an ongoing diagram that is being continuously updated.</b></p>
<div style="width: 960px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:960px; height:720px" src="https://lucid.app/documents/embeddedchart/dd3c7144-fde2-4d4e-96a5-1df4cb1198b3" id="QuUPrM8LWEpi"></iframe></div>

<!-- Extra Details -->
<h2>6. Extra Details</h2>

<!-- Versions -->
<h3>Version History:</h3>
<ul>
    <li>Version 0.1.0 [Sections 1-3] Preliminary Document</li>
    <ul>
        <li>June 8th</li>
        <li>Members - All members</li>
    </ul>
    <li>Version 0.1.1 [Polishing Sections 1-3]</li>
    <ul>
        <li>June 10th</li>
        <li>Members - All members</li>
    </ul>
    <li>Version 1.0.0 [Adding 4-7, Finalizing and Publishing]</li>
    <ul>
        <li>June 24th</li>
        <li>Members - All members</li>
    </ul>
    <li>Version 1.0.1 [Editing 4-7, Reviewing Feedback and Finalizing]</li>
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

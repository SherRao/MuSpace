<h1 align="center">
  <a href="./"><img id="header-logo" src="./logo.svg" width="250" alt="MuSpace logo"/></a>
</h1>
<h1 align="center">Analysis Document</h1>

<div style="width: 960px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:960px; height:720px" src="https://lucid.app/documents/embeddedchart/f369b257-772d-4250-b476-e0a7f3c92e25" id="UtiOslhxY_iS"></iframe></div>

<h1 align="center">
    <a href="./"><img id="header-logo" src="./logo.svg" width="250" alt="MuSpace logo"/></a>
  </h1>
  <h1 align="center">Analysis Document</h1>
  
  <div style="width: 960px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:960px; height:720px" src="https://lucid.app/documents/embeddedchart/f369b257-772d-4250-b476-e0a7f3c92e25" id="UtiOslhxY_iS"></iframe></div>
  
  <!-- Introduction -->
  <h2>Table of Contents</h2>
  
  <h2>1. Introduction</h2>
  <h3>1.1 Project Overview</h3>
  <p>MuSpace is a music-based social media platform focused on connecting music fans with one another and allowing them to share their tastes with the world. Each MuSpace user will be provided with a personal feed to post about songs, albums, artists, and playlists that they are interested in. When users share similar listening habits with others, they are recommended as connections via a point-based rating system using the <a href="https://developer.spotify.com/documentation/web-api/" target="_blank">Spotify API</a> and <a href="https://developer.spotify.com/documentation/web-playback-sdk/#about-the-sdk" target="_blank">Spotify SDK</a> data. MuSpace will also offer listening rooms that allow users to listen along with their friends and chat with each other in real-time. Additionally, users can recommend which songs will be played in the listening room.</p>

  <!-- Object Classification -->
  <h2>2. Object Classification</h2>
  <h3>2.1 Object Diagram</h3>

  <!-- #################################################### -->
  <!-- Entity Objects -->
  <h3>2.2 Entity Objects</h3>
  <ul>
    <!-- User -->
    <li><b>User (Object)</b> - A person using/interacting with MuSpace
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
    <br>
    <!-- Profile -->
    <li><b>Profile (Object)</b> - A user’s profile page displaying recent listening history, friends, and account information
        <ul>
          <li>User (Object) - a reference to the user object for showing the users details like username and fullname, and to be used for editing the users account details.</li>
        </ul>
    </li>
    <br>
    <!-- Feed -->
    <li><b>Feed (Object)</b> - Collection of posts created by a User
        <ul>
          <li>Feed ID (Long, private) - A unique ID is given to every single feed.</li>
          <li>Posts (Object, public)</li>
          <ul>
            <li>Post ID (unique Long, private) - A unique ID is given to every single post.</li>
            <li>Text (String) - The contents of the post of the feed.</li>
            <li>Spotify URL (String)- a link to the song, album, or artist attached to the post.</li>
          </ul>
        </ul>
    </li>
    <br>
    <!-- Statistic -->
    <li><b>Statistic (Object)</b> - Collection of specific user statistics (e.g listening time, top album/artist)
        <ul>
          <li>Statistic ID (unique Long, private) - A unique ID is given to every single statistics object.</li>
          <li>Listening Time (float [seconds], public) - total listening time for songs, artists, albums, stored in seconds (float) and converted into minutes and hours.</li>
          <li>Top Artist (String, Public) - top artist the user listens to (artist with most listening time).</li>
          <li>Friend (Object(s)) - A User connecting with other Users.</li>
        </ul>
    </li>
    <br>
    <!-- Chat -->
    <li><b>Chat (Object)</b> - Chat information and history between two users
        <ul>
          <li>Chat ID - A unique ID is given to every single chat object.</li>
          <li>Messages (List of Message-IDs, private) - Written communication sent to or left for a recipient who cannot be contacted directly.</li>
        </ul>
    </li>
    <br>
    <!-- Message -->
    <li><b>Message (Object)</b> - A message sent from one user to another 
        <ul>
          <li>Message-ID (unique Long, private) - A unique ID is given to every single Message object.</li>
          <li>Author ID (unique Long, private) - A unique ID is given to every single Author object.</li>
          <li>Timestamp</li>
          <li>Content - String of characters</li>
        </ul>
    </li>
    <br>
    <!-- Friend -->
    <li><b>Friend (Object)</b> - A friend that the user has added / accepted
        <ul>
          <li>Friend ID (unique Long, private)</li>
          <li>Message - Written communication sent to or left for a recipient who cannot be contacted directly.</li>
            <ul>
                <li>Content (String) -  String of characters</li>
            </ul>
        </ul>
    </li>
    <br>
    <!-- Notification -->
    <li><b>Notification (Object)</b> - a message sent by the application to a user when the application is not open
        <ul>
          <li>Notification ID (unique Long, private)</li>
          <ul>
            Message - Written communication sent to or left for a recipient who cannot be contacted directly.
            <ul>
                <li>Content (String) -  String of characters</li>
            </ul>
          </ul>
        </ul>
    </li>
    <br>
    <!-- Music -->
    <li><b>Music (Object)</b>
        <ul>
          <li>Song (Object, Public) - a short poem or other sets of words set to music or meant to be sung.</li>
          <li>Album (Object, Public) - a collection of recordings issued as a single item on Spotify.</li>
          <li>Artist (Object, Public) - a performer, such as a singer, actor, or dancer.</li>
        </ul>
    </li>
    <br>
  </ul>

<!-- #################################################### -->
<!-- Boundary Objects -->
<h3>2.3 Boundary Objects</h3>
<ul>
  <!-- Login View -->
    <li><b>LoginView</b> - Where a User goes to log in to their account.</li>
    <br>
  <!-- Register View -->
    <li><b>RegisterView</b> - Where a User goes to sign up.
      <ul>
        <li><b>LinkSpotifyView</b> - Where a User goes to link Spotify with their account.</li>
      </ul>
    <br>
  <!-- Home View -->
    <li><b>HomeView</b> - Where a user goes to see highlights of recent Feed posts, their most active Friend’s Statistics, and the current most popular Song
      <ul>
            <li><b>StatsView</b> - Where a User’s Statistics of their Listening history on Spotify are displayed such as favourite Artist and Song, as well as, Statistics for their most active Friend.</li>
        </ul>
    <br>
  <!-- ChatView -->
    <li><b>ChatView</b> - Where a User can send/receive messages to their Friends on the platform.</li>
    <br>
  <!-- Friends View -->
    <li><b>FriendsView</b> - Where a User goes to sign up.
      <ul>
        <li><b>FriendsListView</b> - Where a User views a list of all their Friends</li>
        <li><b>AddFriendsView</b> - Where a User can see to search for Friends.</li>
      </ul>
    <br>
  <!-- Profile View -->
    <li><b>ProfileView</b> - Where a User can view another User’s music preferences and Feed. If a User is looking at their own Profile they can add a new Post to their Feed.
      <ul>
        <li><b>FeedView</b> - Where a User can look at the Statistics of their Music history</li>
        <li><b>AddPostView</b> - Where a User can add a new post to their FeedPage consisting of a message and exactly one Spotify song, album, or artist.</li>
      </ul>
    <br>
  <!-- Search Bar View -->
    <li><b>SearchBarView</b> - Where a User can send/receive messages to their Friends on the platform.</li>
    <br>
  <!-- Serrings Page View -->
    <li><b>SettingsPageView</b> - Where a User can view and edit their user profile information such as display picture, email, password, and full name.</li>
    <br>
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
  <br>
  <!-- Registration Controllers -->
  <li><b>Registration Controllers</b></li>
  <ul>
      <li><b>RegisterUserController</b> – Coordinates the registration of a new User to the site.</li>
      <li><b>SpotifyConnectionController</b> - Coordinates the connection of a new User account to a Spotify account. </li>
  </ul>
  <br>
  <!-- Home Page Controllers -->
  <li><b>Home Page Controllers</b></li>
  <ul>
      <li><b>DisplayProfileStatsController</b> - Coordinates the User-specific data that is shown on the home page.</li>
      <li><b>DisplayFriendListeningActivityController</b> - Coordinates the music that the User’s friends are currently Listening to.</li>
      <li><b>DisplayFriendMusicDataController</b> - Coordinates music data related to the User’s friends.</li>
  </ul>
  <br>
  <!-- Friends Controllers -->
  <li><b>Friends Controllers</b></li>
  <ul>
      <li><b>DisplayFriendListController</b> - Coordinates the List of friends that is displayed to the User.</li>
      <li><b>DisplayFriendMusicDataController</b> - Coordinates music data related to the User’s friends.</li>
      <li><b>DisplayFriendListeningActivityController</b> - Coordinates the music that the User’s friends are currently Listening to.</li>
  </ul>
  <br>
  <!-- Chat Page Controllers -->
  <li><b>Chat Page Controllers</b></li>
  <ul>
      <li><b>DisplayRecentMessagesController</b> - Coordinates the List of recently messaged friends from the User to be displayed.</li>
      <li><b>DisplayMessageRetreivalController</b> - Coordinates the retrieval of the List of all messages sent and received from a specific User.</li>
      <li><b>SendMessageController</b> - Coordinates the sending of a message to another User.</li>
      <li><b>ReceiveMessageController</b> - Coordinates the receiving of a message from another User.</li>
      <li><b>NewMessageController</b> - Coordinates starting a new DM with another User.</li>
  </ul>
  <br>
  <!-- Settings Page Controllers -->
  <li><b>Settings Page Controllers</b></li>
  <ul>
      <li><b>EditUserDataController</b> - Coordinates changing and deletion of User data, like the Username, email, password, and date of birth.</li>
      <li><b>DisplayUserDataController</b> - Coordinates the display of User data.</li>
  </ul>
  <br>
  <!-- Profile Page Controllers -->
  <li><b>Profile Page Controllers</b></li>
  <ul>
      <li><b>FeedPageController</b> - Coordinates the User’s FeedPage and what posts are displayed on the page.</li>
      <li><b>AddNewPostController</b> - Coordinates the addition of a new post to the User’s FeedPage.</li>
  </ul>
  <br>
  <li><b>SearchController</b> - Coordinates all the search tasks.</li>
  </ul>

<!-- Further Steps -->
<h2>3. Further Steps</h2>
<h3>3.1 State Diagram</h3>
Embeded State Diagrams
<h3>3.2 User Controls</h3>
Embeded User Controls
<!-- Non Functional Attributes -->
<h2>4. Non Functional Attributes</h2>

<!-- Classes -->
<h2>5. Classes</h2>

<!-- Versions -->
<h2>6. Versions</h2>
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
</ul>

<!-- Authored By: -->
<h2>7. Authored By:</h2>
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
class CollectInfo {
	constructor () {
		document.querySelector('#signUp').innerHTML = '<!-- Header section containing title -->  <header class="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">    <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">      <div class="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--8-col-desktop">        <a href="/"><h3>Firebase Authentication</h3></a>      </div>    </div>  </header>  <main class="mdl-layout__content mdl-color--grey-100">    <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">      <!-- Container for the demo -->      <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">        <div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">          <h2 class="mdl-card__title-text">Study Swipe Sign Up or Login</h2>        </div>        <div class="mdl-card__supporting-text mdl-color-text--grey-600">          <p>Enter an email and password below and either sign in to an existing account or sign up</p>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="text" id="email" name="email" placeholder="Email"/>          &nbsp;&nbsp;&nbsp;          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="password" id="password" name="password" placeholder="Password"/>          <br/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="name" id="name" name="name" placeholder="Name"/>          <br/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="course1" id="course1" name="course1" placeholder="Course"/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="course2" id="course2" name="course2" placeholder="Course"/>           <input class="mdl-textfield__input" style="display:inline;width:auto;" type="course3" id="course3" name="course3" placeholder="Course"/>           <input class="mdl-textfield__input" style="display:inline;width:auto;" type="course4" id="course4" name="course4" placeholder="Course"/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="course5" id="course5" name="course5" placeholder="Course"/>          <br/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="hobby1" id="hobby1" name="hobby1" placeholder="Hobby"/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="hobby2" id="hobby2" name="hobby2" placeholder="Hobby"/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="hobby3" id="hobby3" name="hobby3" placeholder="Hobby"/>          <br/>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="enviroment" id="enviroment" name="enviroment" placeholder="Studying Enviroment"/>          <br/><br/>          <button class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-sign-up" name="signup">Sign Up</button>      <br/><br/>	<p>Or enter an email and password below and sign in</p>          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="text" id="sign-in-email" name="email" value="test@test.ca" placeholder="Email"/>          &nbsp;&nbsp;&nbsp;          <input class="mdl-textfield__input" style="display:inline;width:auto;" type="password" id="sign-in-password" value="test.ca" name="password" placeholder="Password"/>          <br/>          <button class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-login" name="login">Login</button>    <!-- Container where we\'ll display the user details -->          <div class="quickstart-user-details-container">            Firebase sign-in status: <span id="quickstart-sign-in-status">Unknown</span>            <div>Firebase auth <code>currentUser</code> object value:</div>            <pre><code id="quickstart-account-details">null</code></pre>          </div>        </div>      </div>    </div>  </main>'
	}
}


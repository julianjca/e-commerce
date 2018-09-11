Vue.component('main-header', {
  template: `
  <div class="container-landing">
  <div class="container-nav">
    <div class="logo">
      <h1>E-COMMERCE</h1>

    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </div>
    <div class="menu">
      <ul class="navbar-nav">
        <li>
          <a v-on:click="showCart" href="#" id="shopping-nav"><i class="fas fa-shopping-cart"></i>
          </a>
        </li>
        <li>
          <a href="#" class="hvr-grow-shadow" id="register-nav">Register</a>
        </li>
        <li>
          <a href="#" id="login-nav" class="hvr-grow-shadow">Log In</a>
        </li>
      </ul>
    </div>
  </div>
</div>`,
methods : {
  showCart : function(){
    this.$emit('show-modal');
  }
}
});
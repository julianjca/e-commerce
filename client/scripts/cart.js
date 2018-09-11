Vue.component('main-cart', {
  template: `
  <div id="cart">
      <div class="shopping-cart">
        <!-- Title -->
        <div class="title">
          Shopping Bag
        </div>

        <div class="item">
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>

          <div class="image">
            <img src="./images/item-1.png" alt="" />
          </div>

          <div class="description">
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
          </div>

          <div class="quantity">
            <button class="plus-btn" type="button" name="button">
              <img src="./images/plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1">
            <button class="minus-btn" type="button" name="button">
              <img src="./images/minus.svg" alt="" />
            </button>
          </div>

          <div class="total-price">$549</div>
        </div>

        <div class="item">
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>

          <div class="image">
            <img src="./images/item-2.png" alt="" />
          </div>

          <div class="description">
            <span>Maison Margiela</span>
            <span>Future Sneakers</span>
            <span>White</span>
          </div>

          <div class="quantity">
            <button class="plus-btn" type="button" name="button">
              <img src="./images/plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1">
            <button class="minus-btn" type="button" name="button">
              <img src="./images/minus.svg" alt="" />
            </button>
          </div>

          <div class="total-price">$870</div>
        </div>

        <div class="item">
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>

          <div class="image">
            <img src="./images/item-3.png" alt="" />
          </div>

          <div class="description">
            <span>Our Legacy</span>
            <span>Brushed Scarf</span>
            <span>Brown</span>
          </div>

          <div class="quantity">
            <button class="plus-btn" type="button" name="button">
              <img src="./images/plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1">
            <button class="minus-btn" type="button" name="button">
              <img src="./images/minus.svg" alt="" />
            </button>
          </div>
          <div class="total-price">$349</div>
        </div>
      </div>
      <div v-on:click="closeCart" id="close">
        <h4>close</h4>
      </div>
    </div>`,
    data : function(){
      return {
        show : false
      };
    },
    methods : {
      closeCart : function(){
        this.$emit('close-modal');
      }
    }
  }
);

// const app = new Vue({
//   el: '#app',
// });
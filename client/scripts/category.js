Vue.component('main-category', {
  template: `
  <div class="category-list">
      <ul>
        <li>
          <a href="#" class="hvr-grow">
            Category 1
          </a>
        </li>
        <li>
          <a href="#" class="hvr-grow">Category 2</a>
        </li>
        <li>
          <a href="#" class="hvr-grow">Category 3</a>
        </li>
        <li>
          <a href="#" class="hvr-grow">Category 3</a>
        </li>
        <li>
          <a href="#" class="hvr-grow">Category 3</a>
        </li>
        <li>
          <a href="#" class="hvr-grow">Category 3</a>
        </li>
      </ul>
    </div>`,
    data : function(){
      return {
        show : false
      };
    },
    methods : {
      closeCart : function(){
        this.$emit('tutup');
      }
    }
  }
);

// const app = new Vue({
//   el: '#app',
// });
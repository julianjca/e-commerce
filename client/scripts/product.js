Vue.component('product-comp',{
  template : `
  <div class="product-container hvr-grow">
    <img src="https://via.placeholder.com/200x200" alt="">
    <p>{{product.name}}</p>
    <p>Price : {{product.price}}</p>
  </div>
  `,
  props : ['product']
});
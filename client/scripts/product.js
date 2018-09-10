Vue.component('product-comp',{
  template : `
  <div class="product-container hvr-grow">
    <img src="./images/shoes1.jpg" alt="">
    <p>{{product.name}}</p>
    <p>Price : {{product.price}}</p>
  </div>
  `,
  props : ['product']
});
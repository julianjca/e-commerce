const app = new Vue({
  el: '#app',
  methods : {
    show : function(){
      this.showModal= true;
    },
    close : function(){
      this.showModal = false;
    },
    findCategory : function(id){
      axios({
        method: 'GET',
        url: `http://localhost:3000/categories/${id}`
      })
        .then(data => {
          console.log(data.data.data.products);
          app.products = data.data.data.products;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addToCart(id){
      const cart = JSON.parse(localStorage.getItem('cart'));
      let obj = {};
      obj.id = id;
      cart.push(obj);
      this.cart = cart;
      localStorage.setItem('cart',JSON.stringify(cart));
    }
  },
  data : function(){
    return{
      showModal : false,
      products : [],
      categories : [],
      cart : []
    };
  },
  created :
    function(){
      axios({
        method: 'get',
        url: 'http://localhost:3000/categories/',
      })
        .then(data => {
          console.log(data.data.data);
          app.categories = data.data.data;
          app.products = data.data.data[5].products;
        })
        .catch(err => {
          console.log(err);
        });
    }
});
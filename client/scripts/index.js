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
          app.products = data.data.data.products;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addToCart(data){
      console.log(data);
      const cart = JSON.parse(localStorage.getItem('cart'));
      if(cart===null){
        const arr = [];
        arr.push(data);
        this.cart = arr;
        localStorage.setItem('cart',JSON.stringify(arr));
      } else{
        cart.push(data);
        this.cart = cart;
        localStorage.setItem('cart',JSON.stringify(cart));
      }
    },
    deleteFromCart(id){
      const cart = JSON.parse(localStorage.getItem('cart'));
      console.log(id);
      for(let i = 0;i< cart.length;i++){
        if(cart[i]._id===id){
          cart.splice(i,1);
        }
      }
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
      this.cart = JSON.parse(localStorage.getItem('cart'));
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
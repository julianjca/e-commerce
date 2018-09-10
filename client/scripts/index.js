const app = new Vue({
  el: '#app',
  methods : {
    show : function(){
      this.showModal= true;
    },
    close : function(){
      this.showModal = false;
    }
  },
  data : function(){
    return{
      showModal : false,
      products : [
        {
        name : "Product 1",
        price : 100000
        },
        {
        name : "Product 2",
        price : 100000
        },
        {
        name : "Product 3",
        price : 100000
        },
        {
        name : "Product 4",
        price : 100000
        },
        {
        name : "Product 5",
        price : 100000
        },
        {
        name : "Product 6",
        price : 100000
        }
    ]
    };
  }
});
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
      console.log(id);
    }
  },
  data : function(){
    return{
      showModal : false,
      products : [],
      categories : [
        'test 1',
        'test 2',
        'test 3',
        'test 4',
        'test 5',
        'test 6',
        'test 7',
      ]
    };
  },
  created :
    function(){
      axios({
        method: 'get',
        url: 'http://localhost:3000/products/',
      })
        .then(data => {
          console.log(data.data.data);
          app.products = data.data.data;
        })
        .catch(err => {
          console.log(err);
        });

        axios({
          method: 'get',
          url: 'http://localhost:3000/categories/',
        })
          .then(data => {
            console.log(data.data.data);
            app.categories = data.data.data;
          })
          .catch(err => {
            console.log(err);
          });
    }
});
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
      showModal : false
    };
  }
});
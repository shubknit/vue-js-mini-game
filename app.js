new Vue({
  el: '#vue-app',
  data: {
    burst: false,
    punchStatus: 100
  },
  methods: {
    punch: function(){
      this.punchStatus-= 20;
      if(this.punchStatus==0){
        this.burst = true;
      }
    },
    restart: function(){
      this.burst=false;
      this.punchStatus = 100;
    }
  }

});

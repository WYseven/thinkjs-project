/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      this.display();
    },
    statusAction:function (){
    	this.end("status");	
    	//this.display("Home:status:s");
    }
  };
});
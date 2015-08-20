/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){

      this.display();
    },
    loginAction: function (){
        var self = this;
        //console.log(  );
          //this.end(self.isGet()); 

          if( self.isPost ){
            var userName = self.post("user");
            var password = self.post("password");
            console.log( userName );
            D("user").where({name:userName}).find().then(function (data){
               if( !data.name ){
                  D("user").add({
                    name:userName
                  });
                  self.end({isOk:false});
               }else{
                  self.end({isOk:true});
               }
            });
            
          };

         // this.end({isOk:true});
    }
  };
});
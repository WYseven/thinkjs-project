/**
 * Created by seven on 2015/8/19.
 */
module.exports = Model( function (){

    return {
    	getUserList:function (){
    		var self = this;

    		return self.select().then(function (data){
    			console.log( data );
    				return data;
    		});	
    	}
    }
} );
'use strict'

function setup (io){
	
	io.on('connection',(socket) =>{
		
		
		//socket.on('getNewDataStart', () => {
		
						   console.log(record); 
						   //socket.emit('getNewData',record);
				
		   
		   socket.on('getNewDataStop', stopCursor);
		   socket.on('disconnect', stopCursor);
		   function stopCursor () {
			   if(cursor){
				   cursor.close();
			   }}
			   socket.removeListener('getNewDataStop',stopCursor);
			   socket.removeListener('disconnect',stopCursor);
		  
	//});
		

            })}
	
// Run when client connects / disconnects
/*	io.on('connection', (socket) => {
	  console.log('a user connected');
	  socket.on('disconnect', () => {
		console.log('user disconnected');
	  });
	}); 
io.on('connection', (socket) => {
   r.db('webapp').table('readings')
   .pluck("temperature","humidity")
   .changes()("new_val")
   .run(function(err, cursor) {
    cursor.each(console.log);
	})
}); */
/*	
io.on('connection', (socket) => {
   r.db('webapp').table('readings')
   .pluck("temperature","humidity")
   .changes()("new_val")
   .run({cursor:true}, handleChange);
   function handleChange(err,cursor){
	   if(err){
		   console.log(err);
	   }
	   else{
		   if(cursor){
			   cursor.each(function(err,record){
				   if(err){
					   console.log(err);
				   }
				   else{
					   console.log(record); 
				   }
			   });
		   }
	   }
	}
	
}); */

	

module.exports = {
	setup: setup
};
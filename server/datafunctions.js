'use strict'

const plants=[
	{
	id: 1,
	type: 'Kaktusowate' ,
	species:[
	{
		nr: 11,
		name: 'Opuncja',
		temp: 'hot' ,
		hum: 'medium' ,
		soil: 'dry' ,
		ligh: 'strong' 
	},
	{
		nr: 12,
		name: 'Aloes',
		temp: 'hot' ,
		hum: 'high' ,
		soil: 'dry' ,
		ligh: 'strong' 
	},
	]},
	{
	id: 2,
	type: 'Kwitnące' ,
	species:[
		{
			nr: 14,
			name: 'Storczyk',
			temp: 25 ,
			hum: 'medium' ,
			soil: 'medium' ,
			ligh: 'medium' 
		},
		{
			nr: 15,
			name: 'Skrzydłokwiat',
			temp: 15 ,
			hum: 'low' ,
			soil: 'wet' ,
			ligh: 'low' 
		}
	]},
	{
	  id: 3,
	  type: 'Inny' ,
	  species:[
		  {
			  name: 'Inny',
			  nr: 16,
			  temp: 'medium' ,
			  hum: 'medium' ,
			  soil: 'medium' ,
			  ligh: 'medium' 
		  }
	  ]}
  ] 

const record =

{
	"datetime": "2021-09-10 12:25:38" ,
	"humidity": 10 ,
	"id": "67664640-83cf-493f-bfee-54f611e39127" ,
	"light": 2 ,
	"soil": 5 ,
	"temperature": 80
	}
	const data =[
	{
        "average": 18.75 ,
        "id": "36699f98-b0ec-443d-a63a-cd94ecc5325b" ,
        "maximum": 20 ,
        "maximumAt": "2021-09-10 12:25:38" ,
        "minimum": 10 ,
        "minimumAt": "2021-09-10 12:12:53" ,
        "parameter": "temperature"
        },
        {
        "average": 0.25 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a1e9" ,
        "maximum": 1 ,
        "maximumAt": "2021-09-09 13:46:37" ,
        "minimum": 0 ,
        "minimumAt": "2021-09-10 12:25:38" ,
        "parameter": "soil"
        },
        {
        "average": 60 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a111" ,
        "maximum": 80 ,
        "maximumAt": "2021-09-09 20:51:37" ,
        "minimum": 54 ,
        "minimumAt": "2021-09-10 12:25:38" ,
        "parameter": "humidity"
        },
        {
        "average": 50 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a111" ,
        "maximum": 95 ,
        "maximumAt": "2021-09-09 12:05:37" ,
        "minimum": 8 ,
        "minimumAt": "2021-09-10 2:25:38" ,
        "parameter": "light"
        }]

function setup (io){
	
	io.on('connection', (socket) => {
		console.log(`User Connected: ${socket.id}`);
		socket.emit('getPlants',plants);
		socket.emit('getRecord',record);
		socket.emit('getData',data);
		socket.on('disconnect', () => {
		  console.log(`User Disconnected: ${socket.id}`);
		});
	  });
}	
		

module.exports = {
	setup: setup
};
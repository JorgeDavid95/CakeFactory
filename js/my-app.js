// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'ios', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/cupones/',
    	url: 'cupones.html',
    	name: 'cupones',
  		},
		{
		path: '/blueberrycake/',
    	url: 'blueberrycake.html',
    	name: 'blueberrycake',
  		},
		{
		path: '/Chocolatycurrant/',
    	url: 'Chocolatycurrant.html',
    	name: 'Chocolatycurrant',
  		},
		{
		path: '/raspberry/',
    	url: 'raspberry.html',
    	name: 'raspberry',
  		},
		{
		path: '/lemon/',
    	url: 'lemon.html',
    	name: 'lemon',
  		},
		{
		path: '/tiramisu/',
    	url: 'tiramisu.html',
    	name: 'tiramisu',
  		},
		{
		path: '/cheesecake/',
    	url: 'cheesecake.html',
    	name: 'cheesecake',
  		},
		{
		path: '/cookies/',
    	url: 'cookies.html',
    	name: 'cookies',
  		}


	]
});

// Export selectors engine
var $$ = Dom7;





 


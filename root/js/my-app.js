var $ = Dom7;

var app = new Framework7({
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element

  // App store
  store: store,
  // App routes
 

routes : [
   {
      name: 'pokedex',
      path: '/pokedex/',
      url: 'pokedex.html',
    },
    {
      name: 'saiba',
      path: '/saiba/',
      url: 'saiba-mais.html',
    },
    {
      name: 'quem',
      path: '/quem/',
      url: 'quem.html',
    },
],
});

var mainView = app.views.create('.view-main');






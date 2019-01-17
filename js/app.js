var app = {
  bpos : [],


  init: function() {
    console.log('Show me da Gaeme');
    app.createCards();
    app.hideCards();
    $('.carte').on('click', app.showCards);
    app.bposArray();
  },
  //génère les cartes
  createCards: function() {
    var i;
    for (i = 0; i < 28; i++) {
    //les mets sur le plateau
      var carte = $('<div class="carte">');
      $('#plateau').append(carte);
    }
    //génère les enfants de carte : cache et image
    var cache = $('<div class="cache">');
    $('.carte').append(cache);
    var image = $('<div class="image">').css('background-position', '0'+ +'px');
    $('.carte').append(image);

  },
  //Cache les cartes
  hideCards: function(){
    $('.image').css('display', 'none');

  },
  //retourne la carte cliquée pendant 5 secondes
  showCards: function(){
    $(this).find('.image').css('display', 'block');
    setTimeout(app.hideCards, 1500);
  },
  bposArray: function(){
    var index = 0;
    var position = 0;
    while (index < 28) {
      app.bpos[index] = position;
      index++;
      position += 100;
      if (position === 1400){
        position = 0;
      }
    }
    console.log(app.bpos);
  }


};
$(app.init);

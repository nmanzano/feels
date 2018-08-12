$( document ).ready(function() {
  console.log('HI NONI!!');
  const config = {
    apiKey: "AIzaSyCKfCOvaD8DxFT1TXYMYF6q56FeHVGOx0k",
    authDomain: "feels-a8f40.firebaseapp.com",
    databaseURL: "https://feels-a8f40.firebaseio.com",
    projectId: "feels-a8f40",
    storageBucket: "feels-a8f40.appspot.com",
    messagingSenderId: "885724193620"
  };
  firebase.initializeApp(config);

  // get element
  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list')
  // create reference
  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('emotions')
  // const results = dbRefList.push()
  // sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3)
  });

  // synd list changes
  dbRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
  })

  dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
  })

  dbRefList.on('child_removed', snap => {
    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();
  })


  $( "#target" ).submit(function( event ) {
    dbRefList.push($('textarea').val());
    // event.preventDefault();
  });

  $('.notes').click(function() {
    $('.flip-container').css({
      "transform": "rotateY(180deg)"
    });
    $('.flipper').css({
      "transform": "rotateY(180deg)"
    });
    $('#backtext, .notes, .card').css({
      "transform": "rotateY(180deg)"
    });
  $('#backtext, .notes, .card').css({
    "transform": "rotateY(180deg)"
    });
  });

  $('.card').click(function() {
    $('.flip-container').css({
    "transform": "rotateY(360deg)"
    });
  $('.flipper').css({
    "transform": "rotateY(360deg)"
  });
  $('.notes').css({
    "transform": "rotateY(360deg)"
    });
  });

});

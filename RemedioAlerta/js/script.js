// var app = {
//     initialize: function() {
//         this.bindEvents();
//     },
    
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
    
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
    
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     }
// }
console.log("todavia no se rompió")
//Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDUHD_eS0o4ZcfFeCgt9Z9umYUuNkpcgAc",
    authDomain: "remedioalerta-c141c.firebaseapp.com",
    databaseURL: "https://remedioalerta-c141c.firebaseio.com",
    projectId: "remedioalerta-c141c",
    storageBucket: "remedioalerta-c141c.appspot.com",
    messagingSenderId: "611210223677",
    appId: "1:611210223677:web:316429a9d83174bc7bca54",
    measurementId: "G-NQEGQB2XQN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// var db = firebase.firestore();


  function toggleSignIn() {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        aparecer()
          
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
    document.getElementById('quickstart-sign-in').disabled = true;
  }
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Ingresa una cuenta de email.');
      return;
    }
    if (password.length < 4) {
      alert('Ingresa una contraseña');
      return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        aparecer()
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('La contraseña es demasiado simple.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    
} 
function aparecer(){
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla2").style.display="block";

}




var dias =''; 
var horas = '';


function validarRemedio(){
    dias=document.getElementById("dias").value;
    horas=document.getElementById("horas").value;
 if (horas.value<=0 && dias.value<=0){
     alert("Tienes que completar todos los campos.");
     return false;
    }else{
        comenzar()
    }
 }

 function comenzar(){
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="block";
}

function volver(){
  document.getElementById("pantalla1").style.display="none";
  document.getElementById("pantalla2").style.display="block";
  document.getElementById("pantalla2").style.display="none";
}
 

// document.getElementById('programar').addEventListener("click",desaparecer);

// function desaparecer(){
//   h = parseInt(document.getElementById("horas").value);
//   m = parseInt(document.getElementById("minutos").value);
//   s = parseInt(document.getElementById("segundos").value);
//   document.getElementsByClassName("form")[0].style.animationName="desaparecer";
//   document.getElementsByClassName("form")[0].style.animationDuration="0.4s";
//   document.getElementsByClassName("form")[0].style.animationIterationCount="1";
//   document.getElementsByClassName("form")[0].style.animationFillMode="forwards";
//   setTimeout(function(){document.getElementsByClassName("form")[0].style.display="none";aparecer(h,m,s)},400);
//   setInterval(function(){aparecer(h,m,s)},1000);
// }

// function aparecer(h,m,s){
//   tiempo = calcularTiempo(h,m,s);
//   horas = tiempo[0];
//   minutos = tiempo[1];
//   segundos = tiempo[2];
//   document.getElementById("h").innerHTML = horas;
//   document.getElementById("m").innerHTML = minutos;
//   document.getElementById("s").innerHTML = segundos;
//   document.getElementsByClassName("alarma")[0].style.display="block";
//   document.getElementsByClassName("alarma")[0].style.animationName="aparecer";
//   document.getElementsByClassName("alarma")[0].style.animationDuration="0.4s";
//   document.getElementsByClassName("alarma")[0].style.animationIterationCount="1";
// }


// function calcularTiempo(h,m,s){
//   tiempoActual = new Date();
//   hs = tiempoActual.getHours();
//   ms = tiempoActual.getMinutes();
//   ss = tiempoActual.getSeconds();

//   total = hs * 3600;
//   total += ms * 60;
//   total += ss;

//   horaAlarma = h * 3600;
//   horaAlarma += m * 60;
//   horaAlarma += s; 

//   if (horaAlarma > total) {
//   diferencia = horaAlarma - total;
//   } else if (horaAlarma == total) {
//   document.getElementById("audio").play();
//   setTimeout(function(){alert("¡¡¡¡despertate!!!!")},1000);
//   }

//    else {
//   diferencia = horaAlarma + 3600 * 24 - total;
//   }
//   HorasDif = Math.floor(diferencia / 3600) ;
//   MinutosDif = Math.floor((diferencia - HorasDif * 3600) / 60);
//   SegundosDif = Math.floor(diferencia - HorasDif * 3600 - MinutosDif * 60);

//   Resultado = HorasDif + ":" + MinutosDif + ":" + SegundosDif;
//   return Resultado.split(":");
// }


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
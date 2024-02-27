(function () {

    'use strict'

    const samsung = document.querySelector('#main_sponsor');
    const adidas = document.querySelector('#adidas');
    const logo = document.querySelector('#logo')

    samsung.addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });
  
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    });

    logo.addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'showing';
    });

    document.querySelector('.close1').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className = 'hidden';
    });
  
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay1').className = 'hidden';
        }
    });

    adidas.addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
    });

    document.querySelector('.close2').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
    });
  
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay2').className = 'hidden';
        }
    });

})();
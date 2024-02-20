(function(){
    'use strict';
    console.log('reading js');
    
    const myArt = document.querySelector('#madlib');
    const myForm = document.querySelector('form');
    const missing = document.querySelector('#missing');

        // myForm.style.fontSize = '20pt'
        // myArt.style.fontSize  = '30pt'
        // myForm.style.marginLeft  = '550px'
        // myArt.style.marginLeft  = '300px'
        // myForm.style.border = '3px dashed white'
        // myForm.style.marginRight = '450px'
        myForm.addEventListener ( 'submit', function(event){
        event.preventDefault();

        const Noun1 = document.querySelector('#Noun1').value;
        
        const Noun2 = document.querySelector('#Noun2').value;

        const adj = document.querySelector('#adj').value;

        const verb = document.querySelector('#verb').value;

        const food1 = document.querySelector('#food1').value;
        
        const food2 = document.querySelector('#food2').value;

        const food3 = document.querySelector('#food3').value;

        const food4 = document.querySelector('#food4').value;

        const food5 = document.querySelector('#food5').value;

        const food6 = document.querySelector('#food6').value;

        const food7 = document.querySelector('#food7').value;

        const food8 = document.querySelector('#food8').value;

        const food9 = document.querySelector('#food9').value;

        let myText;
        let missingText;

        if (Noun1 == ''){
            myText = "Please provide a noun";
            document.querySelector('#Noun1').focus();
            missing.innerHTML = missingText;
        }

        else if (Noun2 == ''){
                myText = "Please provide a noun";
                document.querySelector('#Noun2').focus();
                missing.innerHTML = missingText;
            }

         else if (adj == ''){
                myText = "Please provide an adjective";
                document.querySelector('#adj').focus();
                missing.innerHTML = missingText;
            }

         else if (verb == ''){
                myText = "Please provide a verb";
                document.querySelector('#verb').focus();
                missing.innerHTML = missingText;
            } 
            
         else if (food1 == ''){
                myText = "Please provide a food";
                document.querySelector('#food1').focus();
                missing.innerHTML = missingText;
            }
            
        else if (food2 == ''){
                myText = "Please provide a food";
                document.querySelector('#food2').focus();
                missing.innerHTML = missingText;
            }  
            
        else if (food3 == ''){
                myText = "Please provide a food";
                document.querySelector('#food3').focus();
                missing.innerHTML = missingText;
            }      

        else if (food4 == ''){
                myText = "Please provide a food";
                document.querySelector('#food4').focus();
                missing.innerHTML = missingText;
            }

        else if (food5 == ''){
                myText = "Please provide a food";
                document.querySelector('#food5').focus();
                missing.innerHTML = missingText;
            }      

         else if (food6 == ''){
                myText = "Please provide a food";
                document.querySelector('#food6').focus();
                missing.innerHTML = missingText;
            }      

         else if (food7 == ''){
                myText = "Please provide a food";
                document.querySelector('#food7').focus();
                missing.innerHTML = missingText;
            }      

         else if (food8 == ''){
                myText = "Please provide a food";
                document.querySelector('#food8').focus();
                missing.innerHTML = missingText;
            }      

         else if (food9 == ''){
                myText = "Please provide a food";
                document.querySelector('#food9').focus();
                missing.innerHTML = missingText;
            }      

        else { 
            myText = `1.Preheat Oven to ${Noun1}. <br> 
                        2.Whisk 4 ${Noun2} in a bowl before adding ${adj}ml of ${verb}. <br>
                        3.For the dry ingredients combine ${food1} as well as ${food2} alongside ${food3}. <br>
                        4. Now combine the wet and the dry ingredients before also adding ${food4}. <br>
                        5.Take out a muffin tray and grease the pans with ${food5}. <br>
                        6.Garnish with some ${food6} before putting it in the oven for ${food7}. <br>
                        7.Let cool before enjoying and sharing with your ${food8}.`; 
           
            document.querySelector('#Noun1').value = '';
            document.querySelector('#Noun2').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#food1').value = '';
            document.querySelector('#food2').value = '';
            document.querySelector('#food3').value = '';
            document.querySelector('#food4').value = '';
            document.querySelector('#food5').value = '';
            document.querySelector('#food6').value = '';
            document.querySelector('#food7').value = '';
            document.querySelector('#food8').value = '';
            document.querySelector('#food9').value = '';
            document.getElementById('overlay').className = 'showing';
            myArt.innerHTML = myText;

         }

       });
       
       document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
        myArt.innerHTML = '';
        missing.innerHTML = '';
    });
  
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
            myArt.innerHTML = '';
            missing.innerHTML = '';
        }
    });
})();
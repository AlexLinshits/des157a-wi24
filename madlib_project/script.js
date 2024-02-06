(function(){
    'use strict';
    console.log('reading js');
    
    const myArt = document.querySelector('#madlib');
    const myForm = document.querySelector('form');

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

        if (Noun1 == ''){
            myText = "Please provide a noun";
            document.querySelector('#Noun1').focus();
        }

        else if (Noun2 == ''){
                myText = "Please provide a noun";
                document.querySelector('#Noun2').focus();
            }

         else if (adj == ''){
                myText = "Please provide an adjective";
                document.querySelector('#adj').focus();
            }

         else if (verb == ''){
                myText = "Please provide a verb";
                document.querySelector('#verb').focus();
            } 
            
         else if (food1 == ''){
                myText = "Please provide a food";
                document.querySelector('#food1').focus();
            }
            
        else if (food2 == ''){
                myText = "Please provide a food";
                document.querySelector('#food2').focus();
            }  
            
        else if (food3 == ''){
                myText = "Please provide a food";
                document.querySelector('#food3').focus();
            }      

        else if (food4 == ''){
                myText = "Please provide a food";
                document.querySelector('#food4').focus();
            }

        else if (food5 == ''){
                myText = "Please provide a food";
                document.querySelector('#food5').focus();
            }      

         else if (food6 == ''){
                myText = "Please provide a food";
                document.querySelector('#food6').focus();
            }      

         else if (food7 == ''){
                myText = "Please provide a food";
                document.querySelector('#food7').focus();
            }      

         else if (food8 == ''){
                myText = "Please provide a food";
                document.querySelector('#food8').focus();
            }      

         else if (food9 == ''){
                myText = "Please provide a food";
                document.querySelector('#food9').focus();
            }      

        else { myText = `You typed the words: ${Noun1}, ${Noun2}, ${adj}, ${verb}, ${food1}, ${food2}, ${food3}, ${food4}, ${food5}, ${food6}, ${food7}, ${food8}, ${food9}`;
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

            

        }
            // if(Noun1 && Noun2 && adj && verb){

            //      myText = `You typed the words: ${Noun1}, ${Noun2}, ${adj}, and ${verb}.` ;

            // } else {
            //     const myText = "Yo, tell me some shit!"
            // }

        myArt.innerHTML = myText;

       })

       
})();




$(document).ready(function(){




  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});





  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});





  	newGame();

  	$('.new').click(function(){
  		newGame();

  	});

  	$('form').submit(function(event){
  		event.preventDefault();
  		var guess = $('#userGuess').val();
  		$('userGuess').val('');
  		if (isNaN(guess)) {
  			$('#feedback').text('Please enter a number');
  			return;
  			$('#userGuess').val('');
  		}
  		else if (guess < 0 || guess > 100){
  			$('#feedback').text('Please enter a number that is between 0 and 100');
  			return;
  			$('#userGuess').val('');
 		}
 		else if (guess%1 != 0){
 			$('#feedback').text('Please enter a whole number');
 			return;
 			$('#userGuess').val('');
 		}

 		guess = guess * 1;
 		var text = '<li>' + guess + '</li>';

 		$('#guessList').append(text);
 		guesses++;

 		$('#count').text(guesses);

 		
 		difference.push(Math.abs(guess - random));
 		    if (difference.length > 2) {
 		    	difference.shift();

 		    }
             
            if(guess == random) {
            	
            	$('#feedback').text('You GOT it! You RULE!');
            	$('#guessList').empty();
            	$('#count').text('')

            		
            }

            else if(difference.length > 1) {
            	if(Math.abs(difference[1]) > Math.abs(difference[0])){
            		$('#feedback').text('Getting colder!');
            	}

           	else if(Math.abs(difference[1]) < Math.abs(difference[0])){
            		$('#feedback').text('Getting warmer!');

            	}

            	else {
            		$('#feedback').text('Stop repeating yourself! You will get no where in life like that!');

            	}
            }

            else if(guess > random) {
            	$('#feedback').text('Hot start! Woo, Baby!');

            }
             
             else {
             	$('#feedback').text('Frigid start! Do Better!');
             }

             $('#userGuess').val('');
});



  		
});






function newRand(){
var random = Math.floor(Math.random() * 100) + 1;
   return random;

}

function newGame(){
	guesses = 0;
	difference = [];
	random = newRand();
	$('#userGuess').val('');
	$('#feedback').text('Make your Guess!');
	$('#guessList').empty();
	$('#count').text('0');
}



var difference;

var guesses;

var random;


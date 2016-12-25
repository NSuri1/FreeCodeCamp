$(document).ready(function(){
	$(".test").addClass("well");
	$(".test").html("Test");

	$(".new").on("click", function(){
		console.log("New quote requested");
		console.log(quotes[0].saying);
	});

});

var quotes = [{"saying":"Life is about making an impact, not making an income.", "person":"Kevin Kruse"},
 {"saying":"Whatever the mind of man can conceive and believe, it can achieve.", "person":"Napoleon Hill"},
 {"saying":"Strive not to be a success, but rather to be of value.", "person":"Albert Einstein"}, 
 {"saying":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "person":"Robert Frost"}, 
 {"saying":"I attribute my success to this: I never gave or took any excuse.", "person":"Florence Nightingale"},
 {"saying":"You miss 100% of the shots you don’t take.", "person":"Wayne Gretzky"}, 
 {"saying":"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", "person":"Michael Jordan"}, 
 {"saying":"The most difficult thing is the decision to act, the rest is merely tenacity.", "person":"Amelia Earhart"}, 
 {"saying":"Every strike brings me closer to the next home run.", "person":"Babe Ruth"},
 {"saying":"Definiteness of purpose is the starting point of all achievement.", "person":"W. Clement Stone"}, 
 {"saying":"Life isn't about getting and having, it's about giving and being.", "person":"Kevin Kruse"}, 
 {"saying":"Life is what happens to you while you’re busy making other plans.", "person":"John Lennon"}, 
 {"saying":"We become what we think about.", "person":"Earl Nightingale"},
 {"saying":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "person":"Mark Twain"}, 
 {"saying":"Life is 10% what happens to me and 90% of how I react to it.", "person":"Charles Swindoll"}, 
 {"saying":"The most common way people give up their power is by thinking they don’t have any.", "person":"Alice Walker"}, 
 {"saying":"The mind is everything. What you think you become.", "person":"Buddha"},
 {"saying":"The best time to plant a tree was 20 years ago. The second best time is now.", "person":"Chinese Proverb"}, 
 {"saying":"An unexamined life is not worth living.", "person":"Socrates"}, 
 {"saying":"Eighty percent of success is showing up.", "person":"Woody Allen"}, 
 {"saying":"Your time is limited, so don’t waste it living someone else’s life.", "person":"Steve Jobs"},
 {"saying":"Winning isn’t everything, but wanting to win is.", "person":"Vince Lombardi"}, 
 {"saying":"I am not a product of my circumstances. I am a product of my decisions.", "person":"Stephen Covey"}, 
 {"saying":"Every child is an artist.  The problem is how to remain an artist once he grows up.", "person":"Pablo Picasso"}, 
 {"saying":"You can never cross the ocean until you have the courage to lose sight of the shore.", "person":"Christopher Columbus"}];


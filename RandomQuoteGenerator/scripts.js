$(document).ready(function(){
	$(".saying").html("<q>" + quotes[0].saying + "</q>");
	$(".person").html('<a class= "text-color" href="' + quotes[0].wiki + '">-' + quotes[0].person + '</a>');
	$(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quotes[0].saying.split(" ").join("%20") + " -" + quotes[0].person.split(" ").join("%20"));

	$(".new").on("click", function(){
		var index = Math.floor(Math.random() * 25);
		var message = quotes[index].saying;
		var person = quotes[index].person;
		var href = "https://twitter.com/intent/tweet?text=" + message.split(" ").join("%20") + " -" + person.split(" ").join("%20");
		$(".saying").html("<q>" + message + "</q>");
		$(".person").html('<a class="text-color" href="' + quotes[index].wiki + '">-' + person + '</a>');
		$(".tweet").attr("href", href);

		var newColor = "#";
		for (k = 0; k < 3; k++) {
			//Did not put 256 so colors are not too light
		    newColor += ("0" + Math.floor(Math.random()*175).toString(16)).substr(-2);
		}

		$(".background").css("background-color", newColor);
		$(".text-color").css("color", newColor);
	});

});

var quotes = [{"saying":"Life is about making an impact, not making an income.", "person":"Kevin Kruse", "wiki":"https://en.wikipedia.org/wiki/Kevin_M._Kruse"},
 {"saying":"Whatever the mind of man can conceive and believe, it can achieve.", "person":"Napoleon Hill", "wiki":"https://en.wikipedia.org/wiki/Napoleon_Hill"},
 {"saying":"Strive not to be a success, but rather to be of value.", "person":"Albert Einstein", "wiki":"https://en.wikipedia.org/wiki/Albert_Einstein"}, 
 {"saying":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "person":"Robert Frost", "wiki":"https://en.wikipedia.org/wiki/Robert_Frost"}, 
 {"saying":"I attribute my success to this: I never gave or took any excuse.", "person":"Florence Nightingale", "wiki":"https://en.wikipedia.org/wiki/Florence_Nightingale"},
 {"saying":"You miss 100% of the shots you don’t take.", "person":"Wayne Gretzky", "wiki":"https://en.wikipedia.org/wiki/Wayne_Gretzky"}, 
 {"saying":"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", "person":"Michael Jordan", "wiki":"https://en.wikipedia.org/wiki/Michael_Jordan"}, 
 {"saying":"The most difficult thing is the decision to act, the rest is merely tenacity.", "person":"Amelia Earhart", "wiki":"https://en.wikipedia.org/wiki/Amelia_Earhart"}, 
 {"saying":"Every strike brings me closer to the next home run.", "person":"Babe Ruth", "wiki":"https://en.wikipedia.org/wiki/Babe_Ruth"},
 {"saying":"Definiteness of purpose is the starting point of all achievement.", "person":"W. Clement Stone", "wiki":"https://en.wikipedia.org/wiki/W._Clement_Stone"}, 
 {"saying":"Life isn't about getting and having, it's about giving and being.", "person":"Kevin Kruse", "wiki":"https://en.wikipedia.org/wiki/Kevin_M._Kruse"}, 
 {"saying":"Life is what happens to you while you’re busy making other plans.", "person":"John Lennon", "wiki":"https://en.wikipedia.org/wiki/John_Lennon"}, 
 {"saying":"We become what we think about.", "person":"Earl Nightingale", "wiki":"https://en.wikipedia.org/wiki/Earl_Nightingale"},
 {"saying":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "person":"Mark Twain", "wiki":"https://en.wikipedia.org/wiki/Mark_Twain"}, 
 {"saying":"Life is 10% what happens to me and 90% of how I react to it.", "person":"Charles Swindoll", "wiki":"https://en.wikipedia.org/wiki/Chuck_Swindoll"}, 
 {"saying":"The most common way people give up their power is by thinking they don't have any.", "person":"Alice Walker", "wiki":"https://en.wikipedia.org/wiki/Alice_Walker"}, 
 {"saying":"The mind is everything. What you think you become.", "person":"Buddha", "wiki":"https://en.wikipedia.org/wiki/Gautama_Buddha"},
 {"saying":"The best time to plant a tree was 20 years ago. The second best time is now.", "person":"Chinese Proverb", "wiki":"#"}, 
 {"saying":"An unexamined life is not worth living.", "person":"Socrates", "wiki":"https://en.wikipedia.org/wiki/Socrates"}, 
 {"saying":"Eighty percent of success is showing up.", "person":"Woody Allen", "wiki":"https://en.wikipedia.org/wiki/Woody_Allen"}, 
 {"saying":"Your time is limited, so don’t waste it living someone else’s life.", "person":"Steve Jobs", "wiki":"https://en.wikipedia.org/wiki/Steve_Jobs"},
 {"saying":"Winning isn’t everything, but wanting to win is.", "person":"Vince Lombardi", "wiki":"https://en.wikipedia.org/wiki/Vince_Lombardi"}, 
 {"saying":"I am not a product of my circumstances. I am a product of my decisions.", "person":"Stephen Covey", "wiki":"https://en.wikipedia.org/wiki/Stephen_Covey"}, 
 {"saying":"Every child is an artist.  The problem is how to remain an artist once he grows up.", "person":"Pablo Picasso", "wiki":"https://en.wikipedia.org/wiki/Pablo_Picasso"}, 
 {"saying":"You can never cross the ocean until you have the courage to lose sight of the shore.", "person":"Christopher Columbus", "wiki":"https://en.wikipedia.org/wiki/Christopher_Columbus"}];


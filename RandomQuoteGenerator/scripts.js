$(document).ready(function(){
	var first = Math.floor(Math.random() * 100)
	$(".saying").html("<q>" + quotes[first].saying + "</q>");
	$(".person").html('<a class= "text-color" href="' + quotes[first].wiki + '">-' + quotes[first].person + '</a>');
	$(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quotes[first].saying.split(" ").join("%20") + " -" + quotes[first].person.split(" ").join("%20"));

	$(".new").on("click", function(){
		var index = Math.floor(Math.random() * 100);
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
{"saying":"You can never cross the ocean until you have the courage to lose sight of the shore.", "person":"Christopher Columbus", "wiki":"https://en.wikipedia.org/wiki/Christopher_Columbus"},
{"saying":"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "person":"Maya Angelou", "wiki":"#"},
{"saying":"Either you run the day, or the day runs you.", "person":"Jim Rohn", "wiki":"#"},
{"saying":"Whether you think you can or you think you can’t, you’re right.", "person":"Henry Ford", "wiki":"#"},
{"saying":"The two most important days in your life are the day you are born and the day you find out why.", "person":"Mark Twain", "wiki":"#"},
{"saying":"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "person":"Johann Wolfgang von Goethe", "wiki":"#"},
{"saying":"The best revenge is massive success.", "person":"Frank Sinatra", "wiki":"#"},
{"saying":"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", "person":"Zig Ziglar", "wiki":"#"},
{"saying":"Life shrinks or expands in proportion to one’s courage.", "person":"Anais Nin", "wiki":"#"},
{"saying":"If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", "person":"Vincent Van Gogh", "wiki":"#"},
{"saying":"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "person":"Aristotle", "wiki":"#"},
{"saying":"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "person":"Jesus", "wiki":"#"},
{"saying":"The only person you are destined to become is the person you decide to be.", "person":"Ralph Waldo Emerson", "wiki":"#"},
{"saying":"Go confidently in the direction of your dreams.  Live the life you have imagined.", "person":"Henry David Thoreau", "wiki":"#"},
{"saying":"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "person":"Erma Bombeck", "wiki":"#"},
{"saying":"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. ", "person":"Booker T. Washington", "wiki":"#"},
{"saying":"Certain things catch your eye, but pursue only those that capture the heart.", "person":" Ancient Indian Proverb", "wiki":"#"},
{"saying":"Believe you can and you’re halfway there.", "person":"Theodore Roosevelt", "wiki":"#"},
{"saying":"Everything you’ve ever wanted is on the other side of fear.", "person":"George Addair", "wiki":"#"},
{"saying":"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", "person":"Plato", "wiki":"#"},
{"saying":"Teach thy tongue to say, “I do not know,” and thous shalt progress.", "person":"Maimonides", "wiki":"#"},
{"saying":"Start where you are. Use what you have.  Do what you can.", "person":"Arthur Ashe", "wiki":"#"},
{"saying":"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "person":"John Lennon", "wiki":"#"},
{"saying":"Fall seven times and stand up eight.", "person":"Japanese Proverb", "wiki":"#"},
{"saying":"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", "person":"Helen Keller", "wiki":"#"},
{"saying":"Everything has beauty, but not everyone can see.", "person":"Confucius", "wiki":"#"},
{"saying":"How wonderful it is that nobody need wait a single moment before starting to improve the world.", "person":"Anne Frank", "wiki":"#"},
{"saying":"When I let go of what I am, I become what I might be.", "person":"Lao Tzu", "wiki":"#"},
{"saying":"Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "person":"Maya Angelou", "wiki":"#"},
{"saying":"Happiness is not something readymade.  It comes from your own actions.", "person":"Dalai Lama", "wiki":"#"},
{"saying":"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", "person":"Sheryl Sandberg", "wiki":"#"},
{"saying":"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", "person":"Aristotle", "wiki":"#"},
{"saying":"If the wind will not serve, take to the oars.", "person":"Latin Proverb", "wiki":"#"},
{"saying":"You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.", "person":"Unknown", "wiki":"#"},
{"saying":"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", "person":"Marie Curie", "wiki":"#"},
{"saying":"Too many of us are not living our dreams because we are living our fears.", "person":"Les Brown", "wiki":"#"},
{"saying":"Challenges are what make life interesting and overcoming them is what makes life meaningful.", "person":"Joshua J. Marine", "wiki":"#"},
{"saying":"If you want to lift yourself up, lift up someone else.", "person":"Booker T. Washington", "wiki":"#"},
{"saying":"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", "person":"Leonardo da Vinci", "wiki":"#"},
{"saying":"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.", "person":"Jamie Paolinetti", "wiki":"#"},
{"saying":"You take your life in your own hands, and what happens? A terrible thing, no one to blame.", "person":"Erica Jong", "wiki":"#"},
{"saying":"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", "person":"Bob Dylan", "wiki":"#"},
{"saying":"I didn’t fail the test. I just found 100 ways to do it wrong.", "person":"Benjamin Franklin", "wiki":"#"},
{"saying":"In order to succeed, your desire for success should be greater than your fear of failure.", "person":"Bill Cosby", "wiki":"#"},
{"saying":"A person who never made a mistake never tried anything new.", "person":" Albert Einstein", "wiki":"#"},
{"saying":"The person who says it cannot be done should not interrupt the person who is doing it.", "person":"Chinese Proverb", "wiki":"#"},
{"saying":"There are no traffic jams along the extra mile.", "person":"Roger Staubach", "wiki":"#"},
{"saying":"It is never too late to be what you might have been.", "person":"George Eliot", "wiki":"#"},
{"saying":"You become what you believe.", "person":"Oprah Winfrey", "wiki":"#"},
{"saying":"I would rather die of passion than of boredom.", "person":"Vincent van Gogh", "wiki":"#"},
{"saying":"A truly rich man is one whose children run into his arms when his hands are empty.", "person":"Unknown", "wiki":"#"},
{"saying":"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings. ", "person":"Ann Landers", "wiki":"#"},
{"saying":"If you want your children to turn out well, spend twice as much time with them, and half as much money.", "person":"Abigail Van Buren", "wiki":"#"},
{"saying":"Build your own dreams, or someone else will hire you to build theirs.", "person":"Farrah Gray", "wiki":"#"},
{"saying":"The battles that count aren’t the ones for gold medals. The struggles within yoursel", "person":"the invisible battles inside all of us–that’s where it’s at. –Jesse Owens", "wiki":"#"},
{"saying":"Education costs money.  But then so does ignorance.", "person":"Sir Claus Moser", "wiki":"#"},
{"saying":"I have learned over the years that when one’s mind is made up, this diminishes fear.", "person":"Rosa Parks", "wiki":"#"},
{"saying":"It does not matter how slowly you go as long as you do not stop.", "person":"Confucius", "wiki":"#"},
{"saying":"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", "person":"Oprah Winfrey", "wiki":"#"},
{"saying":"Remember that not getting what you want is sometimes a wonderful stroke of luck.", "person":"Dalai Lama", "wiki":"#"},
{"saying":"You can’t use up creativity.  The more you use, the more you have.", "person":"Maya Angelou", "wiki":"#"},
{"saying":"Dream big and dare to fail.", "person":"Norman Vaughan", "wiki":"#"},
{"saying":"Our lives begin to end the day we become silent about things that matter.", "person":"Martin Luther King Jr.", "wiki":"#"},
{"saying":"Do what you can, where you are, with what you have.", "person":"Teddy Roosevelt", "wiki":"#"},
{"saying":"If you do what you’ve always done, you’ll get what you’ve always gotten.", "person":"Tony Robbins", "wiki":"#"},
{"saying":"Dreaming, after all, is a form of planning.", "person":"Gloria Steinem", "wiki":"#"},
{"saying":"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.", "person":"Mae Jemison", "wiki":"#"},
{"saying":"You may be disappointed if you fail, but you are doomed if you don’t try.", "person":"Beverly Sills", "wiki":"#"},
{"saying":"Remember no one can make you feel inferior without your consent.", "person":"Eleanor Roosevelt", "wiki":"#"},
{"saying":"Life is what we make it, always has been, always will be.", "person":"Grandma Moses", "wiki":"#"},
{"saying":"The question isn’t who is going to let me; it’s who is going to stop me.", "person":"Ayn Rand", "wiki":"#"},
{"saying":"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", "person":"Henry Ford", "wiki":"#"},
{"saying":"It’s not the years in your life that count. It’s the life in your years.", "person":"Abraham Lincoln", "wiki":"#"},
{"saying":"Change your thoughts and you change your world.", "person":"Norman Vincent Peale", "wiki":"#"},
{"saying":"Either write something worth reading or do something worth writing.", "person":"Benjamin Franklin", "wiki":"#"},
{"saying":"Nothing is impossible, the word itself says, “I’m possible!”", "person":"Audrey Hepburn", "wiki":"#"},];


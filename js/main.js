var quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    quote: "A flatterer is a friend who is your inferior, or pretends to be so.",
    author: "Aristotle"
  },
  {
    quote: "A penny saved is a penny earned.",
    author: "Benjamin Franklin"
  },
  {
    quote: "All human actions have one or more of these seven causes: chance, nature, compulsion, habit, reason, passion, and desire.",
    author: "Aristotle"
  },
  {
    quote: "All paid jobs absorb and degrade the mind.",
    author: "Aristotle"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "An investment in knowledge always pays the best interest.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Anger is never without Reason, but seldom with a good one.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Any society that would give up a little liberty to gain a little security will deserve neither and lose both.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Banking establishments are more dangerous than standing armies.",
    author: "Thomas Jefferson"
  },
  {
    quote: "Be careful when you fight the monsters, lest you become one.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Before God we are all equally wise - and equally foolish.",
    author: "Albert Einstein"
  },
  {
    quote: "Corporation, n. An ingenious device for obtaining individual profit without individual responsibility.",
    author: "Ambrose Bierce"
  },
  {
    quote: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Do not throw the arrow which will return against you.",
    author: "Kurdish Proverb"
  },
  {
    quote: "Dreams come true. Without that possibility, nature would not incite us to have them.",
    author: "John Updike"
  },
  {
    quote: "Everything has its beauty but not everyone sees it.",
    author: "Confucius"
  },
  {
    quote: "Give a man a fish and you feed him for a day. Teach a man how to fish and you feed him for a lifetime.",
    author: "Lao Tzu"
  },
  {
    quote: "God heals, and the doctor takes the fees.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self. ",
    author: "Aristotle "
  },
  {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "Oscar Wilde"
  },
  {
    quote: "I don't know who my grandfather was. I am much more concerned to know who his grandson will be. ",
    author: "Abraham Lincoln"
  },
  {
    quote: "I have no special talents. I am only passionately curious.",
    author: "Albert Einstein"
  },
  {
    quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
    author: "Albert Einstein"
  },
  {
    quote: "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
    author: "Albert Einstein"
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "Allen Saunders"
  },
  {
    quote: "If you chase two rabbits, you will lose them both.",
    author: "Native American Expression"
  },
  {
    quote: "I'm a slow walker, but I never walk back.",
    author: "Abraham Lincoln"
  },
  {
    quote: "It does not matter how slowly you go so long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "It is not the strongest of the species that survive, but the one most responsive to change.",
    author: "Charles Darwin"
  },
  {
    quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein"
  },
  {
    quote: "Love is the triumph of imagination over intelligence.",
    author: "H. L. Mencken"
  },
  {
    quote: "Meditation brings wisdom, lack of meditation leaves ignorance. Know well what leads you forward and what holds you back.",
    author: "Buddha"
  },
  {
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author: "William Shakespeare"
  },
  {
    quote: "Never trust a computer you can't throw out a window.",
    author: "Steve Wozniak"
  },
  {
    quote: "Obstacles are those frightful things you see when you take your eyes off the goal.",
    author: "Henry Ford"
  },
  {
    quote: "One doesn't discover new lands without losing sight of the shore.",
    author: "Andre Gide"
  },
  {
    quote: "Only sick music makes money today.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Only the educated are free.",
    author: "Epictetus"
  },
  {
    quote: "People can have the Model T in any color – so long as it's black.",
    author: "Henry Ford"
  },
  {
    quote: "Plausible impossibilities should be preferred to unconvincing possibilities.",
    author: "Aristotle"
  },
  {
    quote: "Politics is more difficult than physics.",
    author: "Albert Einstein"
  },
  {
    quote: "Some books are to be tasted, others to be swallowed, and some to be chewed and digested.",
    author: "Sir Francis Bacon"
  },
  {
    quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane"
  },
  {
    quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Study the past if you would define the future.",
    author: "Confucius"
  },
  {
    quote: "The Earth is the cradle of the mind, but one cannot eternally live in a cradle.",
    author: "Konstantin E. Tsiolkovsky"
  },
  {
    quote: "The life which is unexamined is not worth living.",
    author: "Socrates"
  },
  {
    quote: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius"
  },
  {
    quote: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
    author: "Carl Jung"
  },
  {
    quote: "The only thing worse than being talked about is not being talked about.",
    author: "Oscar Wilde"
  },
  {
    quote: "The things that one most wants to do are the things that are probably most worth doing.",
    author: "Winifred Holtby"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "The wisest men follow their own direction.",
    author: "Euripides"
  },
  {
    quote: "You should hammer your iron when it is glowing hot.",
    author: "Publius Syrus"
  }
];

$('#random-quote').click(function() {
  var randomQuote = Math.floor(Math.random() * 55) + 1;
  console.log(quotes[randomQuote]);
  update(quotes[randomQuote]);
});

$('#custom-quote').click(function() {
  var customQuote = {};
  customQuote.quote = $('#quote-input').val();
  customQuote.author = $('#author-input').val();
  update(customQuote, true);
});

function update(newQuote, isCustom) {
  if (newQuote.quote.length) {
    $('#quote').text(newQuote.quote);
  }
  if (newQuote.author.length) {
    $('#author').text('- ' + newQuote.author);
  } else if (!isCustom) {
    $('#author').text('- Unknown');
  }
  var Link = 'https://twitter.com/intent/tweet?hashtags=Inspiration&text=' + $('#quote').text() + ' ' + $('#author').text();
  $('#twitter-btn').attr('href', Link);
}

$('li').click(function() {
  $(this).children('.fa').toggleClass('rotated');
  $(this).next('.panel').stop().slideToggle(300);
});

$('#font-list').children().click(function() {
  $('#quote-div').css('font-family', $(this).text());
});

$('#font-size').children().click(function() {
  $('#quote-div').css('font-size', $(this).text() + 'px');
});

$('#font-color').children().click(function() {
  $('#quote-div').css('color', $(this).css('background-color'));
});

$('#bg-color').children('div').click(function() {
  $('#quote-div').css({
    'background-image': 'none',
    'background-color': $(this).css('background-color')
  });
});

$('#bg-image').children('div').click(function() {
  $('#quote-div').css('background-image', $(this).css('background-image'));
});

$('#save-img').click(function() {
  html2canvas($('#quote-div'), {
    onrendered: function(canvas) {
      var a = $('<a>').attr('href', canvas.toDataURL('image/jpeg'))
        .attr('download', 'My Quote.jpg')
        .appendTo('body');
      a[0].click();
      a.remove();
    }
  });
});

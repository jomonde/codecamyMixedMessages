// motivational quote programme by Jonan Mondejar

// array of motivational quotes
const quotes = 
    [
    "Good, better, best. Never let it rest until your good is better and your better is best.",
    "With the new day comes new strength and new thoughts.",
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "If you can dream it, you can do it."
    ];

// function to call random quote
const randomQuote = () => {
    let n = Math.floor(Math.random() * (quotes.length))
    return quotes[n];
}
// function to present quote
const giveQuote = () => {
    document.getElementById("quote").innerHTML = "Enjoy the motivation: " + randomQuote()
    // alert('Hello')
}

// testing
// console.log('Hello')

/*
<script>
const quotes = 
  [
    "Good, better, best. Never let it rest until your good is better and your better is best.",
    "With the new day comes new strength and new thoughts.",
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "If you can dream it, you can do it."
  ];
const randomQuote = () => {
  let n = Math.floor(Math.random() * (quotes.length))
  return quotes[n];
}
const giveQuote = () => {
  document.getElementById("quote").innerHTML = "Your fortune: " + randomQuote();
}
</script>
*/
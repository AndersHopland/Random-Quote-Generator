var arr = [
  "Go hard or go home", "All that anger, all that fear, use it as energy, at the gym", "It isn't the fart that kills, it's the smell", "Second place is only the first loser", "Be yourself, eeryone else is already taken", "Be the change that you wish to see in the world"
];
function randomQuote() {
  var rand = Math.floor(Math.random()*arr.length);
  document.getElementById("quote").innerHTML = arr[rand];
}

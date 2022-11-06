let text = [
  "&gt welcome @Burdin\n",
  "&gt interface show header\n",
  "&gt interface show social_network\n",
  "&gt user load infromation\n",
  "&gt interface show user-data\n",
  "&gt store reset",
];
function typeText() {
  let line = 0;
  let count = 0;
  let out = "";
  let text2 = document.querySelector(".text1");
  function typeLine() {
    let interval = setTimeout(function () {
      out += text[line][count];
      text2.innerHTML = out + "|";
      count++;
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line == text.length) {
          clearTimeout(interval);
          text2.innerHTML = out;
          return true;
        }
      }
      typeLine();
    }, 100);
  }
  typeLine();
}
typeText();

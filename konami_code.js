const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let streak = 0;
function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[streak]) {
      streak++;
      console.log(`the streak is at ${streak}`);
      if (streak === code.length) {
        alert("Snake?? SNAAAAAAKEEE!!!");
      }
    } else {
      streak = 0;
      console.log(`the streak is back to ${streak}`);
    }
  })
}



// typing things in body will log some stuff.

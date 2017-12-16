const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let streak = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[streak]) {
      streak++;
      console.log(`the streak is at ${streak}`);

      if (streak === code.length) {
        alert("Snake?? SNAAAAAAKEEE!!!");
        streak = 0;
      }
    } else {
      streak = 0;
      console.log(`the streak is back to ${streak}`);
    }
  });
}



// typing things in body will log some stuff.

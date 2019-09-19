function submitComment() {
  let inputField = document.querySelector('#name');
  let name = inputField.value;
  let checkNameCap = checkUpper(name);

  let textArea = document.querySelector('#msg');
  let msg = textArea.value;


  if (doesNotPassAllValidations(name, msg)) {
    return null;
  }


  let badWords = ["crap", "ugly", "banana", "basterddouch", "kiwi"];
  let censored = censore(msg, badWords);
  let checkMsgCap = checkUpper(censored);


  let comment = document.createElement('section');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');

  h3.textContent = `${checkNameCap} said:`
  p.textContent = `${checkMsgCap}`;


  comment.classList.add('comment');
  comment.appendChild(h3);
  comment.appendChild(p);


  let commentSection = document.querySelector('#comments')


  commentSection.appendChild(comment);

  inputField.value = null;
  textArea.value = null;


}



function doesNotPassAllValidations(name, msg) {
  if (!name && msg) {
    alert('You forgot to fill in your name');
    return true
  } else if (name && !msg) {
    alert('You forgot to fill in your comment')
    return true

  } else if (!name && !msg) {
    alert('You forgot to fill in your name and message!')
    return true

  }

  if (msg.length > 280) {
    alert('Your comment is too long')
    return true
  }

  return false
}



function checkUpper(name) {
  if (typeof name === 'string') {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return null;
}





function censore(string, filters) {
  var regex = new RegExp(filters.join("|"), "gi");
  alert("Warning: this comment has been flagged as offensive.")
  return string.replace(regex, function (match) {
    var stars = '';
    for (var i = 0; i < match.length; i++) {
      stars += '*';
    }
    return stars;
  });

}
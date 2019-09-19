function submitComment() {
  let inputField = document.querySelector('#name');
  let name = inputField.value;
  let textArea = document.querySelector('#msg');
  let msg = textArea.value;

  let comment = document.createElement('section');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');

  h3.textContent = `${name} said:`
  p.textContent = msg;


  comment.classList.add('comment');
  comment.appendChild(h3);
  comment.appendChild(p);


  let commentSection = document.querySelector('#comments')


  commentSection.appendChild(comment);

  inputField.value = null;
  textArea.value = null;
}
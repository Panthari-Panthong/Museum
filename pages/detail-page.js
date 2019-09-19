function submitComment() {
  let inputField = document.querySelector('#name');
  let name = inputField.value;
  let inputComment = document.querySelector('#msg');
  let msg = inputComment.value;

  let comment = document.createElement('section');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');

  h3.textContent = `${name} said:`
  p.textContent = msg;


  comment.classList.add('comment');
  comment.appendChild(h3);
  comment.appendChild(p);

  console.log(comment);

}
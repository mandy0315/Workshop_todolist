document.addEventListener('DOMContentLoaded',function(e) {
  const li = document.querySelectorAll('li');
  const ul = document.querySelector('ul');
  const closeSpan = document.querySelectorAll('.close');
  const Btn = document.querySelector('.addBtn');
  //  console.log(list);

  // 1
  //forEach 陣列函式，單純執行每個陣列內的物件或值
  li.forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.toggle('checked');
    })
  })
  // 2
  closeSpan.forEach((el) => {
    // console.log(cc);
    el.addEventListener('click', () => {
      el.parentNode.remove();
    })
  })
  //3
  Btn.addEventListener('click',function(e){
    let Value = e.target.previousElementSibling.value;
    const liEl = document.createElement('li');
    liEl.textContent = Value;
    console.log(typeof(Value));


    liEl.addEventListener('click',function(e) {
      e.target.classList.toggle('checked');
    });

    const spanEl = document.createElement('span');
    spanEl.innerHTML = '<span class="close">x</span>';
    spanEl.addEventListener('click',function(e) {
      liEl.remove();
    });
    // console.log(span);
    ul.insertAdjacentElement('beforeend',liEl).appendChild(spanEl);

  })
  getItem
  
})

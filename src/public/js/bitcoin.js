let btnArray = [0, 0, 0];

function setBtnValueUp(num) {
  let btn = document.getElementById(`cde${num}`);
  btn.value = ++btnArray[num];
}

function setBtnValueDown(num) {
  let btn = document.getElementById(`cde${num}`);
  if (btn.value > 1)
    btn.value = --btnArray[num];
}

function putLarge(count, num) {
  axios.put('/bitcoin', {count})
    .then(response => {
      let btn = document.getElementById(`cde${num}`);
      btn.value = response.data;
      console.log('body:', response.data);
    });
}

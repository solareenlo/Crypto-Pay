let count = 0, addnum = 1;
let btnArray = [1, 1, 1];
const data = { firstName : 'Taro', lastName : 'Yamada' };
const num = 1;
// axios.post('/bitcoin', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

window.onload = function() {
  for (let i = 0; i < btnArray.length; i++) {
    setBtnValueUp(i);
    setBtnValueDown(i);
  }
  document.getElementById('button1').addEventListener('click', function () {
    this.textContent = count;
    count = count + addnum;
    addnum = (count >= 5 || count <= 0) ? (addnum = -1 * addnum) : addnum;
  }, false);
};

function setBtnValueUp(num) {
  let btn = document.getElementById(`cde${num}`);
  btn.value = ++btnArray[num];
  axios.get('/bitcoin')
      .then(response => {
      console.log('status:', response.status); // 200
  }).catch(err => {
      console.log('err:', err);
  });
  axios.post('/bitcoin', data)
    .then(response => {
      name = response.data;
      console.log('body:', response.data);
    });
}

function setBtnValueDown(num) {
  let btn = document.getElementById(`cde${num}`);
  if (btn.value > 1)
    btn.value = --btnArray[num];
}

// function CountUp(num) {
//   document.getElementById(`cde${num}`).innerHTML = ++btnArray[num];
// }

function getStatus() {
  axios.get('/bitcoin')
      .then(response => {
      console.log('status:', response.status); // 200
    }).catch(err => {
      console.log('err:', err);
    });
}

function postData() {
  axios.post('/bitcoin', data)
    .then(response => {
      console.log('body:', response.data);
    });
}

function putLarge(count) {
  axios.put('/bitcoin', {count})
    .then(response => {
      console.log('body:', response.data);
    });
}

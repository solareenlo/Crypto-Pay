function putPizzaCount(count, size) {
  axios.put('/bitcoin', {data: {count, size}})
    .then(response => {
      let btn = document.getElementById(`cde${size}`);
      btn.value = response.data.count;
      console.log('body:', response.data);
      document.getElementById(`target${size}`).src = response.data.address;
    })
    .catch(error => {
      console.log(error);
    });
}

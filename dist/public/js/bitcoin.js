function putPizzaCount(count, size) {
  axios.put('/bitcoin', {data: {count, size}})
    .then(response => {
      let btn = document.getElementById(`cde${size}`);
      btn.value = response.data;
      console.log('body:', response.data);
    });
}

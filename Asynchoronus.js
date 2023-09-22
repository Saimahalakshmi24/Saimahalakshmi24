function fetchData() {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'This is the fetched data';
      console.log(data)
      resolve(data);
    }, 1000);
  });
}


function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = data.toUpperCase();
      resolve(processedData);
    }, 1000);
  });
}

fetchData()
  .then((data) => processData(data))
  .then((processedData) => {
    console.log('Processed Data:', processedData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
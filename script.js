const form = document.querySelector('form');

const button = document.querySelector('button');

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)){
     results.innerHTML = `Please give a valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
       } else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
      results.innerHTML = `<span>${bmi}</span>`;
    }
   
})

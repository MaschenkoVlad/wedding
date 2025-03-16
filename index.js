document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const guestFullName = document.getElementById('guest').value;
    const guestCoupleFullName = document.getElementById('guest-couple').value;       
    
    const radios = document.getElementsByName('visit');

    let attend = 'no';
    for (var radio of radios) {
        if (radio.checked) {
            attend = radio.value;
        }
    }  

    const formUrl = 'https://docs.google.com/forms/u/0/d/1bL0IgrQaSQEbTmsKTKXLC3ENm-WoeVqlQiGGdLlR20c/previewResponse';
    const data = new FormData();
    data.append('entry.1533925188', attend);
    data.append('entry.58696487', guestFullName);
    data.append('entry.229057109', guestCoupleFullName);

    console.log("????", data);
    
    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: data
    })
    .then(() => {
      alert('Form submitted successfully!');
      document.getElementById('form').reset();
    })
    .catch(error => console.error('Error:', error));
  });
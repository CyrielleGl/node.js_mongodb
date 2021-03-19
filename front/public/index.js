function createAnnonce() {
    // Supprime l'événement par defaut du bouton
    // event.preventDefault();
  
    fetch('http://localhost:3000/annonce', {
      method: 'post',
      body: JSON.stringify({
        titre: document.getElementById('titre').value,
        description: document.getElementById('description').value,
        adresse: document.getElementById('adresse').value,
        code_postal: parseInt(document.getElementById('code_postal').value),
        ville: document.getElementById('ville').value,
        prix: parseInt(document.getElementById('prix').value)
      }),
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
  }

  function updateAnnonce(id) {
    fetch(`http://localhost:3000/annonce/${id}`, {
      method: 'put',
      body: JSON.stringify({
        titre: document.getElementById('titre').value,
        description: document.getElementById('description').value,
        adresse: document.getElementById('adresse').value,
        code_postal: parseInt(document.getElementById('code_postal').value),
        ville: document.getElementById('ville').value,
        prix: parseInt(document.getElementById('prix').value)
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      window.location = 'http://localhost:4000/annonces';
    })
    .catch((err) => console.error(err));
  }
  
  function deleteAnnonce(id) {
    fetch(`http://localhost:3000/annonce/${id}`, {
      method: 'delete',
    })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
  }
  
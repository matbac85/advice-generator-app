// Fonction pour récupérer un conseil de l'API
function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      // Mettre à jour le conseil dans l'élément HTML
      document.getElementById("advice").textContent = `"${data.slip.advice}"`;
      document.getElementById("advice-number").textContent = data.slip.id;
    })
    .catch((error) => {
      console.log(
        "Une erreur s'est produite lors de la récupération du conseil : ",
        error
      );
    });
}

// Gérer le clic sur le bouton
document.getElementById("button").addEventListener("click", fetchAdvice);

// Appeler fetchAdvice une première fois pour afficher un conseil initial lors du chargement de la page
fetchAdvice();

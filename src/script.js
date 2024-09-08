const clientSearch = document.getElementById('inputClient')
const btnSearch = document.getElementById('btnSearch')
const photo = document.getElementById('photo')
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
const tel = document.getElementById('telephone')
const fonction = document.getElementById('fonction')
const montantTotal = document.getElementById('montantTotal')
const montantVerse = document.getElementById('montantVerse')
const montantRestant = document.getElementById('montantRestant')


document.addEventListener('DOMContentLoaded', async function() {
    fetch('http://localhost:8200/clients')
    .then(response => response.json())
        .then(clients =>  {
            btnSearch.addEventListener('click', async function() {
            
                const telval = clientSearch.value;
                const client = clients.find(client => client.telephone === telval);
                
                
                if (client) {
                    photo.src = client.photo;
                    prenom.textContent = client.prenom;
                    nom.textContent = client.nom;
                    telephone.textContent = client.telephone;
                    fonction.textContent = client.fonction;

                    const totalDettes = client.dettes.reduce((total, dette) => total + dette.montant, 0);
                    const totalVerse = client.dettes.reduce((total, dette) => total + dette.verse, 0);
                    const totalDu = totalDettes - totalVerse;

                    montantTotal.textContent = totalDettes;
                    montantVerse.textContent = totalVerse;
                    montantRestant.textContent = totalDu;
                
                }
                else {
                    alert("Client non trouvé");
                }
            })
        })
        
})

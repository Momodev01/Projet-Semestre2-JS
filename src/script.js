const clientSearch = document.getElementById('inputClient')
const btnSearch = document.getElementById('btnSearch')
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
const tel = document.getElementById('telephone')
const fonction = document.getElementById('fonction')
let clients = []


document.addEventListener('DOMContentLoaded', async function() {
    fetch('http://localhost:8200/clients')
    .then(response => response.json())
        .then(data =>  {
            console.log(data); 
            clients = data
            console.log("zerty");

            console.log(clients);

        })
        console.log(clients);
        
        btnSearch.addEventListener('click', async function() {
            
            const telval = tel.value;
                    const client = clients.find(client => client.telephone === telval);
                    console.log(client);
                    
                    if (client) {
                        // sessionStorage.setItem('client', JSON.stringify(client))
                        prenom.textContent = client.prenom;
                        nom.textContent = client.nom;
                        telephone.textContent = client.telephone;
                        fonction.textContent = client.fonction;
                    }
                    else {
                        alert("Client non trouvé");
                    }
        })
})

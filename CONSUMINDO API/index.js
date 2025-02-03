function Procurar() {
     let pais = document.getElementById('pais').value
     let finalURL = 'https://restcountries.com/v3.1/name/${pais}?fullText=true'
     console.log(finalURL)
     fetch(finalURL)
         .then(function (response) {
             return response.json()
         }
         )
         .then(function (data) {
         console.log(data[0])
         console.log(data[0].population)
         console.log(data[0].capital[0])
         console.log(data[0].continents[0])
 
         let bandeira = document.getElementsById('bandeira')
         let nome = document.getElementsById('nome')
         let capital = document.getElementsById('Capital')
         let pop = document.getElementsById('Populacao')
         let cont = document.getElementsById('Continete')

         nome.innerHTML= data [0].Capital[0]
         Cont.innerHTML= data [0].Continente[0]
         Pop.innerHTML= data [0].Populacao
         nome.innerHTML= data [0].capital[0]
         bandeira.src= data [0].flags.svg 

 
 
     }
     )
     }
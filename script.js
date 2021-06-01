const url = 'http://localhost:3000/notes'
const noteInput = document.querySelector('#notepad')
const output = document.querySelector('#output')
{
    function getNotes () {
    fetch (url), 
        .then ((response) => data.json()) 
        .then; document.createElement('p').innerHTML = data.json + output.appendChild (output =>
    }

        for (let d of data)

        {
        let title = document.createElement('p')
        title.innerHTML = "Title" + output ;
        Title.appendChild(title)
        }
        {
        let body = document.createElement('p');
        body.innerHtml = "Body:" + x.body
        output.appendChild(body)
        }

        document.getElementById("submit").addEventListener("click", event => {
            event.preventDefault()
            getNotes()
        })
    }


    
    
    
    
    
    
    
    
    
    
    
    {
        method: 'POST', 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({"title": "Hi", "body": "COOL"})
      })
      .then(r => r.json())
      .then(console.log (r.json)) ;
    }
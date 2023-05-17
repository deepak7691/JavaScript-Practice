const api = 'https://my-json-server.typicode.com/FreSauce/json-ipl/data'

fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.sort((a, b) => a.NRR - b.NRR)
        console.log(data)
        const tableBody = document.getElementById("tableBody")
        data.map(team => {
            const tr = document.createElement("tr")
            tr.innerHTML = `
            <td>${team.No}</td>
            <td>${team.Team}</td>
            <td>${team.Matches}</td>
            <td>${team.Won}</td>
            <td>${team.Lost}</td>
            <td>${team.Tied}</td>
            <td>${team.NRR}</td>
            <td>${team.Points}</td>
          `;

            tableBody.appendChild(tr);

        })
    })
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
            <td style="border: 1px solid black; text-align: center">${team.No}</td>
            <td style="border: 1px solid black; text-align: center">${team.Team}</td>
            <td style="border: 1px solid black; text-align: center">${team.Matches}</td>
            <td style="border: 1px solid black; text-align: center">${team.Won}</td>
            <td style="border: 1px solid black; text-align: center">${team.Lost}</td>
            <td style="border: 1px solid black; text-align: center">${team.Tied}</td>
            <td style="border: 1px solid black; text-align: center">${team.NRR}</td>
            <td style="border: 1px solid black; text-align: center">${team.Points}</td>
          `;

            tableBody.appendChild(tr);

        })
    })
// Sample player data
const players = [
    { name: "Joel Embiid", team: "PHI", points: 33, rebounds: 10.8, assists: 5.7 },
    { name: "Jalen Brunson", team: "NYK", points: 32.4, rebounds: 3.3, assists: 7.5 },
    { name: "Shai Gilgeous-Alexander", team: "OKC", points: 30.2, rebounds: 7.2, assists: 6.4 },
    { name: "Tyrese Maxey", team: "PHI", points: 29.8, rebounds: 5.2, assists: 6.8 },
    { name: "Donovan Mitchell", team: "CLE", points: 29.6, rebounds: 5.4, assists: 4.7 },
  ];
  
  // Function to render the player table
  function renderTable(data) {
    const tableBody = document.getElementById("playerTable");
    tableBody.innerHTML = ""; // Clear previous table rows
  
    data.forEach(player => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${player.name}</td>
        <td>${player.team}</td>
        <td>${player.points}</td>
        <td>${player.rebounds}</td>
        <td>${player.assists}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Initial render
  renderTable(players);
  
  // Search functionality
  document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm)
    );
    renderTable(filteredPlayers);
  });
  
  // Team filter functionality
  document.getElementById("teamFilter").addEventListener("change", (e) => {
    const team = e.target.value;
    const filteredPlayers = team === "All"
      ? players
      : players.filter(player => player.team === team);
    renderTable(filteredPlayers);
  });
  
  // Toggle dark mode
  document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
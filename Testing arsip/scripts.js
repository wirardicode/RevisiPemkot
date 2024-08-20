document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const itemsTableBody = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];

    // Fetch data from the API
    async function fetchItems() {
        try {
            const response = await fetch('http://localhost:8000/items/');
            const data = await response.json();
            displayItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    }

    // Display items in the table
    function displayItems(items) {
        itemsTableBody.innerHTML = '';
        items.forEach(item => {
            const row = itemsTableBody.insertRow();
            const nameCell = row.insertCell(0);
            const detailCell = row.insertCell(1);
            
            nameCell.innerText = item.name;
            
            const detailButton = document.createElement('button');
            detailButton.innerText = 'Detail';
            detailButton.addEventListener('click', () => {
                // Handle detail button click
                alert(`Details for ${item.name}`);
            });
            detailCell.appendChild(detailButton);
        });
    }

    // Search items
    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        const rows = itemsTableBody.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            const nameCell = rows[i].getElementsByTagName('td')[0];
            const name = nameCell ? nameCell.innerText.toLowerCase() : '';
            rows[i].style.display = name.includes(filter) ? '' : 'none';
        }
    });

    // Initialize
    fetchItems();
});

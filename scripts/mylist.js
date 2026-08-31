function clearMyList() {
    localStorage.removeItem('myList');
    displayMyList();
}
function displayMyList() {
    const myList = JSON.parse(localStorage.getItem('myList')) || [];
    const tableBody = document.getElementById('movieListTableBody');
    tableBody.innerHTML = myList.length
        > 0 ? myList.map((title, index) => `<tr><td>${index + 1}
            </td><td>${title}</td></tr>`).join('')
        : '<tr><td colspan="2">My List is empty.</td></tr>';
}
displayMyList();
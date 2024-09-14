let currentPage = 1;

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < 5) {
        document.getElementById(`imgPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`txtPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`imgPage${currentPage + 1}`).style.transform = 'rotateY(0)';
        document.getElementById(`txtPage${currentPage + 1}`).style.transform = 'rotateY(0)';
        currentPage++;
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        document.getElementById(`imgPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`txtPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`imgPage${currentPage - 1}`).style.transform = 'rotateY(0)';
        document.getElementById(`txtPage${currentPage - 1}`).style.transform = 'rotateY(0)';
        currentPage--;
    }
});


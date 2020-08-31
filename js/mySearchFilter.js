function mySearchFilter() {

    const search = document.querySelector('input').value;
    const pic = document.querySelectorAll('a');

    for (let i = 0; i < pic.length; i++) {
        
        // Checks if the title of all <a> tags contains the same characters in the searchbar.
        if (pic[i].title.toLowerCase().includes(search.toLowerCase()) ) {
            pic[i].style.display = '';
        } else {
            pic[i].style.display = 'none';
        }
    }
}
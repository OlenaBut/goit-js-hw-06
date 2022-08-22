const catEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, catEl.length);

catEl.forEach(elem => {
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);
});
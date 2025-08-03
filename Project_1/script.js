const boxes = document.querySelectorAll('.box');
const body  = document.querySelector('body');
console.log(boxes);
boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        console.log(e)
        console.log("Boxes clicked", e.target);
        body.style.backgroundColor = e.target.id;
    });
});


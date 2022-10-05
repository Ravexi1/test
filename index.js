const oknoOne = document.querySelector('.nav-link active');

const oknoTwo = document.querySelector('.nav-link');

let oknoOneClicked = true;
let oknoTwoClicked = false;

if (oknoTwoClicked == false) {
    oknoTwo.addEventListener('click', () => {

        oknoOneClicked = false;
        oknoTwoClicked = true;
        
        oknoTwoClicked.classList.remove('nav-link');
        oknoTwoClicked.classList.add('.nav-link active');

        oknoOneClicked.classList.remove('.nav-link active');
        oknoOneClicked.classList.add('nav-link');

    });
}
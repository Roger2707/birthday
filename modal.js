const items = document.querySelectorAll('.modal_body-item');
let char = 0;

const itemTexts = [
    "Sinh nhật vui vẻ nè !",
    "Tuổi 18 ♉ chúc em: ",
    "🎂 Mỗi ngày đều vui như ngày sinh nhật",
    "🌟 Đậu Đại học mà em mong muốn",
    "🏸 Và đánh cầu ngày càng hay nha 😁",
]

let dem = 0;
const textWrite = () => {
    if(dem > items.length - 1) return;
    if(itemTexts[dem].length -1 >= char ) {
        items[dem].style.opacity = 1;
        items[dem].style.transition = "all 0.5s ease";

        items[dem].textContent += itemTexts[dem].charAt(char);
        //console.log(itemTexts[dem].charAt(char));
        char ++;
        setTimeout(textWrite, 250)
    } else {
        dem ++;
        char = 0;
    }
}

const content = document.querySelector('.content')
const openCard = document.getElementById('btn-openCard');
const closeCard = document.getElementById('closeCard');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');
const modalContentContainer = document.querySelector('.modal__content-container');
const modalOutSide = document.querySelector('.modal__content-outside');
const modalOutSideBody = document.querySelector('.modal-outside-body');

btnCock.addEventListener('click', function() {
    overlay.classList.add('active');
    modal.classList.add('active');
    content.style.webkitFilter = "blur(10px)";
})

openCard.addEventListener('click', function() {
    modalOutSideBody.style.display = 'none'
    modalContentContainer.classList.add('active');
    modalOutSide.classList.add('active');
    setTimeout(() => {
        for(let i = 0; i < itemTexts.length; i++) {
            textWrite();
        }
    }, 3000)
});

closeCard.addEventListener('click', function() {
    modalContentContainer.classList.remove('active');
    modalOutSide.classList.remove('active');
    setTimeout(() => {
        modalOutSideBody.style.display = 'block';
    }, 250)
})


closeBtn.addEventListener('click', function() {
    content.style.webkitFilter = "blur(0px)";
    overlay.classList.remove('active');
    modal.classList.remove('active');
});


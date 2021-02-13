const ToggleBtn = document.querySelector('.navbar--toggle')
const ToggleMenu = document.querySelector('.navbar--bottom')
// const ToogleIcon = document.querySelector('.navbar--toggle > img')

// const AdvertBlock = document.querySelector('.advertisment--block')
// const AdvertBtn = document.querySelector('.close--advertisment')

ToggleBtn.addEventListener('click',()=>{
    ToggleMenu.classList.toggle('active--menu')
})

// AdvertBtn.addEventListener('click', ()=>{
//     AdvertBlock.sty
// })
document.querySelector('.nav-mb-btn').onclick = () => {
    document.querySelector('.nav-mobile ul').classList.toggle('active')
}

window.onscroll = () => {
    if(window.scrollY > 500){
        document.querySelector('.btn-group').classList.add('active')
    } else{
        document.querySelector('.btn-group').classList.remove('active')

    }
}

document.querySelector('.top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
}
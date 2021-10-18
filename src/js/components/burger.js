export function burger(){
  const burgerTriger = document.querySelector(".burger")
  const burgerMenu = document.querySelector(".burgerMenu")
  const navButtons = document.querySelectorAll("[data-buttonTo]")

  const closeMenu = () => {
    burgerTriger.classList.remove("active")
    burgerMenu.classList.remove("active")
    document.body.style.overflow = "auto"
  }

  const classToggle = () => {
    if(burgerTriger.classList.contains("active") === burgerMenu.classList.contains("active")){
      burgerTriger.classList.toggle("active")
      burgerMenu.classList.toggle("active")
      if(burgerTriger.classList.contains("active")){
        document.body.style.overflow = "hidden"
      }else{
        document.body.style.overflow = "auto"
      }
    }else{
      closeMenu()
    }  
  }

  burgerTriger.addEventListener("click", classToggle)
  navButtons.forEach(btn => {
    btn.addEventListener("click", closeMenu)
  })
}
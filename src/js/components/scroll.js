export function scroll(){
  const navsMenu = document.querySelectorAll(".menu")
  const homePlace = document.querySelector(".labelSection")
  const portfolioPlace = document.querySelector(".portfolio")
  const aboutPlace = document.querySelector(".aboutUs")
  const contactPlace = document.querySelector(".contactUs") 

  const scrollFunc = (event) => {
    const {target} = event
    switch(target.getAttribute("data-buttonTo")){
      case "home": homePlace.scrollIntoView({behavior: "smooth"})
        break
      case "portfolio": portfolioPlace.scrollIntoView({behavior: "smooth"})
        break
      case "about": aboutPlace.scrollIntoView({behavior: "smooth"})
        break
      case "contact": contactPlace.scrollIntoView({behavior: "smooth"})
    }
  }
  navsMenu.forEach(menu => {
    menu.addEventListener("click", scrollFunc)
  })
}
export function sortPortfolio(){
  const sortBtnsPlace = document.querySelector(".sortButtons")
  const sortBtns = document.querySelectorAll(".sortButton")
  const portfItems = document.querySelectorAll("[data-portfType]")
  
  const sort = (event) => {
    const {target} = event
    const attributeValue = target.getAttribute("data-sortPorf")
    portfItems.forEach(item => {
      switch(attributeValue){
        case "all": item.style.display = "block"
          break
        case item.getAttribute("data-portfType"):  item.style.display = "block"
          break
        default : item.style.display = "none"

      }
    })
    sortBtns.forEach(btn => {
      btn.classList.remove("active")
      if(btn === target){
        target.classList.add("active")
      }
    })
    
  }
  
  sortBtnsPlace.addEventListener("click", sort)
}
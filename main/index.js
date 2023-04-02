const plus = document.querySelector('.plus')
const number = document.querySelector('.number')
const mines = document.querySelector('.mines')

let item = 0

plus.addEventListener('click',(e)=>{
        item++
        number.innerHTML = item
      
})


mines.addEventListener('click',(e)=>{
    if(item=== 0) return
    item--
    number.innerHTML = item
  
})
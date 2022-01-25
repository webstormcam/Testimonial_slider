let pic = document.getElementById('person')
let left = document.getElementById('back')
let right = document.getElementById('forth')

right.addEventListener('click',function(){
    pic.src ='imgs/image-john.jpg'
})

left.addEventListener('click',function(){
    pic.src ='imgs/image-tanya.jpg'
})


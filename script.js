let pic = document.getElementById('person')
let left = document.getElementById('back')
let right = document.getElementById('forth')
let quote = document.getElementById('quote')
let names = document.getElementById('name')
let role = document.getElementById('role')

right.addEventListener('click',function(){
    pic.src ='imgs/image-john.jpg'
    quote.innerHTML=`“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`;
    names.innerHTML=`John Tarkpor`
    role.innerHTML =`Junior Front-end Developer`
})

left.addEventListener('click',function(){
    pic.src ='imgs/image-tanya.jpg'
    quote.innerHTML=`“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
    names.innerHTML=`Tanya Sinclair`
    role.innerHTML=`UX Engineer`
})


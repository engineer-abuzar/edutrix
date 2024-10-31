let mycourse=document.querySelector('.box-items');
let students=document.getElementsByClassName('box-items')[1]
let file=document.getElementsByClassName('homepage-item')[1];
let add_btn=document.querySelector('.add-btn')
let result
let data
mycourse.addEventListener('click',()=>{



const url='http://localhost:3000/login/teacher/mycourses';
(async function(){
     result=await fetch(url);
     data=await result.text();
file.innerHTML=data;
add_btn.style.display='inline-block'

})()

})
students.addEventListener('click',()=>{
     add_btn.style.display='none'
     const url='http://localhost:3000/login/teacher/students';
     (async function(){
           result=await fetch(url);
          data=await result.text();
          file.innerHTML=data;
     })()
})
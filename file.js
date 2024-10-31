const add_section=document.querySelector('.add-section-button');
const section_container=document.querySelector('.section-container')

//creating section
//first box
const new_sec=document.createElement('div')
new_sec.className='section'
const new_span=document.createElement('span')
new_span.className='para';
const input=document.createElement('input')
input.className='new-section-input'
const add_button=document.createElement('button')
add_button.classList.add('button','button2')
const cancel_button=document.createElement('button')
cancel_button.classList.add('button','button1')
const add_curriculam=document.createElement('button')
add_curriculam.innerHTML='Add Curriculam'
add_curriculam.className='add-curriculam'

//final box
const sub_sec=document.createElement('div')
sub_sec.className='sub-section'
const curriculam=document.createElement('div')
curriculam.className='curriculam'
const new_span_lecture=document.createElement('span')
new_span_lecture.innerHTML='New Lecture: '
const input_lecture=document.createElement('input')
input_lecture.setAttribute('type','text')
const add_lecture=document.createElement('button')
add_lecture.classList.add('button','button2')
add_lecture.innerHTML='Add Lecture'
const cancel_lecture=document.createElement('button')
cancel_lecture.classList.add('button','button1')
cancel_lecture.innerHTML='Cancel'
cancel_lecture.style.marginLeft='57vh';

//writing string on elements
new_span.innerHTML='New Section: '
add_button.innerHTML='Add Section'
cancel_button.innerHTML='Cancel'

add_section.addEventListener('click',()=>{
    
section_container.appendChild(new_sec)
new_sec.appendChild(new_span)
new_sec.appendChild(input)

new_sec.appendChild(cancel_button)
new_sec.appendChild(add_button)

})
add_button.addEventListener('click',()=>{
new_span.innerHTML=`Section: ${input.value}`;
new_sec.removeChild(input)

new_sec.removeChild(cancel_button)
new_sec.removeChild(add_button)
new_sec.appendChild(add_curriculam)

})
cancel_button.addEventListener('click',()=>{
    section_container.removeChild(new_sec)
})
add_curriculam.addEventListener('click',(e)=>{
    
    new_sec.removeChild(add_curriculam)
    new_sec.appendChild(sub_sec)
    sub_sec.appendChild(curriculam)
    curriculam.appendChild(new_span_lecture)
    curriculam.appendChild(input_lecture)
    curriculam.appendChild(cancel_lecture)
    curriculam.appendChild(add_lecture)

})
add_lecture.addEventListener('click',()=>{

})
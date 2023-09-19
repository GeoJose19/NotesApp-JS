let container=document.querySelector('.container')
let createBtn=document.querySelector('.createBtn')
let contentDiv=document.querySelector('.content-div')

createBtn.addEventListener('click',()=>{
    let note=document.createElement('p')
    let cross=document.createElement('h3')
    note.className='input-box'
    note.setAttribute('contenteditable','true')
    cross.className='delete'
    cross.innerHTML='&#10060'
    contentDiv.appendChild(note).appendChild(cross)
})

contentDiv.addEventListener('click',function(e){
    if(e.target.tagName=="H3"){
        e.target.parentElement.remove()
    }
},false)





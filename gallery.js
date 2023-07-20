const body = document.getElementById('body')

const modal=document.querySelector('.modal')

const images = document.querySelectorAll('.galleryImg')
console.log (images)

const arrImages = Array.from(images)



arrImages.map((image)=>image.addEventListener ('click',onClick))

modal.addEventListener('click',closeModal)

function onClick(e) {
    const src =e.target.src;
   
    openmodal(src)
}

    function openmodal(src){
        modal.style.display='flex'
        const modalImage = document.createElement('img')
        body.className = 'overflow-hidden';
        modalImage.src=src
        modalImage.className = 'modal-image'
        modal.append(modalImage)
        
    }

function closeModal() {
   const modalImage=document.querySelector('.modal-image')
   console.log(modalImage)
    modal.style.display='none'
    body.className= 'none'
    modal.removeChild(modalImage)
    
}
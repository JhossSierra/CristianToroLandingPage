const body = document.getElementById('body')

const modal=document.querySelector('.modal')

const images = document.querySelectorAll('.vCenter img')


const arrImages = Array.from(images)



arrImages.map((image)=>image.addEventListener ('click',onClick))

modal.addEventListener('click',closeModal)

function onClick(e) {
    const src =e.target.src;
    const srcArray=src.split('/')
    console.log(srcArray)
    const newsrcArray= [srcArray[0],srcArray[1],srcArray[2],srcArray[3],srcArray[4],'HQ',srcArray[5]]
    /* const newsrcArray= [srcArray[0],srcArray[1],srcArray[2],srcArray[3],'HQ',srcArray[4]] */
    
    const newsrc= newsrcArray.join('/')
    console.log(newsrc)
    openmodal(newsrc)
}

    function openmodal(src){
        const modalImage = document.createElement('img')
        modalImage.src=src
        body.className = 'overflow-hidden';
        modal.style.display='flex'
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
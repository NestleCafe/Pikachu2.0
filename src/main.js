let faceLeft = document.querySelector('.face.left')
let faceRight = document.querySelector('.face.right')
let caution = document.querySelector('.caution')
let lightningLeft = document.querySelector('.face.left img')
let lightningRight = document.querySelector('.face.right img')
let eyebrowLeft = document.querySelector('.eyebrow.left')
let eyebrowRight = document.querySelector('.eyebrow.right')
let mouthChange = document.querySelector('.mouth .bottom')

let eventMouseOver = () =>{
    caution.style.display = 'block'
    lightningRight.style.display = 'block'
    lightningLeft.style.display = 'block'
    eyebrowLeft.style.display = 'block'
    eyebrowRight.style.display = 'block'
    mouthChange.style.height = '160px'
}
let eventMouseOut = () => {
    caution.style.display = 'none'
    lightningRight.style.display = 'none'
    lightningLeft.style.display = 'none'
    eyebrowLeft.style.display = 'none'
    eyebrowRight.style.display = 'none'
    mouthChange.style.height = '180px'
}
faceLeft.onmouseover = ()=>{
    eventMouseOver()
}
faceLeft.onmouseout = ()=>{
    eventMouseOut()
}

faceRight.onmouseover = ()=>{
    eventMouseOver()
}

faceRight.onmouseout = ()=>{
    eventMouseOut()
}
let heading = document.querySelector('h1');
// alert('Time to study')
// document.querySelector('img').onclick = () => alert('明天就去你家')

let image = document.querySelector('img')

image.onclick = () => {
    let mySrc = image.getAttribute('src')
    if (mySrc === 'images/hacker.jpg') {
        image.setAttribute('src', 'images/firefox.svg')
    } else {
        image.setAttribute('src', 'images/hacker.jpg')
    }
}

let myButton = document.querySelector('button')
function setUserName() {
    let myName = prompt('请输入你的名字。')
    if (myName && myName !== null) {
        localStorage.setItem('name', myName)
        heading.textContent = `Mozilla 酷毙了，${myName}`
    }
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    heading.textContent = `Mozilla 酷毙了，${storedName}`
}

myButton.onclick = () => {
    setUserName()
}
import string from './string'

const player = {
    //初始化方法
    id: undefined,
    timeSpan: 100,
    n: 1,
    ui: {
        textBox: document.querySelector('#textBox'),
        effect: document.querySelector('#effect')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow':  'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnEnd': 'end',
        '#btnAgain': 'reload',
    },
    init:()=>{
        player.ui.textBox.innerText = string.substring(0, player.n)
        player.ui.effect.innerHTML = string.substring(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () =>{
          for(let key in player.events){
              if(player.events.hasOwnProperty(key)){    //不要遍历继承属性，遍历自身属性
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
              }
            }
    },
    run: () => {
        player.n += 1
        if(player.n > string.length){
            window.clearInterval(player.id)
        }
        player.ui.textBox.innerText = string.substring(0, player.n)
        player.ui.effect.innerHTML = string.substring(0, player.n)
        player.ui.textBox.scrollTop = player.ui.textBox.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.timeSpan)
    },
    pause: () =>{
        window.clearInterval(player.id)
    },
    slow: () =>{
        player.pause()
        player.timeSpan = 300
        player.play()
    },
    normal: () =>{
        player.pause()
        player.timeSpan = 100
        player.play()
    },
    fast: () =>{
        player.pause()
        player.timeSpan = 0
        player.play()
    },
    end: () =>{
        player.pause()
        player.n = string.length
        player.ui.textBox.innerText = string
        player.ui.effect.innerHTML = string
        player.ui.textBox.scrollTop = player.ui.textBox.scrollHeight
    },
    reload: () =>{
        location.reload()
    },
}

player.init()


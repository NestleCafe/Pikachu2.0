const string = `.skin *{box-sizing: border-box; margin:0; padding:0;}
.skin *::before, *::after{box-sizing: border-box;}
body{
    height: 100vh;
    background: rgb(255,230,0);
}
.skin{
    position: relative;
    min-height: 50vh;
    position: relative;
}

@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(0.5deg);
    }
    66%{
        transform: rotate(-0.5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 0.23s infinite linear;
}
.nose-bottom{
    position: relative;
    height: 0px;
    width: 0px;
    border: 10px solid black;
    border-bottom: none;
    border-color: black transparent transparent;
    left: 50%;
    top: 145px;
    margin-left: -10px;
}

.nose-top{
    position: absolute;
    height: 6px;
    width: 19px;
    top: -13px;
    left: -9.5px;
    border-color: black  black  transparent black;
    border-radius: 50% ;
    background: black;
}
.eyebrow{
    position: absolute;
    border: 0.3em solid black;
    height: 30px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    top: 125px;
    display: none;
}
.eyebrow.left{
    border-color: transparent black  black transparent;
    border-radius: 0 0 80% 0;
    transform: rotate(32deg) translateX(-100px);
}
.eyebrow.right{
    border-color: transparent  transparent  black black;
    border-radius: 0 0 0 80%;
    transform: rotate(-32deg) translateX(100px);
}


.eye{
    border: 3px solid black;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgb(46, 46, 46);
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 100px;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid black;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
}
.eye.left{
    border: 1px solid black;
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .top {
    position: relative;
    z-index: 1;
}

.mouth .top .lip{
    position: absolute;
    border: 0.3em solid black;
    height: 30px;
    width: 100px;
    background: rgb(255,230,0);
}
.mouth .top .lip::before{ 
    content: '';
    display: block;
    height: 13px;
    margin-top: -13px;
    background: rgb(255,230,0);
}

.mouth .top .lip.left{
    border-color: transparent  transparent  black black;
    border-radius: 0 0 0 80%;
    transform: rotate(-32deg);
    left: 4px;
}

.mouth .top .lip.right{
    border-color: transparent black  black transparent;
    border-radius: 0 0 80% 0;
    transform: rotate(32deg);
    left: calc(50% - 4px);
}
.mouth .bottom{
    position: absolute;
    height: 180px;
    width: 100%;
    overflow: hidden;
    top: 3px;
}
.mouth .bottom .tongue{
    border: 3px solid black;
    width: 150px;
    position: absolute;
    height: 700px;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 0 0 60% 60%;
    background: rgb(155,0,10);
    overflow: hidden;
}
.mouth .bottom .tongue .jaw{
    background: rgb(255,72,95);
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 50%;
}

.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    border-radius: 50%;
    width: 88px;
    height: 88px;
    top: 220px;
    margin-left: -44px;
    background: red;
}
.face.left{
    transform: translateX(-170px);
}
.face.right{
    transform: translateX(170px);
}
.face > img{
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
}
.face.left > img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

@keyframes blur {
    0%{
      text-shadow:0px 0px 10px #fff;
    }
    20%{
      text-shadow:0px 0px 25px #fff; 
    }
    40%{
      text-shadow:0px 0px 50px #fff;
    }
    60%{
      text-shadow:0px 0px 50px #7B96B8;
    }
    80%{
      text-shadow:0px 0px 150px #7B96B8;
    }
    100%{
      text-shadow:0px -10px 100px #7B96B8,
    }
  }
.caution {
    display: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -330px;
    font-size: 6.5em;
    color: #fff;
    animation: blur 1s  infinite;
    text-shadow:0px 0px 7px #fff;
    z-index: 5;
    pointer-events: none;
  }

`

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


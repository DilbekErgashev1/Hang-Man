let main1 = document.querySelector(".main-1"),
    startBtn = document.querySelector(".startBtn"),
    main2 = document.querySelector(".main-2"),
    letters = document.querySelectorAll(".letter"),
    words = document.querySelector(".game-bottom"),
    timer = document.querySelector(".timer"),
    won = document.querySelector(".won"),
    lose = document.querySelector(".lose"),
    gameTop = document.querySelector(".game-top"),
    resultT = document.querySelector(".resultT"),
    resultS = document.querySelector(".resultS"),
    score = document.querySelector(".score");
    
    minute = 0
    second = 0

    let stopTime
startBtn.addEventListener('click', () => {
    main1.style.display = 'none'
    main2.style.display = 'flex'
    stopTime = setInterval(() => {
        timer.innerHTML = `${minute}m ${second}s`
        second++
        if (second == 60) {
            minute++
            second = 0
            timer.innerHTML = `${minute}m ${second}s`
        }
    }, 1000);
    
})
let vowels = ['A', 'E', 'I', 'O', 'U'];
let consonants = ['B', 'C', 'D', 'F', 'G', ];

function getRandomWord() {
    let words = ['dragon', 'crocodile', 'horse', 'dog', 'cat'];
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
}

let word = getRandomWord();
let wordContainer = document.getElementById('word');
for (let i = 0; i < word.length; i++) {
    let letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    wordContainer.appendChild(letterDiv);
}


function draw() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // Draw the vertical pole
        ctx.beginPath();
        ctx.moveTo(50, 300);
        ctx.lineTo(50, 10);

        ctx.lineTo(230, 10);
        ctx.stroke();
    }
}
function draw() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // Draw the vertical pole
        ctx.beginPath();
        ctx.moveTo(50, 300);
        ctx.lineTo(50, 10);

        ctx.lineTo(230, 10);
        ctx.stroke();
    }
}

function draw2() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // Draw the head
        ctx.beginPath();
        ctx.arc(150, 30, 9, 0, Math.PI * 2);
        ctx.stroke();
    }
}
function draw2() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // Draw the head
        ctx.beginPath();
        ctx.arc(150, 30, 9, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function draw4() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // // Draw the arms
        ctx.beginPath();
        ctx.moveTo(150, 40);
        ctx.lineTo(130, 90);
        ctx.stroke()
    }
}
function draw4() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // // Draw the arms
        ctx.beginPath();
        ctx.moveTo(150, 40);
        ctx.lineTo(130, 90);
        ctx.stroke()
    }
}

function draw4() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
 
        // // Draw the arms
        ctx.beginPath();
        ctx.moveTo(150, 40);
        ctx.lineTo(135, 90);
        ctx.stroke();
    }
}
function draw4() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
 
        // // Draw the arms
        ctx.beginPath();
        ctx.moveTo(150, 40);
        ctx.lineTo(135, 90);
        ctx.stroke();
    }
}


function draw5() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");

        // // Draw the legs
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(135, 130);
        ctx.stroke(); 
    }
}
function draw5() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");

        // // Draw the legs
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(135, 130);
        ctx.stroke(); 
    }
}



function draw6() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");

        // // Draw the legs
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(160, 130);
        ctx.stroke();
    
    }
}
function draw6() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");

        // // Draw the legs
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(160, 130);
        ctx.stroke();
    
    }
}

function draw7() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // // Draw the line top
        ctx.beginPath();
        ctx.moveTo(150, 10);
        ctx.lineTo(150, 20);
        ctx.stroke();
    }
}
function draw7() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // // Draw the line top
        ctx.beginPath();
        ctx.moveTo(150, 10);
        ctx.lineTo(150, 20);
        ctx.stroke();
    }
}

function draw3() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // // Draw the line top
        ctx.beginPath();
        ctx.moveTo(150, 40);
        ctx.lineTo(150, 70);
        ctx.stroke();
    }
}
function draw3() {
    const canvas = document.querySelector(".canvas");
    if (canvas.getContext) {
        // Get the canvas element
        const ctx = canvas.getContext("2d");
        // // Draw the line top
        ctx.beginPath();
        ctx.moveTo(150, 40);
        ctx.lineTo(150, 70);
        ctx.stroke();
    }
}

let completed
wrongcount = 0
let letter2 = document.querySelectorAll(".letter")
let letterButtons = document.querySelectorAll('.letters button');
let complete = []
letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        let letter = button.innerText;
        let index = word.indexOf(letter);
        let index2 = word.lastIndexOf(letter);
        let scoreCount = score.textContent
        if (index !== -1 && index2 !== -1) {
            let letterDiv = document.querySelectorAll('.letter')[index];
            let letterDiv2 = document.querySelectorAll('.letter')[index2];
            letterDiv.innerText = letter;
            letterDiv2.innerText = letter;
            complete[index] = letter;
            complete[index2] = letter;
            score.innerHTML = Number(scoreCount) + 200
        } else{
            score.innerHTML = Number(scoreCount) - 100
            switch (wrongcount) {
                case 0:
                    draw()
                    break;
                case 1:
                    draw2()
                    break;
                case 2:
                    draw3()
                    break;
                case 3:
                    draw4()
                    break;
                case 4:
                    draw5()
                    break;
                case 5:
                    draw6()
                    break;
                case 6:
                    draw7()
                    const canvas = document.querySelector(".canvas");
                    const ctx = canvas.getContext("2d");
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.moveTo(50, 300);
                    ctx.lineTo(50, 10);
                    ctx.lineTo(230, 10);
                    ctx.stroke();
                    // head
                    ctx.beginPath();
                    ctx.arc(150, 30, 9, 0, Math.PI * 2);
                    ctx.stroke();
                    // // Draw the arms
                    ctx.beginPath();
                    ctx.moveTo(150, 40);
                    ctx.lineTo(130, 120);
                    ctx.stroke()
                    ctx.beginPath();
                    ctx.moveTo(150, 40);
                    ctx.lineTo(175, 120);
                    ctx.stroke();
                    // Draw the legs
                    ctx.beginPath();
                    ctx.moveTo(150, 40);
                    ctx.lineTo(135, 180);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(150, 40);
                    ctx.lineTo(160, 180);
                    ctx.stroke();
                    // Draw the line top
                    ctx.beginPath();
                    ctx.moveTo(150, 10);
                    ctx.lineTo(150, 20);
                    ctx.stroke();
                    lose.classList.add("new")
                    break;
        }
    }
        wrongcount++
         completed = complete.join("")
        if (word == completed) {
            won.classList.add('new')
            resultT.innerHTML = `Time: ${timer.innerHTML}`
            resultS.innerHTML = `Score: ${score.innerHTML}`
            letter2.forEach(item => {
                item.classList.add('letter2')
            })
            clearInterval(stopTime)
            score.innerHTML = '0'
        }
        button.style.visibility = 'hidden'
    });
});

function restart() {
        let canvas = document.querySelector(".canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        wrongcount = 0

        won.classList.remove('new')
        lose.classList.remove('new')
        score.innerHTML = 0
        function getRandomWord() {
            let words = ['dragon', 'crocodile', 'horse', 'dog', 'cat'];
            let randomIndex = Math.floor(Math.random() * words.length);
            return words[randomIndex].toUpperCase();
        }
        let container = document.querySelector("#word")
        container.innerHTML = ''
        word = getRandomWord();
        wordContainer = document.getElementById('word');

        for (let i = 0; i < word.length; i++) {
            letterDiv = document.createElement('div');
            letterDiv.classList.add('letter');
            wordContainer.appendChild(letterDiv);
        }
        letterButtons.forEach(btn => {
            btn.style.visibility = 'visible'
        })
        clearInterval(stopTime)
        minute = 0
        second = 0
        stopTime = setInterval(() => {
            timer.innerHTML = `${minute}m ${second}s`
            second++
            if (second == 60) {
                minute++
                second = 0
                timer.innerHTML = `${minute}m ${second}s`
            }
        }, 1000);
            
        console.log(word);
        if (word == completed) {
            won.classList.add('new')
            resultT.innerHTML = `Time: ${timer.innerHTML}`
            resultS.innerHTML = `Score: ${score.innerHTML}`
            letter2.forEach(item => {
                item.classList.add('letter2')
            })
            clearInterval(stopTime)
            score.innerHTML = '0'
        }
    }


console.log(word);

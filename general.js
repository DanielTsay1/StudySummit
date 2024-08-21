/*
jQuery(function($) {
    $(document).ready(function() {
    
    $('.overlay').click(function(){
    $('.nav-list').removeClass('show');
    $('.overlay').removeClass('show');
    });

    $('.menu-button').click(function(){
        $('.nav-list').toggleClass('show');
        $('.overlay').toggleClass('show');
    });
    
});
});
*/
/*
var hours = document.getElementById("countdown-h").textContent;
var minutes = document.getElementById("countdown-m").textContent;
var seconds = document.getElementById("countdown-s").textContent;
var totalSeconds = hours*3600 + minutes*60 + seconds;
var countdown;


function startTimer()
{
    countdown = setInterval(function() {
        totalSeconds--;
        var temp = totalSeconds--;
        if(totalSeconds == 1)
        {
            document.getElementById("plural").textContent = "";
        }else{
            document.getElementById("plural").textContent = "s";
        }
        hours = Math.floor(temp/3600);
        temp = temp % 60;
        minutes = Math.floor(temp/60)
        temp = temp % 60;
        seconds = temp;
        if(totalSeconds <= 0)
        {
            endTimer();
        } 
    }, 1000);
}


function endTimer()
{
    clearInterval(countdown);
}
*/
let timerInterval;
let totalSeconds = 0;
let isRunning = false;
let isPaused = false;

function updateTimeDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById('time-display').textContent = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
}

function startTimer() {
    if (!isRunning && totalSeconds > 0) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateTimeDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        isPaused = true;
        document.getElementById('pause').textContent = 'Unpause';
    } else if (isPaused) {
        startTimer();
        isPaused = false;
        document.getElementById('pause').textContent = 'Pause';
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isPaused = false;
    document.getElementById('pause').textContent = 'Pause';
    totalSeconds = 0;
    updateTimeDisplay();
}

document.getElementById('start').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    updateTimeDisplay();
    startTimer();
});

document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateTimeDisplay(); // Initialize display

// -------to do list---------

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    console.log("no task added");

    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);

  // clear the input field
  inputBox.value = " ";

  // attach event listeners to the new task
  const checkbox = li.querySelector("input");
  const editBtn = li.querySelector(".edit-btn");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");

  // strike out the completed task
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked = false;
      updateCounters();
    }
  });

  deleteBtn.addEventListener("click", function () {
    
      li.remove();
      updateCounters();
    
  });
  updateCounters();
}

// add task when pressing Enter key
inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
// -------------------Drag feature-----------

dragElement(document.getElementById("mydiv"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


dragElement(document.getElementById("calc1"));



// --------hidden function of nav bar--------
function toggleVisibility() {
  var box = document.getElementById("mydiv");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function toggleVisibility2() {
  var box = document.getElementById("time");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function toggleVisibility3() {
  var box = document.getElementById("conright");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function toggleVisibility4() {
  var box = document.getElementById("video");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function toggleVisibility4() {
  var box = document.getElementById("video-container");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function toggleVisibility5() {
  var box = document.getElementById("calc1");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function toggleVisibility6() {
  var box = document.getElementById("bgvid");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
//code for toggle visibility for the side menu bars and all content in adaptstudy

const draggable = document.getElementById('time');

let offsetX, offsetY, isDragging = false;

draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggable.style.cursor = 'move';
});

const draggabl1e = document.getElementById('video');

let offsetX1, offsetY1, isDragging1 = false;

draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggable.style.cursor = 'move';
});

//IDK what this stuff is for  ^^













const draggableElement = document.getElementById('video-container');
let ytDragging = false;
let ytX, ytY;

draggableElement.addEventListener('mousedown', function(event) {
    // Start dragging
    ytDragging = true;

    // Calculate the offsets
    ytX = event.clientX - draggableElement.getBoundingClientRect().left;
    ytY = event.clientY - draggableElement.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function(event) {
    if (ytDragging) {
        // Update the position of the element
        draggableElement.style.left = event.clientX - ytX + 'px';
        draggableElement.style.top = event.clientY - ytY + 'px';
    }
});

document.addEventListener('mouseup', function() {
    // Stop dragging
    ytDragging = false;
});

//yt dragging code for adphystudy^^


class Calculator {
	
	constructor() {
		this.current = 0;
		this.entered = 0;
		this.answer = 0;

		this.decimal = false;

		this.operator = '';

		this.states = {
			'inv': false,
			'comma': false
		}

		this.options = [
			['equals', this.processEquals.bind(this)],
			['clear', this.processClear.bind(this)],
			['sqrt', this.processSqrt.bind(this)],
			['inv', this.processInv.bind(this)],
			['comma', this.processComma.bind(this)],
			['pi', this.processPi.bind(this)]
		];

		this.firstEnteredOutput = document.querySelector('.f_entered');
		this.lastEnteredOutput = document.querySelector('.l_entered');
		this.operatorOutput = document.querySelector('.operator');

		this.currentOutput = document.querySelector('.current > h1');
		this.buttons = document.querySelectorAll('.buttons > div');

		for(var i = 0, n = this.buttons.length; i < n; i++) {
			var calc = this;
			var button = this.buttons[i];

			button.addEventListener('mousedown', function() {
				var _this = this;
				calc.processAction(_this.getAttribute('data-key'));
				_this.classList.add('pressed');
				setTimeout(function() {
					_this.classList.remove('pressed');
				}, 400);
			});

			button.addEventListener('mouseup', function() {
				var _this = this;
				_this.classList.remove('pressed');
			});
		}
	}

	processAction(a) {
		for(var i = 0, n = this.options.length; i < n; i++) {
			var option = this.options[i];
			if(a === option[0]) {
				option[1]();
				return;
			}
		}

		if(a === '+' || a === '-' || a === '/' || a === '*') {
			this.processASDM(a);
			return;
		} else {
			this.processNumber(a);
			return;
		}

	}

	processEquals() {
		if(!!this.operator) {
			this.displayNumber(this.current, this.lastEnteredOutput);
			this.answer = eval(this.entered + this.operator + this.current);
			this.displayNumber(this.answer, this.currentOutput);

			this.current = this.answer;
		}
	}

	processClear() {
		this.current = 0;
		this.displayNumber(this.current, this.currentOutput);
		this.entered = 0;
		this.operator = '';
		this.firstEnteredOutput.innerHTML = '';
		this.lastEnteredOutput.innerHTML = '';
		this.operatorOutput.innerHTML = '';
	}

	processSqrt() {
		this.current = Math.sqrt(this.current);
		this.displayNumber(this.current, this.currentOutput);
	}

	processInv() {
		this.current = this.current * -1;
		this.displayNumber(this.current, this.currentOutput);
	}

	processComma() {
		if(!this.decimal) {
			this.current += '.';
			this.currentOutput.innerHTML = this.current;
		}

		this.decimal = true;
	}

	processPi() {
		this.current = Math.PI;
		this.displayNumber(this.current, this.currentOutput);
	}

	processASDM(a) {
		if(!!this.entered && !!!this.answer) {
			return;
		}

		if(this.answer) {
			this.lastEnteredOutput.innerHTML = '';
		}

		this.decimal = false;
		this.operator = a;
		this.entered = this.current;
		this.displayNumber(this.entered, this.firstEnteredOutput);
		a === '*' ? this.operatorOutput.innerHTML = 'x' : this.operatorOutput.innerHTML = this.operator;
		this.current = 0;
		this.displayNumber(this.current, this.currentOutput);
	}

	processNumber(n) {
		this.current === 0 ? this.current = n : this.current += n;
		this.displayNumber(this.current, this.currentOutput);
	}

	displayNumber(n, location) {
		location.innerHTML = String(n).substring(0, 10);
	}
}

var Calc = new Calculator();
//calculator code ^^



let genreText = document.getElementById('genre-name');

function switchGenre() {
  if(genreText.innerText === "Current Genre: Lofi")
  {
    genreText.innerText = "Current Genre: EDM";
    document.getElementById('lofi-iframe').style.display = "none";
    document.getElementById('EDM-iframe').style.display = "block";
  }
  else if (genreText.innerText === "Current Genre: EDM")
  {
    genreText.innerText = "Current Genre: Pop";
    document.getElementById('EDM-iframe').style.display = "none";
    document.getElementById('pop-iframe').style.display = "block";
  }
  else if (genreText.innerText === "Current Genre: Pop")
  {
    genreText.innerText = "Current Genre: RnB & chill";
    document.getElementById('pop-iframe').style.display = "none";
    document.getElementById('rnb-iframe').style.display = "block";
  }
  else if (genreText.innerText === "Current Genre: RnB & chill")
  {
    genreText.innerText = "Current Genre: Jazz";
    document.getElementById('rnb-iframe').style.display = "none";
    document.getElementById('jazz-iframe').style.display = "block";
  }
  else if (genreText.innerText === "Current Genre: Jazz")
  {
    genreText.innerText = "Current Genre: Classical Piano";
    document.getElementById('jazz-iframe').style.display = "none";
    document.getElementById('piano-iframe').style.display = "block";
  }
  else if (genreText.innerText === "Current Genre: Classical Piano")
  {
    genreText.innerText = "Current Genre: K-pop";
    document.getElementById('piano-iframe').style.display = "none";
    document.getElementById('kpop-iframe').style.display = "block";
  }
  else if (genreText.innerText === "Current Genre: K-pop")
  {
    genreText.innerText = "Current Genre: K-pop Girl Groups";
    document.getElementById('kpop-iframe').style.display = "none";
    document.getElementById('kgirl-iframe').style.display = "block";
  }
  else if (genreText.innerText === "Current Genre: K-pop Girl Groups")
  {
    genreText.innerText = "Current Genre: Lofi";
    document.getElementById('kgirl-iframe').style.display = "none";
    document.getElementById('lofi-iframe').style.display = "block";
  }
}

//code for swtiching YT vid in adapt study


function hsMathShow(letter) {
  document.getElementById('hs-math-alg1').style.display = 'none';
  document.getElementById('hs-math-geo').style.display = 'none';
  document.getElementById('hs-math-alg2').style.display = 'none';
  document.getElementById('hs-math-trig').style.display = 'none';
  document.getElementById('hs-math-precalc').style.display = 'none';
  if(letter === 'a')
  {
    document.getElementById('hs-math-alg1').style.display = 'flex';
    document.getElementById('hs-math-alg1').style.backgroundColor = '#453c63';
  } 
  else if (letter === 'b')
  {
    document.getElementById('hs-math-geo').style.display = 'flex';
    document.getElementById('hs-math-geo').style.backgroundColor = '#453c63';
  }
  else if (letter === 'c')
  {
    document.getElementById('hs-math-alg2').style.display = 'flex';
    document.getElementById('hs-math-alg2').style.backgroundColor = '#453c63';
  }
  else if (letter === 'd')
  {
    document.getElementById('hs-math-trig').style.display = 'flex';
    document.getElementById('hs-math-trig').style.backgroundColor = '#453c63';
  }
  else if (letter === 'e')
  {
    document.getElementById('hs-math-precalc').style.display = 'flex';
    document.getElementById('hs-math-precalc').style.backgroundColor = '#453c63';
  }
}
// high school math button show content stuff ^^

function apMathShow(letter) {
  document.getElementById('ap-math-precalc').style.display = 'none';
  document.getElementById('ap-math-calcAB').style.display = 'none';
  document.getElementById('ap-math-calcBC').style.display = 'none';
  document.getElementById('ap-math-stats').style.display = 'none';
  if(letter === 'a')
  {
    document.getElementById('ap-math-precalc').style.display = 'flex';
    document.getElementById('ap-math-precalc').style.backgroundColor = '#22193E';
  } 
  else if (letter === 'b')
  {
    document.getElementById('ap-math-calcAB').style.display = 'flex';
    document.getElementById('ap-math-calcAB').style.backgroundColor = '#22193E';
  }
  else if (letter === 'c')
  {
    document.getElementById('ap-math-calcBC').style.display = 'flex';
    document.getElementById('ap-math-calcBC').style.backgroundColor = '#22193E';
  }
  else if (letter === 'd')
  {
    document.getElementById('ap-math-stats').style.display = 'flex';
    document.getElementById('ap-math-stats').style.backgroundColor = '#22193E';
  }
}

// script.js
function changeVideo(videoSrc) {
  const videoElement = document.getElementById('bg-video');
  videoElement.pause(); // Pause the current video
  videoElement.src = videoSrc; // Change the source
  videoElement.load(); // Load the new video
  videoElement.play(); // Play the new video
}




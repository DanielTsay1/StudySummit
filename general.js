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
  var box = document.getElementById("lofi");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

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

const draggabl1e = document.getElementById('lofi');

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















const draggableElement = document.getElementById('lofi-container');
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




const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if (operator === 'add') return firstNum + secondNum
  if (operator === 'subtract') return firstNum - secondNum
  if (operator === 'multiply') return firstNum * secondNum
  if (operator === 'divide') return firstNum / secondNum
}

const getKeyType = key => {
  const { action } = key.dataset
  if (!action) return 'number'
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) return 'operator'
  // For everything else, return the action
  return action
}

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = state

  if (keyType === 'number') {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }

  if (keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.'
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
    return displayedNum
  }

  if (keyType === 'operator') {
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum
  }

  if (keyType === 'clear') return 0

  if (keyType === 'calculate') {
    return firstValue
      ? previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum
  }
}

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = calculator.dataset

  calculator.dataset.previousKeyType = keyType

  if (keyType === 'operator') {
    calculator.dataset.operator = key.dataset.action
    calculator.dataset.firstValue = firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculatedValue
      : displayedNum
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
      ? modValue
      : displayedNum
  }

  if (keyType === 'clear' && key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  }
}

const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key)
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

  if (keyType === 'operator') key.classList.add('is-depressed')
  if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC'
  if (keyType !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  const resultString = createResultString(key, displayedNum, calculator.dataset)

  display.textContent = resultString
  updateCalculatorState(key, calculator, resultString, displayedNum)
  updateVisualState(key, calculator)
})


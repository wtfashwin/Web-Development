const $ = document

const playBtn = $.querySelector(".play")
const lapBtn = $.querySelector(".lap")
const resetBtn = $.querySelector(".reset")
const minute = $.querySelector(".min")
const second = $.querySelector(".sec")
const centiSecond = $.querySelector(".msec")
const laps = $.querySelector(".laps")
const clearAllBtn = $.querySelector(".lap-clear-btn")
const bg = $.querySelector(".outer-circle")

let isPlay = false
let minCounter = 0
let min;
let secCounter = 0
let sec;
let centiCounter = 0
let centiSec;
let lapId = 0
// let isReset = false

const toggleBtn = () => {
	lapBtn.classList.remove("hidden")
	resetBtn.classList.remove("hidden")
}

const play = () => {
	if (!isPlay) {
		playBtn.innerHTML = "Pause"
		bg.classList.add("animation-bg")
		min = setInterval(() => {
			if (minCounter === 60) {
				minCounter = 0
			}
			minute.innerHTML = `${++minCounter} :`
		},60000)
		sec = setInterval(() => {
			if (secCounter === 60) {
				secCounter = 0
			}
			second.innerHTML = `&nbsp;${++secCounter} :`
		},1000)
		centiSec = setInterval(() => {
			if (centiCounter === 100) {
				centiCounter = 0
			}
			centiSecond.innerHTML = `&nbsp;${++centiCounter}`
		},10)
		isPlay = true
		// isReset = true
	} else {
		playBtn.innerHTML = "Play"
		bg.classList.remove("animation-bg")
		clearInterval(min)
		clearInterval(sec)
		clearInterval(centiSec)
		isPlay = false
		// isReset = false
	}
	toggleBtn()
}

const reset = () => {
	// isReset = true
	isPlay = true
	play()
	minCounter = 0
	secCounter = 0
	centiCounter = 0
	lapBtn.classList.add("hidden")
	resetBtn.classList.add("hidden")
	minute.innerHTML = `0 : `
	second.innerHTML = `&nbsp;0 :`
	centiSecond.innerHTML = `&nbsp;0`
}

const lap = () => {
	const li = $.createElement("li")
	const number = $.createElement("span")
	const timeStamp = $.createElement("span")
	
	li.setAttribute("class", "lap-item")
	number.setAttribute("class", "number")
	timeStamp.setAttribute("class", "time-stamp")
	
	number.innerHTML = `#${++lapId}`
	timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`
	
	li.append(number, timeStamp)
	laps.append(li)
	
	clearAllBtn.classList.remove("hidden")
}

const clearAll = () => {
	laps.innerHTML = ""
	laps.append(clearAllBtn)
	lapId = 0
	clearAllBtn.classList.add("hidden")
}

playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
lapBtn.addEventListener("click", lap)
clearAllBtn.addEventListener("click", clearAll)

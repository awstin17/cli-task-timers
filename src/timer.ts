function startTimer(time: number) {
    return new Promise(resolve => setTimeout(resolve, time))
}

module.exports = startTimer
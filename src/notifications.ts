const notifier = require("node-notifier");

notifier.generateFirstMessage = (task: any, time: number) => {

    let message = {
        title: "Start Your First Task!",
        message: `Time to do ${task} Mr. User. You have ${time} seconds to work on it`,
        sound: true,
        wait: false
    }

    return message
}

notifier.generateMiddleMessage = (task: any, time: number) => {

    let message = {
        title: "Start Your Next Task!",
        message: `Time to do ${task} Mr. User. You have ${time} seconds to work on it`,
        sound: true,
        wait: false
    }

    return message
}

notifier.generateLastMessage = () => {

    let message = {
        title: "Time!",
        message: "Aaaand you're all done for this session, congrats!",
        sound: true,
        wait: false
    }

    return message
}

module.exports = notifier;
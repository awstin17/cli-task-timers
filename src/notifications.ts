const notifier = require("node-notifier");

notifier.displayFirstMessage = (task: any, time: number) => {

    let message = {
        title: "Start Your First Task!",
        message: `Time to do ${task} Mr. User. You have ${time} seconds to work on it`,
        sound: true,
        wait: false
    }

    notifier.notify(message);
}

notifier.displayMiddleMessage = (task: any, time: number) => {

    let message = {
        title: "Start Your Next Task!",
        message: `Time to do ${task} Mr. User. You have ${time} seconds to work on it`,
        sound: true,
        wait: false
    }

    notifier.notify(message);
}

notifier.displayLastMessage = () => {

    let message = {
        title: "Time!",
        message: "Aaaand you're all done for this session, congrats!",
        sound: true,
        wait: false
    }

    notifier.notify(message);
}

module.exports = notifier;
const waitForMessage = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello, Async/Await!");
        }, 1000);
    });
};

const printMessage = async () => {
    const message = await waitForMessage();
    console.log(message);
};

printMessage();

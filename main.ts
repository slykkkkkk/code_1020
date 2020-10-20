input.onButtonPressed(Button.A, function () {
    radio.sendString("AAAAA")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= 4; j++) {
            if ((I + j) % 2 + 0 == 0) {
                led.plot(I, j)
            } else {
                led.unplot(I, j)
            }
        }
    }
})

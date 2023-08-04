let msg = ""
radio.setGroup(138)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    msg = serial.readLine()
    if (msg == "Normal") {
        basic.showIcon(IconNames.Diamond)
        radio.sendString("Normal")
    } else if (msg == "Danger") {
        basic.showIcon(IconNames.No)
        radio.sendString("Danger")
    }
})

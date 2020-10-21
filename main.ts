radio.onReceivedNumber(function (receivedNumber) {
    if (distance < 10) {
        gamePad.vibratorMotor(gamePad.Vibrator.V1)
        gamePad.led(gamePad.Led.ON)
    } else {
        gamePad.vibratorMotor(gamePad.Vibrator.V0)
        gamePad.led(gamePad.Led.OFF)
    }
})
let distance = 0
radio.setGroup(1)
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    radio.sendNumber(distance)
    basic.pause(100)
})

input.onButtonPressed(Button.A, function () {
    basic.showString("\"DANNA GARCÍA\"")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.TShirt)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("9-10")
})
basic.showString("\"BIENVENIDA\"")
basic.forever(function () {
	
})

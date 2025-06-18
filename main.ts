input.onButtonPressed(Button.B, function () {
    result = result + 1
    if (number_1 + number_2 == result) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Yes)
        result = 0
    }
})
let result = 0
let number_2 = 0
let number_1 = 0
number_1 = 1
number_2 = 2
result = 0
basic.forever(function () {
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . # . . .
        . # # # .
        `)
})

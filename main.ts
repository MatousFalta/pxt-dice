let diceSides: number = 6;
let value: number = 0;
const diceMAX: number = 99;
const diceMIN: number = 2;
let pinWasPressed: number = 0;
let unlock: boolean = false;
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive);

basic.showNumber(diceSides)

while(true){
    pinWasPressed = input.pinIsPressed(TouchPin.P1) ? 1 : 0
    if (unlock === false) {
        if(input.buttonIsPressed(Button.A)){
        if(diceSides > diceMIN){
            diceSides -= 1
        }
        basic.showNumber(diceSides)
        }

        if (input.buttonIsPressed(Button.B)) {
            if (diceSides < diceMAX) {
                diceSides += 1
            }
            basic.showNumber(diceSides)
        }
    }
    
    
    if (unlock === true) {
        if (input.isGesture(Gesture.Shake)) {
            value = randint(1, diceSides)
            basic.showNumber(value)
            unlock = false
            music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone) 
        }       
    }
    
    if (pinWasPressed) {
        unlock = true
    }
    
    if(input.logoIsPressed()) {
        basic.showNumber(value)
    }
    //console.logValue("tlacitko", buttonWasPressed)
    basic.pause(0);
}
basic.showIcon(IconNames.Heart);


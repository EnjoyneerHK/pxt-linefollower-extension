/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */



//% color="#AA278D" weight=100
//% groups="['Line follow', 'Sensing']"
namespace linefollowsensor {
   
    //% block
    //% weight=100
    //% group="Line follow"
    export function linesensor(): number {
       
         if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        return 0;
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0){
        return 1;
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1){
        return 2;
    } else {
        return 3;

    }
    }

//% block
//% weight=70
//% group="Sensing"
    export function leftlinesensor(): number {
         if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        return 1;
    } else {
        return 0;
    }

    }

//% block
//% weight=50
//% group="Sensing"
    export function rightlinesensor(): number {
         if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        return 1;
    } else {
        return 0;
    }

    }
 
    }


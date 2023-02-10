const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
// let direction = null;
// // //keeps track with character's current position
// let x = 100;
// let y = 250;
// // //end
// // //
// // //x moves characters from left and right; y moves characters up and down
// // //we need it to run repeatedly, so character moves cont. when the direction is not null. need to use -->function moveCharacter() {} and -->setInterval
// // //function moveCharacter() {
// setInterval (function(){ 
//     if (direction === 'west') {
//     x = x - 1
//     }
//     if (direction === 'north') {
//         y = y + 1
//     }
//     if (direction === 'east') {
//         x = x + 1
//     }
//     if (direction === 'south') {
//         y = y - 1
//     }

//     character.style.left = x + 'px'
//     character.style.bottom = y + 'px'
// })

////so the character will show  its feet moving
    function handleDirectionChange(direction) {
        if(direction === null){
            character.src = 'assets/green-character/static.gif'
        }
        if(direction === 'west'){
            character.src = 'assets/green-character/west.gif'
        }
        if(direction === 'north'){
            character.src = 'assets/green-character/north.gif'
        }
        if(direction === 'east'){
            character.src = 'assets/green-character/east.gif'
        }
        if(direction === 'south'){
            character.src = 'assets/green-character/south.gif'
        }
    }

// // code .WithArrowKeys
move(character).WithArrowKeys(100, 250, handleDirectionChange)


// //end
// //then will pass that function to setInterval
// //setInterval(moveCharacter, 1) --> instead of this: should use --> serIntercal (function()) {}
// //end: "call moveCharacter every millisecond"
// move(character).to(100, 250, handleDirectionChange)

// ****************************************************************

// PROBLEM: move(character).WithArrowKeys(100, 250) DIDN'T WORK FOR ME! this problem is the last two parts of 4. Refactoring Our Code

// PROBLEM FIXED!!!

// ******************************************************************
/* Commenting out this part of the code as it is not needed anymore

//3. chante the character's directions with arrow keys using DOM event  -->keydown
document.addEventListener('keydown', function(e){
    //need to add the -->return: if keydown event fires multiple times (user holds down a key)
    if (e.repeat) return;
    // to check whick key was pressed --> e.key
    // the value of this will change the charact directions
    if (e.key === 'ArrowLeft') {
        direction = 'west'
    }
    if (e.key === 'ArrowRight') {
        direction = 'east'
    }
    if (e.key === 'ArrowUp') {
        direction = 'north'
    }
    if (e.key === 'ArrowDown') {
        direction = 'south'
    }


})
// end: using another callback function. addEventListener receives the inline function we are passing, calls it whenever the event we specify fires, and passes in the e objects as an argument. RECALL "e" is an object containing detaisl about the event that fired

// to stope the character when user releases a key. we need more event listener
document.addEventListener ('keyup', function(e){
    direction = null
})
*/

// 4. Refactoring our code
// if we decided the player can switch charact and control some other image wtih the arrow key. Need to duplicate event listeners and the setIntercal callback. will need to refactor code into -->move function (allow to use it on any image)

// define another function insed --move and attach it to the object we return
function move(element) {
    element.style.position = 'fixed'
    
    function moveToCoordinates (left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
// copy original index logic for moveWithArrowKeys but change character to element
    function moveWithArrowKeys (left, bottom, onDirectionChange) {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter() {
            if (direction === 'west') {
            x = x - 1
            }
            if (direction === 'north') {
                y = y + 1
            }
            if (direction === 'east') {
                x = x + 1
            }
            if (direction === 'south') {
                y = y - 1
            }
    
            element.style.left = x + 'px'
            element.style.bottom = y + 'px' 
        }
        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            onDirectionChange(direction)
        })

        document.addEventListener('keyup', function(e){
            direction = null
            onDirectionChange(direction)
            // note: callback() can be named whatever you want -- changed to onDirectionChange
        })
    }
    return {
        to: moveToCoordinates,
        WithArrowKeys: moveWithArrowKeys
    }
}


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

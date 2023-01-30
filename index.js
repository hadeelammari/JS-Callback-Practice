
const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).withArrowKeys(100, 250)


// const character = newImage('assets/green-character/static.gif')
// let direction = null;
// let x = 100;
// let y = 250;

// document.addEventListener('keyup', function(e){
//     direction = null;
//     if(e.repeat) return;

//     if (e.key === 'ArrowUp'){
//         direction = 'north'
//     }

//     if (e.key === 'ArrowRight'){
//         direction = 'east'
//     }

//     if (e.key === 'ArrowLeft'){
//         direction = 'west'
//     }

//     if (e.key === 'ArrowDown'){
//         direction = 'south'
//     }
// })

/*
/////     MOVEMENT FUNTION     /////
setInterval (function(){
     
    if (direction === 'north'){
        y += 1
    }

    if (direction === 'east'){
        x += 1
    }

    if (direction === 'south'){
        y -= 1
    }

    if (direction === 'west'){
        x -= 1;
    }
     

    character.style.left = x +'px'
    character.style.bottom = y +'px'
}, 1)
*/
/////     MOVEMENT FUNTION     /////
//move(character).to(100, 250)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

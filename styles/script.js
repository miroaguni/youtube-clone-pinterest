const grids = document.querySelecterAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
    const grid= grids[index]
    const heading= headings[index]
    const gridColumns= grid.querySelecterAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('animate-before','animate-after')
    })

    heading.classList.remove('animate-before','animate-after')
}

function exitScreen(index, exitDelay) {
    const grid= grids[index]
    const heading= headings[index]
    const gridColumns= grid.querySelecterAll('.column')

     gridColumns.forEach(element => {
        element.classList.add('animate-after')
})

setTimeout(()=> {
    element.classList.remove('active')
},exitDelay)

}

function setupanimationcycle({initialScreenIndex,exitDelay}){
    const cycletime = timePerScreen + exitDelay
    let nextIndex = 0
    
}

setupanimationcycle({
    initialScreenIndex:0,
    timePerScreen:2000, //ms
    exitDelay: 200 * 7 //ms
})
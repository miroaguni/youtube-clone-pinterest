const grids= document.querySelecterAll('.grid')
const headings =document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
    const grid= grids[index]
    const heading= heading[index]
    const gridColumns= grid.querySelecterAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('animate-before')
    })
}
function exitScreen(index, exitDelay) {}

function setupanimationcycle({
    initialScreenIndex,
    timePerScreen,
    exitDelay}){

}

setupanimationcycle({
    initialScreenIndex:0,
    timePerScreen:2000, //ms
    exitDelay: 200 * 7 //ms
})
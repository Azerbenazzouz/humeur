// list
stat=['sadness','proud','joy','happiness','fear','embrassment']
// init
// g='m' => homme / g='f' => femme
g='m'
// si on click sur le radio on fait changer le genre et le préfix
document.getElementsByName('genre')[0].addEventListener('click',f=()=>{
    g='m'
})
// si on click sur le radio on fait changer le genre et le préfix
document.getElementsByName('genre')[1].addEventListener('click',f=()=>{
    g='f'
})
// on fait changer l'image aléatoir
document.getElementById('img').addEventListener('click',f=()=>{
    // random
    ran=Math.floor(Math.random()*6)
    // change img
    document.getElementById('img').src='/img/'+stat[ran]+'.jpg'
    // return the state
    document.getElementById('info').innerHTML=stat[ran]+' '+g
})

// function ff(){
//     // random
//     ran=Math.floor(Math.random()*6)
//     // change img
//     document.getElementById('img').src='/img/'+stat[ran]+'.jpg'
//     // return the state
//     document.getElementById('info').innerHTML=stat[ran]+' '+g
// }
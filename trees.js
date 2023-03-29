var imgs=[
    // 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmadmeaning.com%2Fenvironment%2Fwhy-saving-trees-will-be-the-benefit-for-your-future%2F&psig=AOvVaw0LAxD7f8GotCkaoGM4fyaj&ust=1680063604275000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKCFnOvi_f0CFQAAAAAdAAAAABAh',
    // 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fsavetreessaveearth.com%2Fsave-trees%2F&psig=AOvVaw3gEm3FL1z3kfrxPKTWUuLF&ust=1680065151241000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjMsM3o_f0CFQAAAAAdAAAAABAJ'
    // 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flipkart.com%2Fsave-trees-nature-paper-print%2Fp%2Fitm82d5977fd119a&psig=AOvVaw3gEm3FL1z3kfrxPKTWUuLF&ust=1680065151241000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjMsM3o_f0CFQAAAAAdAAAAABAR'
    // 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flipkart.com%2Fsave-trees-nature-paper-print%2Fp%2Fitm82d5977fd119a&psig=AOvVaw3gEm3/FL1z3kfrxPKTWUuLF&ust=1680065151241000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjMsM3o_f0CFQAAAAAdAAAAABAR',
    // 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.videosforstatus.com%2Fsave-tree-whatsapp-status-video%2F&psig=AOvVaw3gEm3FL1z3kfrxPKTWUuLF&ust=1680065151241000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjMsM3o_f0CFQAAAAAdAAAAABAZ',
    // 'https://fastread.in/images/uploads/save-tree-speech.jpg',
    'img1.jpg',
    'img6.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
]
var rsns=[
    "Trees provides us oxygen",
    'Trees gives us food and shelter',
    'Trees are habitat for many animal species',
    'Forests helps in prevention of soil erosion',
    'Trees are the cause of precipitation',

]
var i=0;
function next(){
    if(i>=rsns.length){
        i=0;
    }
    document.getElementById('reasons').innerHTML=rsns[i];
    document.getElementById('img1').src=imgs[i];
    i++;
}
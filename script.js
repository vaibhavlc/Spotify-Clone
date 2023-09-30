let audioElement=new Audio("songs/2.mp3")
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")
let t=document.getElementById("t")
let index=0




let masterPlay=document.getElementById('masterPlay')
let songs=[
    { songName:"tere mast do nain",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    { songName:"tum jo aaye",filePath:"songs/2.mp3",coverPath:"covers/1.jpg"},
    { songName:"singham",filePath:"songs/3.mp3",coverPath:"covers/1.jpg"},
    { songName:"befikre",filePath:"songs/4.mp3",coverPath:"covers/1.jpg"},
    { songName:"taro me dil",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},
    { songName:"mc stan dell",filePath:"songs/6.mp3",coverPath:"covers/1.jpg"},
    { songName:"honey paaji",filePath:"songs/7.mp3",coverPath:"covers/1.jpg"},
    { songName:"kare bho kay kartyoy be",filePath:"songs/8.mp3",coverPath:"covers/1.jpg"},
    { songName:"jindgi ho gayi zan",filePath:"songs/9.mp3",coverPath:"covers/1.jpg"},
    { songName:"jindgi ho gayi zan",filePath:"songs/10.mp3",coverPath:"covers/1.jpg"},
]


let songItems=Array.from(document.getElementsByClassName("songItem"))
songItems.forEach((element, i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath
   element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName
      console.log(songItems.length)
})



masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime==0){
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
    gif.style.opacity=1;
   audioElement.play()
    
    }else{
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        audioElement.pause();
        gif.style.opacity=0;
    }})
    audioElement.addEventListener("timeupdate",()=>{
        myProgressBar.value=(audioElement.currentTime/audioElement.duration)*100
        

    })
    
    myProgressBar.addEventListener("change",()=>{
        audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
    })
setInterval(()=>{
    t.innerHTML=audioElement.currentTime
},100)

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })
}

    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        console.log(element)
        element.addEventListener("click",(e)=>{
            makeAllPlays();
            gif.style.opacity=1;
            e.target.classList.remove("fa-play-circle")
            e.target.classList.add("fa-pause-circle")
             index=Number.parseInt(e.target.id)
            audioElement.src=`songs/${index+1}.mp3`
            document.getElementById("masterSongName").innerHTML=songs[index].songName
            audioElement.currentTime=0
            audioElement.play();
            console.log(audioElement.duration)
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
        })
    })  
    document.getElementById("next").addEventListener("click", ()=>{
        if(index==9){
            index=0
        }else{
            index+=1
        }
        audioElement.src=`songs/${index+1}.mp3`
        audioElement.currentTime=0;
        document.getElementById("masterSongName").innerHTML=songs[index].songName
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
              makeAllPlays();
              document.getElementById(index).classList.remove("fa-play-circle")
              document.getElementById(index).classList.add("fa-pause-circle")
            
    })

    document.getElementById("previous").addEventListener("click",()=>{
        if(index==0){
            index=0
        }{
            index-=1
        }
        audioElement.src=`songs/${index+1}.mp3`
        audioElement.currentTime=0
        document.getElementById("masterSongName").innerHTML=songs[index].songName
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
            makeAllPlays();
            document.getElementById(index).classList.remove("fa-play-circle")
            document.getElementById(index).classList.add("fa-pause-circle")
          
        

    })
    
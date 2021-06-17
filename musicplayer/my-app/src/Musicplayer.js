// import coverArt from './img/coverArt.jpg';
// import song1 from './music/area11-theContract.mp3';
// import song2 from './music/eminem-loseYourself.mp3';
// import { useState } from 'react';

// const Musicplayer = () => {
    
//     // // data
//     // const Artist = 'Area11';
//     // // const SongTitle = 'The Contract';
//     const data = '0000';

//     // // getting elements
//     // const container = document.querySelector('.container');
//     // const playBtn = document.querySelector('#play');
//     // const prevBtn = document.querySelector('#prev');
//     // const nextBtn = document.querySelector('#next');
//     // const audio = document.querySelector('#audio');
//     // const progressbar = document.querySelector('.progressbar');
//     // const progressContainer = document.querySelector('.progress-container');
//     // const description = document.querySelector('.description');
    

//     // //song titles    
//     // const songs = [song1, song2];
//     // const songTitles = ['Area11 - The Contract', 'Eminem - Lose Yourself'];
    
//     // //song status
//     // let songIndex = 1;
    
//     // const [SongTitle, setTitle] = useState('the contract');

//     // // initial load song
//     // loadSong(songs[songIndex]);
   
    

//     // // update song details
//     // function loadSong(song){
//     //     // description.innerText = songTitles[songIndex];
        
//     //     console.log(songTitles[songIndex]);
//     // }
//     // function playSong() {
//     //     container.classList.add('play');
//     //     playBtn.querySelector('i').classList.remove('play_arrow');
//     //     playBtn.querySelector('i').classList.add('pause');
//     // }
//     // function pauseSong() {
        
//     // }
//     // //event listeners
//     // playBtn.addEventListener('click', () => {
//     //     const isPlaying = container.classList.contains('play');
        
//     //     if(isPlaying){
//     //         pauseSong()
//     //     } else {
//     //         playSong()
//     //     }
//     // })

//     // const handleClick = () => {
//     //     setTitle('Lose Yourself')
//     // }



//     return (
//         // <div className="container">
//         //     <h3 className="description"><b>Song</b></h3>

//         //     <div className="img-container">
//         //         <img src={coverArt} alt="cover" />
//         //         <div className="statsLabel">
//         //             <div className="statsComp">
//         //                 <p className="label">DISTANCE</p>
//         //                 <p className="info">{data}</p>
//         //             </div>
//         //             <div className="statsComp">
//         //                 <p className="label">STEPS</p>
//         //                 <p className="info">{data}</p>
//         //             </div>
//         //             <div className="statsComp">
//         //                 <p className="label">SPEED</p>
//         //                 <p className="info">{data}</p>
//         //             </div>
//         //             <div className="statsComp">
//         //                 <p className="label">DURATION</p>
//         //                 <p className="info">{data}</p>
//         //             </div>
//         //         </div>

//         //     </div>

//         //     <div className="favorite">
//         //         <button className="btn musicBtn">
//         //             <i className="material-icons">favorite_border</i>
//         //         </button>
//         //     </div>

//         //     <div className="music-info">
//         //         <div className="progress-container">
//         //             <div className="progressbar"></div>
//         //         </div>
//         //     </div>
//         //     <audio src={song1} id="audio"></audio>

//         //     <div className="music-nav">
//         //         <button className="btn musicBtn" id="prev">
//         //             <i className="material-icons">skip_previous</i>
//         //         </button>
//         //         <button className="btn bigBtn musicBtn" id="play">
//         //             <i className="material-icons">play_arrow</i>
//         //         </button>
//         //         <button className="btn musicBtn" id="next">
//         //             <i className="material-icons ">skip_next</i>
//         //         </button>
//         //     </div>

//         //     <button className="btn startstop">
//         //         <span>START</span>
//         //     </button>
//         // </div>

//     // );
// }

// export default Musicplayer;
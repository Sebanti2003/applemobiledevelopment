// import React, { useEffect, useRef, useState } from 'react'
// import { hightlightsSlides } from '../constants'
// import gsap from 'gsap';
// import { pauseImg, playImg, replayImg } from '../utils';
// import { useGSAP } from '@gsap/react';
// const Videocarousal = () => {
//     const videoRef = useRef([]);
//     const videoSpanRef = useRef([]);
//     const videoDivRef = useRef([]);
//     const [loadeddata, setloadeddata] = useState([])
//     const [video, setvideo] = useState({
//         isEnd: false,
//         startplay: false,
//         videoid: 0,
//         isLastvideo: false,
//         isPlaying: false,
//     });
//     const { isEnd, startplay, videoid, isLastvideo, isPlaying } = video;
//     useGSAP(() => {
//         gsap.to('#slides',{
//             `transform:translateX(${-100*videoid}%)`,
//             duration:2,
//             ease:'power2.inOut'
//         })
//         gsap.to('#video', {
//             scrollTrigger: {
//                 trigger: '#video',
//                 toggleActions: 'restart none none none',
//             },
//             onComplete: () => {
//                 setvideo((prev) => ({ ...prev, startplay: true, isPlaying: true }))
//             }
//         })

//     }, [isEnd, videoid])
//     useEffect(() => {
//         if (loadeddata.length > 3) {
//             if (!isPlaying) {
//                 videoRef.current[videoid].pause();

//             } else {
//                 startplay && videoRef.current[videoid].play();
//             }
//         }
//     }, [startplay, videoid, isPlaying, loadeddata])
//     const handleloadedmeta = (i, e) => {
//         return (
//             setloadeddata((prev) => [...prev, e])
//         )

//     }
//     useEffect(() => {
//         let currentprogress = 0;
//         let span = videoSpanRef.current;
//         if (span[videoid]) {
//             //animate the progress of the video
//             let anim = gsap.to(span[video], {
//                 onUpdate: () => {
//                     const progress=Math.ceil(anim.progress()*100);
//                     if(progress!=currentprogress){
//                         currentprogress=progress;
//                         gsap.to(videoDivRef.current[videoid],{
//                             width:window.innerWidth<760?'10vw':window.innerWidth<1200?'10vw':'4vw'
//                         })
//                         gsap.to(span[videoid],{
//                             width:`${currentprogress}%`,
//                             backgroundColor:'white'
//                         })
//                     }
                    
//                 },
//                 onComplete: () => {
//                     if(isPlaying){
//                         gsap.to(videoDivRef.current[videoid],{
//                             width:'12px'
//                         })
//                         gsap.to(span[videoid],{
//                             backgroundColor:'#afafaf'
//                         })
//                     }

//                 }
//             })
//             if(videoid===0){
//                 anim.restart();
//             }
//             const animupdate=()=>{
//                 anim.progress(videoRef.current[videoid].currentTime/hightlightsSlides[videoid].videoDuration)
//             }
//             if(isPlaying){
//                 gsap.ticker.add(animupdate)
//             }else{
//                 gsap.ticker.remove(animupdate)
//             }
//         }

//     }, [videoid, startplay])
//     const handleProcess = (type, i) => {
//         switch (type) {
//             case 'video-end':
//                 setvideo((prev) => (
//                     { ...prev, isEnd: true, videoid: i + 1 }))
//                 break;
//             case 'video-last':
//                 setvideo((pre) => ({ ...pre, isLastvideo: true }))
//                 break;
//             case 'video-reset':
//                 setvideo((pre) => ({ ...pre, isLastvideo: false, videoid: 0 }))
//                 break;
//             case 'play':
//                 setvideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
//                 break;
//             case 'pause':
//                 setvideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
//                 break;
//             default:
//                 return video;
//         }
//     }
//     return (
//         <>
//             <div className='flex items-center'>
//                 {hightlightsSlides.map((list, i) => {
//                     return (
//                         <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
//                             <div className="video-carousel_container">
//                                 <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
//                                     <video id='video' playsInline={true} className={`${list.id===2&&'translate-x-44'} pointer-events-none`}preload='auto' muted ref={(el) => (videoRef.current[i] = el)} onPlay={() => { setvideo((currentvideo) => ({ ...currentvideo, isPlaying: true })) }} onLoadedMetadata={(e) => handleloadedmeta(i, e)} onEnded={()=>{
//                                         i!==3?handleProcess('video-end',i):handleProcess('video-last')
//                                     }}>
//                                         <source src={list.video} type="video/mp4" />
//                                     </video>
//                                 </div>
//                                 <div className='absolute top-12 left-[5%] z-10'>
//                                     {list.textLists.map((text) => {
//                                         return (
//                                             <p key={text}
//                                                 className='md:text-2xl text-xl font-medium '
//                                             >
//                                                 {text}
//                                             </p>
//                                         )

//                                     })}

//                                 </div>

//                             </div>

//                         </div>
//                     )
//                 })}

//             </div>
//             <div className='relative flex-center mt-10'>
//                 <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
//                     {
//                         videoRef.current.map((_, i) => (
//                             <span key={i} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer' ref={(el) => (videoDivRef.current[i] = el)} >
//                                 <span className="absolute h-full w-full rounded-full" ref={(el) => (videoSpanRef.current[i] = el)} />
//                             </span>
//                         ))
//                     }
//                 </div>
//                 <button className='control-btn'>
//                     <img src={isLastvideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastvideo ? 'replay' : !isPlaying ? 'play' : 'pause'} onClick={
//                         isLastvideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') : () => handleProcess('pause')} />
//                 </button>

//             </div>

//         </>

//     )
// }

// export default Videocarousal
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  // video and indicator
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    // slider animation to move the video out of the screen and bring the next video in
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
    });

    // video animation to play the video when it is in the view
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // mobile
                  : window.innerWidth < 1200
                  ? "10vw" // tablet
                  : "4vw", // laptop
            });

            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // vd id is the id for every video until id becomes number 3
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel
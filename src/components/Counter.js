import React, { useRef } from 'react'
import './Counter.css'

export default function Counter() {
  const ref = useRef();
  const stream = new MediaStream();
      
  const peer = new RTCPeerConnection({
    iceServers: [{
      urls: [
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
        ],
    }],
  })
  peer.ontrack = (ev) => {
    console.log(ev, 
      ev.track.getSettings(),
      ev.track.getCapabilities(),
      ev.track.getConstraints(),
    );

    const track = ev.track;
    const constraints = {
      // width: {min: 640, ideal: 1280},
      // height: {min: 480, ideal: 720},
      // advanced: [
      //   {width: 1920, height: 1280},
      //   {aspectRatio: 1.333}
      // ]
      
    };

    track.applyConstraints(constraints)

    stream.addTrack(track);
    const element = ref.current;
    try {
      element.srcObject = stream;
    } catch (error) {
      element.src = URL.createObjectURL(stream)
    }

    setTimeout(() => {
      const settings = stream.getVideoTracks()[0].getSettings();
      console.log(settings);
    }, 10000)

    // console.log(stream, peer);
    // const settings = stream.getVideoTracks()[0].getSettings();
    // console.log(settings);
  }
  peer.onicecandidate = async (ev) => {
    if (ev.candidate === null) {
      const response = await fetch(
        `https://gunk.partiallystapled.com/sdp/gxti`,
        {
          method: 'POST',
          // mode: 'no-cors',                                                     
          body: JSON.stringify(
            peer.localDescription
          ),
        }
      );
      const data = await response.json();
      peer.setRemoteDescription(new RTCSessionDescription(data))
    }
  }
  peer
    .createOffer({offerToReceiveVideo: true, offerToReceiveAudio: true})
    .then(d => peer.setLocalDescription(d));

  return (
    <div className="counter">
      <video
        ref={ref}
        autoPlay
        muted
        controls
        style={
          {
            width: '900px',
            height: '600px',
          }
        }
      />
    </div>
  )
}
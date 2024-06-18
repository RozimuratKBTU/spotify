import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css';

const MusicPlayer = ({ src, onNext, onPrevious }) => {
    return (
        <AudioPlayer
            src={src}
            onPlay={() => console.log('Playing')}
            onPause={() => console.log('Paused')}
            onEnded={onNext}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={onNext}
            onClickPrevious={onPrevious}
            className="my-custom-player"
        />
    );
};

export default MusicPlayer;

import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {

    const VideoItem = props.videos.map((data) => {
        return ( 
            <VideoListItem 
                key = {data.etag} 
                video = {data} 
                onVideoClick = {props.onVideoSelect} />
        
        );

    })

    
    return (
        <ul className="col-md-4 list-group">
        {VideoItem}
        </ul>
    );

}

export default VideoList;
import React from 'react'

const LazyImage = (props) => {
    const { url, width, height } = props;

    return (
        <img src={url} width={width} height={height} alt='' />
    )
}

export default LazyImage
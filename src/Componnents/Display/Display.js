import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Display = (props) => {
    const { picture, covor, name, publist, readTime, blogTitle,bookmarkbtn } = props.blog
    return (
        <div className='container'>

            <img className='img' src={picture} alt="" />
            <div className='blog-container' >
                <div>
                    <img className='cover-img' src={covor} alt="" srcset="" />
                </div>
                <div>
                    <p className='name'>{name}</p>
                    <p className='publist'>{publist}</p>
                </div>
                <div className='bookmark'>
                    <p>{readTime} min read </p>
                    <button onClick={() =>bookmarkbtn(readTime)} className='btn'><FontAwesomeIcon icon={faBookmark} /> </button>
                    
                </div>

            </div>
            <h4 className='title'>{blogTitle}</h4>
            <a className='ank' href="http://">Mark as read</a>
        </div>

    )
}
export default Display;
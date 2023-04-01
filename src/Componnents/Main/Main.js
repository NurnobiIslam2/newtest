import React, { useEffect, useState } from 'react';

import Bookmark from '../Bookmark/Bookmark';
import './Main.css'
import Display from '../Display/Display';



const Main = ({bookmarkbtn}) => {
    const [blogs, setBlogs] = useState([])
   
   
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
   
    return (
        <div>
            <div className='main-container'>
                <div>
                    {
                            blogs.map(blog => <Display
                            blog={blog} bookmarkbtn={bookmarkbtn}></Display>)
                    }
                </div>
             
                    <Bookmark></Bookmark>
             
                
            </div>

        </div>
    );
};


export default Main;
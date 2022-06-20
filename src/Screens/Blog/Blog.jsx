import { faHeart, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Blog.css'

export default function Blog() {
  return (
    <main className="blog-section container-padding">
        <h1 className="main-title">Blog</h1>
        <img src="/images/blog/blog.png" alt="" className="blog-banner-img" />
        <p className="section-subtitle">
            To absolve you from this problem Kalpataru offers you Internet Share Trading through which you can trade and transact on your P.C. 
            (Personal Computer) from anywhere like Office, Car Bus, Train, Plane or even from your living room. Not only this you can also trade in share 
            Commodity Derivative, Currency Derivative. You can avail so many services and conveniences offered by Kalpataru.
            <br /> <br />
            Perfect transparency in accounting personalized services, intelligent suggestions, satisfying solution, D.P. accounts holding, and Portfolio Investment advice just by one “Click”.
        </p>
        <div className="like-and-comment">
            <FontAwesomeIcon className='icons' icon={faHeart} />
            <FontAwesomeIcon className='icons' icon={faMessage}/>
        </div>
        <h3 className="section-title">Leave a Reply</h3>
        <form className="blog-form">
            <input type="text" className='blog-input' />
            <button className="btn-blog">Post</button>
        </form>
    </main>
  )
}

import React from 'react'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 my-3 mx-4 px-2 py-2 d-inline-block" style={{maxWidth:'345px'}}>
  <img src={src?src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlVy9XmQxuFX-m1MotTJfzvmooLdDu3B5Vg&s'} style={{height:"200px",width:"320px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):'Details are currently unavailable. Please check the full article for more information.'}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default NewsItem

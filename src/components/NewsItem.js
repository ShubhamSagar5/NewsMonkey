import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        const {title,desc,imgUrl,newsUrl,author,date} = this.props
        return (
            <div >
                
                <div className="card" >
                    <img src={imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toDateString()}</small></p>
                            <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">ReadMore</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
   
    static defaultProps={
        pageSize : 8,
        country: 'in',
        category:"general"
    }
    static propTypes={
        pageSize:PropTypes.number,
        country:PropTypes.string,
        category:PropTypes.string
    }

    constructor(props) {
        super(props)

        this.state = {
            articles:[],
            loading: false,
            page:1
           
          
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4648cadde84d4e1eb767738d2e1993ae&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)

        this.setState({articles:parseData.articles,totalResults:parseData.totalResults})

    }

    nextClick = async() =>{
        console.log("this is next news")

        if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4648cadde84d4e1eb767738d2e1993ae&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parseData = await data.json()

        
        this.setState({
            page : this.state.page+1,
            articles:parseData.articles,
            loading:false
        })
    }
    }

    previousClick = async ()=>{
        console.log("this is prvious news")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4648cadde84d4e1eb767738d2e1993ae&page=${this.state.page1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parseData =await data.json()

        this.setState({
            page : this.state.page-1,
            articles:parseData.articles,
            loading:false
        })
    }
    


    render() {
        return (
            <div className="container my-3">
               
                
                <h1 className="text-center" style={{margin:'35px'}}>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row " >
                    {!this.state.loading && this.state.articles.map((element) => {
                        let { url, title, description, urlToImage ,author,publishedAt } = element

                        return <div className="col-md-4 my-3" key={url}>
                            <NewsItem title={title?title.slice(0,45):""} desc={description?description.slice(0,80):""} imgUrl={urlToImage?urlToImage:"https://fdn.gsmarena.com/imgroot/news/23/04/realme-narzo-n55-charging-speed/-952x498w6/gsmarena_001.jpg"} newsUrl={url} author ={author} date={publishedAt}></NewsItem>
                        </div>
                    })}
                </div>
                <div className="conatiner d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousClick}>&larr;Previous</button>
                <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.nextClick}>Next &rarr;</button>
                </div>
            </div>
        
        )
    }
}

export default News
import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page:1,
      
    };
  }


  async componentDidMount() {
    let url =
      ` https://newsapi.org/v2/top-headlines?country=us&apiKey=1bfc833a69e3484a8087093a95733db4&page=${this.state.page}&pageSize=20`;
    console.log("cdm");
    let data = await fetch(url);
    let personalData = await data.json();
    console.log(personalData);
    this.setState({ articles: personalData.articles ,totalResults:personalData.totalResults});
  }

  PrevHandler=async()=>{
    console.log("previous")
    
    let url =
      ` https://newsapi.org/v2/top-headlines?country=us&apiKey=1bfc833a69e3484a8087093a95733db4&page=${this.state.page-1}&pageSize=20`;
    console.log("cdm");
    let data = await fetch(url);
    let personalData = await data.json();
    console.log(personalData);
    

    this.setState({
      page:this.state.page - 1,
      articles: personalData.articles
    })
  }

  NextHandler=async()=>{
    console.log("next Handler")
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url =
      ` https://newsapi.org/v2/top-headlines?country=us&apiKey=1bfc833a69e3484a8087093a95733db4&page=${this.state.page+1}&pageSize=20`;
    console.log("cdm");
    let data = await fetch(url);
    let personalData = await data.json();
    console.log(personalData);
    

    this.setState({
      page:this.state.page + 1,
      articles: personalData.articles
    })
  }
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Insta News</h1>

          <div className="row">
            {this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele.title ? ele.title.slice(0, 45) : ""}
                    description={
                      ele.description ? ele.description.slice(0, 88) : ""
                    }
                    imageUrl={ele.urlToImage}
                    url={ele.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" onClick={this.PrevHandler} class="btn btn-dark">
          &laquo; Previous
          </button>
          <button type="button" onClick={this.NextHandler} class="btn btn-dark">
            Next &raquo;
          </button>
        </div>
      </>
    );
  }
}

export default News;

import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <>
        <div className="card my-2" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://i.guim.co.uk/img/media/7078e0cdb4048e958627c7ff2f9ef29ea8935e50/0_59_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1bc32c37514c57cee9e70e99eba91ef7"
                : imageUrl
            }
            className="card-img-top"
            height="200px"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} className="btn btn-dark ">
              Read more
            </a>
          </div>
        </div>
        
      </>
    );
  }
}

export default NewsItem;

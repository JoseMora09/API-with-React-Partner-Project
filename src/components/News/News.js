import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
          news: [],
        };
      }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-10-29&sortBy=publishedAt&apiKey=c9c78e18d7cd4be597ece5143d89ed91';

        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) =>(
           <NewSingle key={item.url} item={item} /> 
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
} 

export default News;

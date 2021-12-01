import React, {Component} from 'react';
import {DetailsList} from '@fluentui/react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
          powerPlants: [],
        };
      }

    componentDidMount() {
         const url = 'https://api.eia.gov/category/?api_key=1d97ccab56e4ea052f94379e9adb787a&category_id=902944';

        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                powerPlants: data.category.childcategories
            })
        })
        .catch((error) => console.log(error));
    }


    render() {
        return (
            <DetailsList
            items={this.state.powerPlants}
            columns={[
              {
                name: 'categoryID',
                fieldName: 'category_id',
                minWidth: 120,
                maxWidth: 120,
                isResizable: true,
              },
              {
                name: 'Name',
                fieldName: 'name',
                isResizable: true,
              }
            ]}
            setKey="set"
          />
        );
    }

} 

export default News;

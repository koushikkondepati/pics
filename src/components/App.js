import React from 'react';
import SearchBar from './SearchBar';
import CallApi from '../Api/CallApi';
import ImageList from './ImageList';


class App extends React.Component
{
    state={images:[],totalimages:0};
    onSearchSubmit = async(val) =>
    {
        //console.log(val);
        const response = await CallApi.get('/search/photos',{
            params:{query:val}
    });
    console.log(response);
    this.setState({
        totalimages:response.data.total
    })
    this.setState({
        images:response.data.results
    })
    
    };

    render(){
        return(
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.totalimages} images
                <ImageList images={this.state.images} />
                
            </div>
            
        )
    };
};
   

export default App;
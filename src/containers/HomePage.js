import React from 'react'
import HomeSearch from '../components/Home/HomeSearch'


class HomePage extends React.Component{

    constructor(props){
        super(props)
        console.log("HOMe",this.props)
    }

    render(){
        return(
            <HomeSearch>
                
            </HomeSearch>
        )
    }
}

export default HomePage
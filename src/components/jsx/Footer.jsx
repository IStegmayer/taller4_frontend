import React, { Component } from 'react';
import '../css/footer.css'


export default class Footer extends Component {

    constructor(props){
        super(props);
        
    }

    render() {

        return (
            <div>
                <footer className="footerino">
                    <p className="pull-right ppp">Powered by "O Mais Pintudos"</p>
                </footer>
            </div>
        )
    }



}

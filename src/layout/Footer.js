import React, { Component } from 'react'

export class Footer extends Component {

    //version = 1;

    state = {
        version: 0
    };


    //comp inséré dans le VDOM
    componentDidMount() {
        //console.log('didmount');
    }

    //comp mis à jour dans le VDOM
    componentDidUpdate() {
        //console.log('didupdate');
    }

    //comp supprimé du VDOM
    componentWillUnmount() {
        //console.log('willunmount');
    }

    onClickMore = () => {
        console.log('click', this);
        //this.state.version = this.state.version + 1;
        this.setState({ version: this.state.version + 1 });
    }

    //insertion / maj du comp dans le VDOM
    render() {
        //console.log('render');
        return (
            <footer>
                &copy; formation ReactJS version {this.state.version}
                <button onClick={this.onClickMore} >+</button>
            </footer>
        )
    }
}

export default Footer;

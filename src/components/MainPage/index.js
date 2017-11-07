import React, { Component } from 'react';
import { connect } from 'dva-no-router';
import { Button } from 'antd-mobile';


class MainPage extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Button type="primary">primary</Button>
        )
    }
}

// function mapStateToProps({ }) {
//     return {

//     };
// }

export default connect()(MainPage);;

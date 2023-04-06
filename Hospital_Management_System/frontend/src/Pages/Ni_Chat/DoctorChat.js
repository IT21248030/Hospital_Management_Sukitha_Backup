import React, { Component } from 'react';
import Header from '../../Component/Hedder/Hedder';
import Sidebar from '../../Component/SideBar/Sidebar';

class DoctorChat extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }



    render() {
        return (
            <div className='main-wrapper'>
                <div className='app-header'>
                    <Header />

                </div>
                <div className='app-body'>
                    <div className='body-wrapper'>
                        <div className='app-sidebar'>
                            <Sidebar />
                        </div>
                        <div className='app-content'>

                            hiiii

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorChat;
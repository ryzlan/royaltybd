import React, { Component } from 'react';

import {connect } from 'react-redux'

export default function(WrappedComponent){
    class Authenticate extends Component{
        componentWillMount(){
            if(this.props.authenticated  === null ){
               this.props.history.push('/NotAuthorized');
               //this.context.router.history.push('/')
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.props.history.push('/NotAuthorized');
               // this.context.router.history.push('/')
            }
        }

        render(){
            
            if(this.props.authenticated){
                return <WrappedComponent   {...this.props }/>
            }
            return null;
        }

    }
    const mapStateToProps = state =>{
        return {
            authenticated:this.state.auth
        }
    }

    return connect(mapStateToProps)(Authenticate)


}
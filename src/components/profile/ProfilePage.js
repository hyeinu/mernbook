import React, { Component } from 'react';
import UserStore from '../../stores/UserStore'
import ProfileForm from './ProfileForm'

export default class ProfilePage extends Component {
  constructor(){
    super();
    this.state = {
      profile: UserStore.get()
    }
  }
  render(){
    let { username, pic_url } = this.state
    return(
      <h1>Profile Page</h1>
    )
  }
}

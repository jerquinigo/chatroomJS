import React, {Component} from 'react';


class Login extends Component{


    login = (event) => {
        event.preventDefault()
        this.props.setUserName(event.target.username.value)
    }

    render(){

        return(
            <div id="login">
            <form onSubmit={this.login}>
                 <label>enter username</label>
                <input type="text" id="username" placeholder="enter a username"/>
                <input type="submit" value="login"/>
                </form>
                </div>
        )
    }
}

export default Login;
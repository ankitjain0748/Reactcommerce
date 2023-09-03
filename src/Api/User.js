import {Component} from 'react'
import Api from './Api';
class User extends Component{ 

    async register(form){ 
        return Api.post('user/signup', form)
    }
    async login(form){ 
        return Api.post('user/login', form)
    }
    
    // async getusers(key){ 
    //     return Api.post('regapi/listdata', key)
    // }
    // async usersget(){ 
    //     return Api.get('regapi/usersList')
    // }

}
export default User;
//import liraries
import LocalStorage from './localStorage'

//make this component available to the app
export default class User {

    static isAvailable = false
    static id = ''
    static firstName = ''
    static fullName = ''
    static lastName = ''
    static email = ''
    static phone = ''
    static address = ''

    static async getUserFromStore() {
        LocalStorage.getItemWithKey("user_data", (user) => {
            if(user) {
                User.setUser(user)
            }
        })
    }

    static getUser() {
        return {
            id: User.id,
            firstName: User.firstName,
            fullName: User.firstName ,
            lastName: User.lastName,
            email: User.email,
            phone: User.phone,
            address: User.address,
            isAvailable : User.isAvailable,
        }
    }

    static setUser(user) {
        
        User.id = user.id
        User.firstName = user.firstName
        User.lastName = user.lastName
        User.fullName = User.firstName 
        User.email = user.email
        User.phone = user.phone
        User.address = user.address
        User.isAvailable = user.isAvailable
    }

    static async storeUser(userData = null) {
        if (userData) {
            const user = {
                id: userData.id,
                firstName: userData.firstName,
                fullName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phone: userData.phone,
                address: userData.address,
                isAvailable : userData.isAvailable,
            }
           
            User.setUser(user)
            LocalStorage.setItemWithKeyAndValue("user_data", user).then((response) => {
                // alert("aaaaaaaaaaa")
                return response
            });
            return true;
        }
        
    }

    static resetUser() {
        User.isAvailable = false
        User.id = ''
        User.firstName = ''
        User.lastName = ''
        User.email = ''
        User.phone = ''
        User.address = ''
        User.fullName = ''
    }

    static async deleteUser() {
        User.resetUser()
        LocalStorage.setItemWithKeyAndValue("user_data", null)
    }
}

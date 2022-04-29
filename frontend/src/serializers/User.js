export default class UserSerializer {
    static serializeUser(values){
        return {
            fname: values.firstName,
            lname: values.lastName,
            DOB: values.dateOfBirth,
            address: values.address,
            phone_number: values.phoneNumber,
            username: values.username,
            email: values.email,
            password: values.password,
            user_type: values.userType == 'Mechanic' ? 'M' : 'C'
        }
    }

}
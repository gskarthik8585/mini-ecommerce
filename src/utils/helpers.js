
import { usersList } from '../mockresponse'

export const checkIfUserIsValid = (params) => {
    const index = usersList.findIndex(user => user.email === params.email && user.password === params.password)
    if (index > -1) {
        return usersList[index]
    } else {
        return false
    }
}
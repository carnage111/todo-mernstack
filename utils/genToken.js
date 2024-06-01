import jwt from "jsonwebtoken";


//here we are generating a token for the user, sign() is a method in jwt that is used to generate a token, it takes the payload and the secret key as arguments, the payload is the data that we want to store in the token, the secret key is used to generate the token, the secret key is used to sign the token, so that the token can be verified later, the third argument is the options object, in which we can specify the expiresIn property, which is used to specify the time for which the token is valid, the time is specified in seconds, so 24*60*60 is 24 hours, so the token will be valid for 24 hours
export const genToken = async(id) => {
    return await jwt.sign({id},"SecretKey", {
        expiresIn: 24*60*60
    })
}

const jwt = require('jsonwebtoken');

//if i insert the middleware before the call, we can ensure that the request is properly authorized
module.exports = function(request, response, next) {
    //get token out of cookie and request - header/request header/cookie
    const token = request.cookies.token;
    //if no token, reject the request
    if (!token) {
        response.status(401).send('Unauthorized: No token provided');
    } else {
        //decrpyt the token and check the token is valid and not expired 
        jwt.verify(token, "SUPER_SECRET", function(err, decoded) {
            if (err) {
                response.status(401).send('Unauthorized: Invalid token');
            } else {
                //add 'username' as part of the request object so that the next function can use it
                request.username = decoded.username;
                //next calls the following function in the route chain
                next();// we do not stop the execution and continue find the next matching url
            }
        });
    }
}
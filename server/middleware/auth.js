import jwt from 'jsonwebtoken';

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" "[1]);

        let decodedData; // data from token

        if (token) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id; // optional chaining
        }

        next(); // complete the user action. e.g. user clicks like button => auth middleware => if sucessful (verified user) => like controller

    } catch (error) {
        console.log(error);
    }
};

export default auth;
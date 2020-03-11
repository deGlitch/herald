"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = (scheme) => {
    return (req, res, next) => {
        const { error } = scheme.validate(req);
        if (error) {
            res.statusCode = 400;
            res.json({
                error: error.message
            });
            next(error);
        }
        next();
    };
};

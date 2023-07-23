module.exports = function softMiddleware(req, res, next) {
    res.locals._soft = {
        enabled: false,
        type: 'default',
    };

    if (req.query.hasOwnProperty('_soft')) {
        Object.assign(res.locals._soft, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();
};

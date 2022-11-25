import express from 'express';

const validateParameters = (
    _req: express.Request,
    _res: express.Response,
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
): void => {
    if (!_req.query.filename || !_req.query.width || !_req.query.height) {
        _res.send(
            'Missing Parameters..Please make sure that you entered all the needed parameters (filename,width and height).'
        );
    } else if (
        !(typeof _req.query.filename === 'string') ||
        isNaN(Number(_req.query.width)) ||
        isNaN(Number(_req.query.height))
    ) {
        _res.send(
            'Invalid Values of the parameters.' +
                'Please make sure that you entered all parameters values in the correct format.'
        );
    } else {
        next();
    }
};

export default validateParameters;

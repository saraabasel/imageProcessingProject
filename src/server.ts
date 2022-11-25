import express from 'express';
import parameterValidation from './middleware/parameterValidation';
import resizeImage from './controllers/imageProcessing';

const app: express.Application = express();
const port = 3000;

// Handling '/images/resizing' Request
app.get('/images/resizing', parameterValidation, async (_req, _res) => {
    const generatedImageName = resizeImage(
        _req.query.filename as string,
        Number(_req.query.width as string),
        Number(_req.query.height as string)
    );
    _res.sendFile(await generatedImageName, { root: './processedImages' });
});

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});

app.use((_req, _res) => {
    _res.send(`Unsupported endpoint..Please make sure that you are using the 
   correct endpoint "http://localhost:${port}/images/resizing"`);
});

export default app;

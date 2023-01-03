import express from 'express';
import images from './api/images';
import listImagesRouter from './api/imagelist';

const routes = express.Router();

routes.use('/images', images);
routes.use('/listImages', listImagesRouter);

export default routes;

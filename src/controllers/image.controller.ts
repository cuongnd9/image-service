import { Request, Response } from 'express';
import imageService from '../services/image.service';

class ImageController {
  uploadSingle(req: Request, res: Response) {
    return imageService.uploadSingleImage();
  }
}

export default ImageController;

import { Request, Response } from 'express';
import imageService from '../services/image.service';

class ImageController {
  uploadSingle(req: Request, res: Response) {
    const { file } = req;
    return imageService.uploadSingleImage(file);
  }
  uploadMulti(req: Request, res: Response) {
    const { files } = req;
    return imageService.uploadMultiImage(files);
  }
}

export default ImageController;

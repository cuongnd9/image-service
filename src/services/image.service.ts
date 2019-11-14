import fs from 'fs';
import cloudinary from '../helpers/cloudinary';

class ImageService {
  static async uploadSingleImage(file: any) {
    const result = await cloudinary(file.path);
    await fs.unlinkSync(`${__dirname}/../../${file.path}`);
    return result;
  }
  static async uploadMultiImage(files: any) {
    const promiseList = files.map(async (file: any) => {
      const result = await cloudinary(file.path);
      await fs.unlinkSync(`${__dirname}/../../${file.path}`);
      return result;
    });
    const data = await Promise.all(promiseList);
    return data;
  }
}

export default ImageService;

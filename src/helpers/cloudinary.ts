import dotenv from 'dotenv';
dotenv.config();
import { v2 as service } from 'cloudinary';
import config from '../config';

service.config(config.cloudinaryUrl);

export default function cloudinary(path: string): Promise<any> {
  return new Promise((resolve, reject) => {
    service.uploader.upload(path, (error: any, result: any) => {
      if (error) {
        return reject(error);
      }
      resolve({
        url: result.url,
        id: result.public_id
      });
    });
  });
}

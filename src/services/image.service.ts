class ImageService {
  static uploadSingleImage(file: any) {
    console.log(file, '--------------------file');
    return 'upload single image';
  }
  static uploadMultiImages(files: any) {
    console.log(files, '..........................files');
    return 'upload multi image';
  }
}

export default ImageService;

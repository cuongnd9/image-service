export default {
  port: process.env.PORT || 8000,
  cloudinaryUrl: {
    cloud_name: process.env.CLOUD_NAME || 'cloud_name',
    api_key: process.env.API_KEY || 'api_key',
    api_secret: process.env.API_SECRET || 'api_secret'
  }
};

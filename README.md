# image-service

🚀🖼️ A minimal service for uploading image.

*Easy way to upload image on Cloudiary.*

## Prepare

- You need a [Cloudiary](https://cloudinary.com) account.
- Get `CLOUDINARY_URL` from [Cloudiary Dashboard](https://cloudinary.com/console)

<img src="./images/cloudiary.png" alt="cloudiray" width=600 />

## Usage

**headers**

```
{
  cloudiary_url: <Your CLOUDINARY_URL>
}
```

### `Upload single image`

**POST** /api/image/upload-single

**body**

```
{
  image: <Your image>
}
```

### `Upload multi image`

**POST** /api/image/upload-multi

**body**

```
{
  images: <Your images>
}
```

Build with 🙌 + ☕

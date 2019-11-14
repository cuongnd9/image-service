# image-service

🚀🖼️ A minimal service for uploading image.

_Easy way to upload image on Cloudiary._

![cat](./images/cat.gif)

## Prepare

- You need a [Cloudiary](https://cloudinary.com) account.
- Get `cloud_name`, `api_key`, `api_secret` from [Cloudiary Dashboard](https://cloudinary.com/console)

<img src="./images/cloudiary.png" alt="cloudiray" width=600 />

## Usage

**domain**: https://image-servicee.herokuapp.com/

**headers**

```
{
  cloud_name: <Your cloud_name>
  api_key: <Your api_key>
  api_secret: <Your api_secret>
}
```

---

### `Upload single image`

**POST** /api/image/upload-single

**body**

```
{
  image: <Your image>
}
```

---

### `Upload multi image`

**POST** /api/image/upload-multi

**body**

```
{
  images: <Your images>
}
```

Build with 🙌 + ❤️

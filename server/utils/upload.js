import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// console.log("upload k andr aaya");

const storage = new GridFsStorage({
  url: `mongodb://${username}:${password}@ac-s9iqz6l-shard-00-00.6nj2mgk.mongodb.net:27017,ac-s9iqz6l-shard-00-01.6nj2mgk.mongodb.net:27017,ac-s9iqz6l-shard-00-02.6nj2mgk.mongodb.net:27017/?ssl=true&replicaSet=atlas-q6qsjh-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }

    console.log("file format is png");

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`
    };
  }
});

const upload = multer({ storage });

export default upload;

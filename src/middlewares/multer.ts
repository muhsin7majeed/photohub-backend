import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

import { CustomRequest } from "@_types/types";

const mediaStorage = multer.diskStorage({
  destination: (req: CustomRequest, file, cb) => {
    const userId = req.user?.userId;
    const userFolderPath = `uploads/post_medias/${userId}`;

    // Create the folder if it doesn't exist
    fs.mkdirSync(userFolderPath, { recursive: true });

    // Set the file path for storage (no subdirectories)
    cb(null, userFolderPath);
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded file (e.g., using UUID)
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;

    // Set the unique filename for the file
    cb(null, uniqueFilename);
  },
});

const uploadMedia = multer({ storage: mediaStorage });

export default uploadMedia;

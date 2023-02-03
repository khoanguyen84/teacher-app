import axios from 'axios';
import { CLOUDINARY_UPLOAD_API_URL } from '../ultility/common';

const Unsigned_Uploading = "a09ikbyc";
class FileService {
    static uploadImage(imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", Unsigned_Uploading);
        return axios.post(CLOUDINARY_UPLOAD_API_URL, formData);
    }

    // static destroyImage(filename) {
    //     const timestamp = new Date().getTime();
    //     const public_id = filename;
    //     const api_key = "338315595645698";
    //     const api_secret_key = "ymunfk97k5CSvTXtHkL5PSTWCJ4";
    //     const shaString = `public_id=${public_id}&timestamp=${timestamp}${api_secret_key}`;
    //     const signature = sha1(shaString)
    //     const formData = new FormData();
    //     formData.append("public_id", public_id);
    //     formData.append("signature", signature);
    //     formData.append("api_key", api_key);
    //     formData.append("timestamp", timestamp);
    //     return axios.post(CLOUDINARY_DESTROY_API_URL, formData, {
    //         'Access-Control-Allow-Origin': '*'
    //     });
    // }
}

export default FileService;
import { FLICKR_API_HOST, FLICKR_API_KEY } from "../services/config"
import { get } from "./http"

const USER_GALLERY_LIST_METHOD = "flickr.galleries.getList";
const GALLERY_PHOTOS_LIST_METHOD = "flickr.galleries.getPhotos";


export const getGalleries = (userId) => {
    return get(`${FLICKR_API_HOST}?method=${USER_GALLERY_LIST_METHOD}&api_key=${FLICKR_API_KEY}&user_id=${userId}`);
}

export const getPhotos = (galleryId) => {
    return get(`${FLICKR_API_HOST}?method=${GALLERY_PHOTOS_LIST_METHOD}&api_key=${FLICKR_API_KEY}&gallery_id=${galleryId}`);
}
import { getGalleries, getPhotos } from "../helpers/backend"
import {formatGalleryData, formatPhotoData} from "../helpers/formatter";

const FLICKR_TARGET_USER = "66956608@N06"

export const getGalleryList = () => {
    return getGalleries(FLICKR_TARGET_USER).then((data) => {
        return formatGalleryData(data);
    });
}

export const getPhotoList = (galleryId) => {
    return getPhotos(galleryId).then((data) => {
        return formatPhotoData(data);
    });
}
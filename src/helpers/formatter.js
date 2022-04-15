

const mapGalleryData = (gallery) => {
    return {
        name : gallery.title._content,
        route : `/gallery/${gallery.gallery_id}`
    }
}

const mapPhotoData = (photo) => {
    return {
        name : photo.title,
        src : `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    }
}

export const formatGalleryData = (data) => {
    return data.galleries.gallery.map((gallery) => mapGalleryData(gallery));
}

export const formatPhotoData = (data) => {
    return data.photos.photo.map((photo) => mapPhotoData(photo)); 
}
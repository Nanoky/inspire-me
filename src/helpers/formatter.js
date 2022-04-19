

const mapGalleryData = (gallery, index) => {
    return {
        name : gallery.title._content,
        route : `/gallery/${gallery.gallery_id}/${index}`
    }
}

const mapPhotoData = (photo) => {
    return {
        name : photo.title,
        src : `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    }
}

export const formatGalleryData = (data) => {
    return data.galleries.gallery.map((gallery, index) => mapGalleryData(gallery, index));
}

export const formatPhotoData = (data) => {
    return data.photos.photo.map((photo) => mapPhotoData(photo)); 
}
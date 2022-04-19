import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import SkeletonTheme from "react-loading-skeleton/dist"
import { log } from "../../helpers/logger";
import 'react-loading-skeleton/dist/skeleton.css'


export const GalleryImage = ({ source, onLoad, ...props }) => {

    /* return (loaded) ? (
        <Image src={source} fluid onLoad={imageLoaded} />
    ) : (
        <SkeletonTheme width="100%" height="150px">
            <Skeleton />
        </SkeletonTheme>

    )
        ; */
    return (
        <Image src={source} fluid {...props} onLoad={() => {
            onLoad(source);
        }} />
    )
}
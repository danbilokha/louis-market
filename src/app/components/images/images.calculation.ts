import {LouisImage} from '@dictionaries/image.dictionary';
import {Image} from 'angular-modal-gallery';

const louisImageMapToModalGalleryImage = (images: Array<LouisImage>): Array<Image> =>
    images.map(image => new Image(
        image.binary,
        null,
        image.name,
        null
        )
    );

export {louisImageMapToModalGalleryImage};

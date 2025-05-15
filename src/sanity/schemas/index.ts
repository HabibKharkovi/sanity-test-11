import footer from './documents/footer';
import header from './documents/header';
import page from './documents/page';
import route from './documents/route';
import button from './objects/button';
import image from './objects/image';
import imageWithOverlayTextAndButton from './objects/imageWithOverlayTextAndButton';
import imageWithTitle from './objects/imgWithTitle';
import navigation from './objects/navigation';
import textAndBtn from './objects/textAndButton';
import { sections } from './sections';

const objects = [...sections, button, image, textAndBtn, imageWithTitle, navigation, imageWithOverlayTextAndButton];
const documents = [page, route, header, footer];
export const schemaTypes = [...objects, ...documents];

import type { GetImageResult } from "astro";
import { getImage } from "astro:assets";

interface AlbumMap {
  albumName: string;
  galleryUrl: string;
  imgPath: string;
  dateTaken?: string;
}

const map: AlbumMap[] = [
  {
    albumName: "Sofa & Bible",
    galleryUrl: "/gallery/sofaxbible",
    imgPath: "/image/polariod/JAN_2024.png",
    dateTaken: "JAN 2024",
  },
  {
    albumName: "OCT 2024",
    galleryUrl: "/gallery/sofaxbible",
    imgPath: "/image/polariod/OCT_2024.png",
    dateTaken: "OCT 2024",
  },
];

export default map;

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
    imgPath: "/images/polariod/JAN_2024.png",
    dateTaken: "JAN 2024",
  },
  {
    albumName: "OCT 2024",
    galleryUrl: "/gallery/mmuky_OCT2024",
    imgPath: "/images/polariod/OCT_2024.png",
    dateTaken: "OCT 2024",
  },
];

export default map;

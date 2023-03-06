import React from 'react'
import CreatorsList from '../components/CreatorsList';

const CREATORS_DATA = [
  {
    id: "u1",
    name: "Ivleev K",
    imgURL:
      "https://avatars.dzeninfra.ru/get-zen_doc/4034194/pub_60be7067eeb0cd26739edaff_60be87de2b92e05b9b4afc9f/scale_1200",
  },
  {
    id: "u2",
    name: "Batali M",
    imgURL:
      "https://img.apmcdn.org/30dbb00e67e7792b5aba0ba1fa10156b05f68a9d/uncropped/9a2eba-splendid-table-mario-batali-1.jpg",
  },
];

function Creators() {
  return (
      <CreatorsList users={CREATORS_DATA} />
  )
}

export default Creators
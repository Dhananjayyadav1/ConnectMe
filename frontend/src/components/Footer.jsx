import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex flex-col bg-red-300 rounded-xl items-center text-lg justify-center pt-3 pb-3 pr-3 pl-3 gap-2.5 font-bold text-[#652121] text-center mt-6 -mb-2">
      <p>Shareme - Share with the world | All rights reserverd</p>
      <p className="flex gap-2.5 text-3xl">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer;

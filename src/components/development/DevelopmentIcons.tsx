import { IconType } from 'react-icons';
import { BiBath, BiBed } from 'react-icons/bi';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { TbToiletPaper } from 'react-icons/tb';

export const BedroomsIcon: IconType = (props) => {
  return <BiBed {...props} />;
};

export const BathroomsIcon: IconType = (props) => {
  return <BiBath {...props} />;
};

export const HalfBathroomsIcon: IconType = (props) => {
  return <TbToiletPaper {...props} />;
};

export const MT2Icon: IconType = (props) => {
  return <HiOutlineArrowsExpand {...props} />;
};

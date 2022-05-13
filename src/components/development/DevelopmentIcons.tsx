import { IconType } from 'react-icons';
import { BiBath, BiBed } from 'react-icons/bi';
import { IoExpand } from 'react-icons/io5';

export const BedroomsIcon: IconType = (props) => {
  return <BiBed {...props} />;
};

export const BathroomsIcon: IconType = (props) => {
  return <BiBath {...props} />;
};

export const MT2Icon: IconType = (props) => {
  return <IoExpand {...props} />;
};

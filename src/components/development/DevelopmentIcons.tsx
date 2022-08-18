import { IconType } from 'react-icons';
import { BsHouseDoorFill } from 'react-icons/bs';
import { FaShower } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { TbToiletPaper } from 'react-icons/tb';

export const BedroomsIcon: IconType = (props) => {
  return <IoBed {...props} />;
};

export const BathroomsIcon: IconType = (props) => {
  return <FaShower {...props} />;
};

export const HalfBathroomsIcon: IconType = (props) => {
  return <TbToiletPaper {...props} />;
};

export const MT2Icon: IconType = (props) => {
  return <BsHouseDoorFill {...props} />;
};

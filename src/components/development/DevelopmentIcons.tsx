import { IconType } from 'react-icons';
import { BiBath, BiBed } from 'react-icons/bi';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { TbToiletPaper } from 'react-icons/tb';

export const BedroomsIcon: IconType = (props) => {
  return <BiBed {...props} style={{ ...props.style, color: 'var(--nextui-colors-text)' }} />;
};

export const BathroomsIcon: IconType = (props) => {
  return <BiBath {...props} style={{ ...props.style, color: 'var(--nextui-colors-text)' }} />;
};

export const HalfBathroomsIcon: IconType = (props) => {
  return (
    <TbToiletPaper {...props} style={{ ...props.style, color: 'var(--nextui-colors-text)' }} />
  );
};

export const MT2Icon: IconType = (props) => {
  return (
    <HiOutlineArrowsExpand
      {...props}
      style={{ ...props.style, color: 'var(--nextui-colors-text)' }}
    />
  );
};

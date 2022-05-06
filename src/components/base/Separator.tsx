import { useTheme } from '@nextui-org/react';
import React, { CSSProperties, FC } from 'react';

interface SeparatorProps {
  showPrimaryExtra?: boolean;
  centerPrimaryExtra?: boolean;
  primaryExtraStyle?: CSSProperties;
}

const Separator: FC<SeparatorProps> = ({
  showPrimaryExtra,
  centerPrimaryExtra,
  primaryExtraStyle,
}) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: '100%',
        height: 5,
        borderBottom: `1px solid ${theme?.colors.gray300.value}`,
        position: 'relative',
      }}
    >
      {showPrimaryExtra !== false && (
        <div
          style={{
            position: 'absolute',
            top: 1,
            left: centerPrimaryExtra ? 'calc(50% - 15px)' : 0,
            backgroundColor: theme?.colors.secondary.value,
            width: 30,
            height: 4,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            ...primaryExtraStyle,
          }}
        />
      )}
    </div>
  );
};

export default Separator;

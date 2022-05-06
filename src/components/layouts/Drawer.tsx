import { AnimatePresence, motion } from 'framer-motion';
import React, { CSSProperties, FC } from 'react';

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
  contianerStyle?: CSSProperties;
  children?: React.ReactNode;
}

const Drawer: FC<DrawerProps> = ({
  isOpen,
  closeDrawer,
  contianerStyle,
  children,
}) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        height: '100vh',
        zIndex: 5000,
        ...contianerStyle,
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: '100vw',
            }}
            exit={{
              width: 0,
              transition: { delay: 0.1, duration: 0.3 },
            }}
            style={{
              position: 'absolute',
              height: '100vh',
              zIndex: 2000,
            }}
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              style={{
                height: '100vh',
              }}
            >
              {children}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              zIndex: 1000,
            }}
            onClick={closeDrawer}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Drawer;

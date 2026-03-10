'use client';
import { useState } from 'react';

import { Button } from '../buttons/Button';
import { Row } from '../containers/Flex';
import { Text } from '../text/Text';

interface ConfirmModalProps {
  message: string;
  color?: 'primary' | 'error' | 'info' | 'success';
  children: React.ReactNode;
  onConfirm?: () => any;
}

export const ConfirmModal = (props: ConfirmModalProps) => {
  const { message, children, onConfirm, color = 'primary' } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
    setIsOpen(false);
  };

  return (
    <div onClick={() => !isOpen && setIsOpen(true)}>
      {children}
      <dialog className="modal" open={isOpen}>
        <div className="modal-box w-80 space-y-8">
          <Text bold fs="lg" className="text-center">
            {message}
          </Text>
          <Row flexX="between">
            <Button type="button" color="accent" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="button" color={color} onClick={handleConfirm}>
              Confirm
            </Button>
          </Row>
        </div>
      </dialog>
    </div>
  );
};

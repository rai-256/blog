import { PopupWrapper } from './PopupWrapper';
import { InputNumber } from './InputNumber';
import { useRef } from 'react';

export const ImagePopup = ({ close }) => {
  const widthRef = useRef(null);
  const heightRef = useRef(null);

  const onClick = () => {
    addImage(widthRef.current.value, heightRef.current.value);
  };
  return (
    <PopupWrapper close={close} title="画像追加">
      <InputNumber ref={heightRef} label="高さ" />
      <InputNumber ref={widthRef} label="幅" />
    </PopupWrapper>
  );
};

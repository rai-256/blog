import { useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
export const PopupWrapper = ({ children, close, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickAwayRef = useClickAway(() => {
    setIsOpen(false);
  });
  const onClickCard = () => {};
  const onCloseButton = () => {
    setIsOpen(false);
  };
  const closePopup = () => {
    close();
  };
  return (
    //半透明にしたい
    <div className=" min-h-screen min-w-screen bg-gray-300/40 fixed z-100 top-0 left-0  justify-center items-center flex">
      <div className="rounded-xl bg-white relative p-10">
        <div className="absolute right-0 -top-4" onClick={close}>
          <RxCross1 />
        </div>
        <div>
          {title}
        </div>
        <div>
          {children}
        </div>
        <button
          onClick={closePopup}
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition-all duration-300"
        >
          保存
        </button>
      </div>
    </div>
  );

  // return (  <>
  //     <div className="bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 p-5 flex flex-col items-start absolute z-20">
  //       <h1 className="text-xl font-bold mb-5">Title</h1>
  //       <p className="text-lg mb-5">Dialog Message.</p>
  //       <div className="flex mt-auto w-full">
  //         <button
  //           className="bg-slate-900 hover:bg-slate-700 text-white px-8 py-2 mx-auto"
  //           onClick={() => props.onOk()}
  //         >
  //           OK
  //         </button>
  //       </div>
  //     </div>
  //     <div
  //       className="fixed bg-black bg-opacity-50 w-full h-full z-10"
  //       onClick={() => props.onCancel()}
  //     ></div>
  //   </>
  //   )
  //   return(
  //     <>
  //       <div
  //         className='h-screen w-screen absolute fixed flex flex-col items-center justify-center overflow-hidden bg-gray-500/50 transition-all' >
  //         <div className="relative h-3/4 w-3/4 max-w-3xl">
  //           {/* バツボタン */}
  //           <div className="absolute right-0 -top-10 h-10 w-10 hover:cursor-pointer"
  //           onClick={onCloseButton}
  //           >
  //           </div>
  //           <div
  //             id="policy"
  //             className="flex h-full w-full flex-col bg-white"
  //             onClick={onClickCard}
  //           >
  //             {children}
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   )
};

import Image from 'next/image';
import { useClickAway } from "@uidotdev/usehooks";
import {useState,useRef} from 'react';
import { PopupWrapper } from './PopupWrapper'

export const OpenMenuButton = ({menuWrapperRef,addImage,addLink,addTable,addCode,addUl,addOl,addHr,deleteTextarea}) => {
  const [isOpenMenu,setIsOpenMenu] = useState(false);
  let imgUrl = "";
  const menuClickAwayRef = useClickAway(() => {
    setIsOpenMenu(false);
  });

  const handleOpenModal = () => {
    if(!isOpenMenu){
        setIsOpenMenu(true);
    }
  };

  const [isOpenImagePopup,setIsOpenImagePopup] = useState(false);
  const imageClickAwayRef = useClickAway(() => {
    setIsOpenMenu(false);
  });

  const handleOpenImagePopup = () => {
    if(!isOpenImagePopup){
        setIsOpenImagePopup(true);
    }
  };
  const handleCloseImagePopup = () => {
    if(isOpenImagePopup){
        setIsOpenImagePopup(false);
    }
  };

  const imgFileRef = useRef(null);
  function onChangeInputImage(e){
    console.log(imgFileRef)
    console.log(e.target.files[0])
    console.log(window.URL.createObjectURL(e.target.files[0]))
    console.log(imgFileRef.current.files[0]);
    handleOpenImagePopup();
  }
  function onAddImage(){
    //imgFileRef.current.click();
    addImage();
    setIsOpenMenu(false);
  }
  function onAddLink(){
    addLink();
    setIsOpenMenu(false);
  }
  function onAddTable(){
    addTable();
    setIsOpenMenu(false);
  }
  function onAddCode(){
    addCode();
    setIsOpenMenu(false);
  }
  function onAddUl(){
    addUl();
    setIsOpenMenu(false);
  }
  function onAddOl(){
    addOl();
    setIsOpenMenu(false);
  }
  function onAddHr(){
    addHr();
    setIsOpenMenu(false);
  }
  function onDeleteTextarea(){
    deleteTextarea();
    setIsOpenMenu(false);
  }
  
  return (
    <div ref={menuWrapperRef} className='absolute'>
      <button
        className={`hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        onClick={handleOpenModal}
      >
        +
      </button>
      {/* <input hidden type="file" accept='image/*' ref={imgFileRef} onChange={onChangeInputImage} ></input> */}
      {isOpenMenu && (
  <Menu ref={menuClickAwayRef} 
  onAddImage={onAddImage}
  onAddLink={onAddLink}
  onAddTable={onAddTable}
  onAddCode={onAddCode}
  onAddUl={onAddUl}
  onAddOl={onAddOl}
  onAddHr={onAddHr}
  onDeleteTextarea={onDeleteTextarea}
  />
)}
{/* {isOpenImagePopup && (
  <ImagePopup close={handleCloseImagePopup}></ImagePopup>
  )} */}
  
    </div>
  );
}
// const ImagePopup = ({close}) =>{
//   const widthRef = useRef(null);
//   const heightRef = useRef(null);

//   const onClick = () =>{
//     addImage(widthRef.current.value,heightRef.current.value)
//   }
//   return (
//     <PopupWrapper close={close} title="画像追加">
//       <InputNumber ref={heightRef} label="高さ"/>
//       <InputNumber ref={widthRef} label="幅"/>
//     </PopupWrapper>
//   )
// }
const Menu = ({onChangeInputImage,imgFileRef ,ref ,onAddImage,onAddLink,onAddTable,onAddCode,onAddUl,onAddOl,onAddHr,onDeleteTextarea}) => {
  return (
    //translate-y-0
    <>
      <div
        className="translate-x-10 -translate-y-1/2 border border-black bg-white"
        //id="menu"
        ref={ref}
      >
        {/* <input hidden type="file" accept='image/*' ref={imgFileRef} onChange={() => {console.log("change")}}></input> */}
        <MenuItem fileName="img.png" onClick={onAddImage}/>
        <MenuItem fileName="link.png" onClick={onAddLink}/>
        <MenuItem fileName="table.png" onClick={onAddTable}/>
        <MenuItem fileName="code.png" onClick={onAddCode}/>
        <MenuItem fileName="ul.png" onClick={onAddUl}/>
        <MenuItem fileName="ol.png" onClick={onAddOl}/>
        <MenuItem fileName="hr.png" onClick={onAddHr}/>
        <MenuItem fileName="delete.png" onClick={onDeleteTextarea}/>
      </div>
    </>
  );
}
// const InputNumber = ({label}) =>{
//   return (
//     <div className="flex flex-col space-y-2">
//   <label htmlFor="numberField" className="text-sm font-medium text-gray-700">
//     {label}
//   </label>
//   <input
//     id="numberField"
//     type="number"
//     placeholder="0"
//     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//   />
// </div>
//   )
// }
// const InputTextarea = ({label,placeholder}) => {
//   return (
//     <div className="flex flex-col space-y-2">
//   <label htmlFor="textareaField" className="text-sm font-medium text-gray-700">
//     {label}
//   </label>
//   <textarea
//     id="textareaField"
//     placeholder={placeholder}
//     rows="4"
//     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//   ></textarea>
// </div>
//   )
// }
// const InputText = ({label,placeholder}) => {
//   return (
// <div className="flex flex-col space-y-2">
//   <label htmlFor="inputField" className="text-sm font-medium text-gray-700">
//     {label}
//   </label>
//   <input
//     id="inputField"
//     type="text"
//     placeholder={placeholder}
//     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//   />
// </div>
//   )
// }
const MenuItem = ({ fileName ,onClick}) => {
  return (
    <div className="hover:cursor-pointer hover:bg-gray-400 rounded-md transition-all duration-200 ease-in-out m-1">
      <Image
        src={'/image/make_memo/menu/' + fileName}
        alt="Menu Item"
        width={35}
        height={35}
        className="menu-icon mb-3"
        onClick={onClick}
      />
    </div>
  );
}
// 画像、リンク、表、コード、箇条書き、番号付きリスト、水平線、削除、h2,h3とか

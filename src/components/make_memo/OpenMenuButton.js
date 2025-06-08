import Image from 'next/image';
import { useClickAway } from "@uidotdev/usehooks";
import {useState} from 'react';

export const OpenMenuButton = ({menuWrapperRef,addImage,addLink,addTable,addCode,addUl,addOl,addHr,deleteTextarea}) => {
  const [isOpen,setIsOpen] = useState(false);
  const clickAwayRef = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if(!isOpen){
        setIsOpen(true);
    }
  };
  function onAddImage(){
    addImage();
    setIsOpen(false);
  }
  function onAddLink(){
    addLink();
    setIsOpen(false);
  }
  function onAddTable(){
    addTable();
    setIsOpen(false);
  }
  function onAddCode(){
    addCode();
    setIsOpen(false);
  }
  function onAddUl(){
    addUl();
    setIsOpen(false);
  }
  function onAddOl(){
    addOl();
    setIsOpen(false);
  }
  function onAddHr(){
    addHr();
    setIsOpen(false);
  }
  function onDeleteTextarea(){
    deleteTextarea();
    setIsOpen(false);
  }

  return (
    <div ref={menuWrapperRef} className='absolute'>
      <button
        className={`hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        onClick={handleOpenModal}
      >
        +
      </button>
      {isOpen && (
  <Menu ref={clickAwayRef} 
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
    </div>
  );
}
const Menu = ({ ref ,onAddImage,onAddLink,onAddTable,onAddCode,onAddUl,onAddOl,onAddHr,onDeleteTextarea}) => {
  return (
    //translate-y-0
    <>
      <div
        className="translate-x-10 -translate-y-1/2 border border-black bg-white"
        //id="menu"
        ref={ref}
      >
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

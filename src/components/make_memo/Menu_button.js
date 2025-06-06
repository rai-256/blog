import Image from 'next/image';
import { useRef } from 'react';
import { useClickAway } from "@uidotdev/usehooks";
import {useState} from 'react';

export function Menu_button({ className, ref, menuButtonRef ,onImageButtonClick,onLinkButtonClick}) {
  const menuListRef = useRef(null);
  const [isOpen,setIsOpen] = useState(false);
  const clickAwayRef = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if(!isOpen){
        setIsOpen(true);
    }
  };
  function MenuButtonClickEvent(e) {
    //menuListRef.current.style.display = 'block';
  }
  function imageButtonClick(){
    onImageButtonClick();
    setIsOpen(false);
  }
  function linkButtonClick(){
    onLinkButtonClick();
    setIsOpen(false);
  }
  function tableButtonClick(){

    setIsOpen(false);
  }
  function codeButtonClick(){

    setIsOpen(false);
  }
  function ulButtonClick(){

    setIsOpen(false);
  }
  function olButtonClick(){

    setIsOpen(false);
  }
  function hrButtonClick(){

    setIsOpen(false);
  }
  function deleteButtonClick(){

    setIsOpen(false);
  }

  return (
    <div ref={ref} onClick={MenuButtonClickEvent}>
      <button
        className={`hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        ref={menuButtonRef}
        onClick={handleOpenModal}
      >
        +
      </button>
      {isOpen && (

  
  <Menu ref={clickAwayRef} 
  imageButtonClick={imageButtonClick} 
  linkButtonClick={linkButtonClick} 
  tableButtonClick={tableButtonClick}
  codeButtonClick={codeButtonClick}
  ulButtonClick={ulButtonClick}
  olButtonClick={olButtonClick}
  hrButtonClick={hrButtonClick}
  deleteButtonClick={deleteButtonClick}
  />

)}
    </div>
  );
}
/*

<dialog ref={clickAwayRef}>
</dialog>
  <button onClick={() => setIsOpen(false)} className="close-button">
    ×
  </button>
{isOpen && (

      <dialog ref={clickAwayRef}>
        
        <button onClick={() => setIsOpen(false)} className="close-button">
          ×
        </button>
        <Menu ref={menuListRef}/>
      </dialog>
    )}
*/ 
function Menu({ ref ,imageButtonClick,linkButtonClick,tableButtonClick,codeButtonClick,ulButtonClick,olButtonClick,hrButtonClick,deleteButtonClick}) {
  return (
    //translate-y-0
    <>
      <div
        className="translate-x-10 -translate-y-1/2 border border-black bg-white"
        //id="menu"
        ref={ref}
      >
        <MenuItem fileName="img.png" onClick={imageButtonClick}/>
        <MenuItem fileName="link.png" onClick={linkButtonClick}/>
        <MenuItem fileName="table.png" onClick={tableButtonClick}/>
        <MenuItem fileName="code.png" onClick={codeButtonClick}/>
        <MenuItem fileName="ul.png" onClick={ulButtonClick}/>
        <MenuItem fileName="ol.png" onClick={olButtonClick}/>
        <MenuItem fileName="hr.png" onClick={hrButtonClick}/>
        <MenuItem fileName="delete.png" onClick={deleteButtonClick}/>
      </div>
    </>
  );
}
function MenuItem({ fileName ,onClick}) {
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

'use client';
import Image from 'next/image';
import { InputFileName } from 'components/make_memo/InputFileName.js';
import { Button } from 'components/make_memo/Button.js';
import { Textarea } from 'components/make_memo/Textarea.js';
import { OpenMenuButton } from 'components/make_memo/OpenMenuButton';
import { use, useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import React from 'react';
import { RightClickMenu } from 'components/make_memo/RightClickMenu';
//export const Home = () => {
export default function Home() {
  // Textarea等があるareaのRef
  const memoAreaRef = useRef(null);
  //
  const menuWrapperRef = useRef(null);
  const textareaRefs = useRef({});
  const [textareaElementIds, setTextareaElementIds] = useState(['Textarea0']);
  const [activeElement, setActiveElement] = useState('Textarea0');
  const [rightClickMenu,setRightClickMenu] = useState("");
  const closeRightClickMenu = () =>{
    setRightClickMenu(null);
  }
  const bodyClick = () => {
    closeRightClickMenu();
  }

  /*
  activeElementが変更されたときに実行される
  activeElementへのフォーカスとmenuButtonの高さの変更
  */
  useEffect(
    () => {
      focusMenuButton(activeElement);
      setOpenMenuButtonHeight(activeElement);
    },
    [activeElement]
  );
  /*
  textareaでshift+enterしたときtextareaを追加する
  */
  function textareaOnKeyDownEvent(e) {
    if (e.key === 'Enter' && e.shiftKey) {
      const index = Number(e.target.getAttribute('data-index'));
      e.preventDefault();
      addTextarea(index + 1, 'Textarea' + textareaElementIds.length);
    }
  }
  /*
  textareaを追加する関数
  index             : 追加したい場所のindex
  textareaElementId : 
  */
  function addTextarea(index, textareaElementId) {
    setActiveElement(textareaElementId);
    var newTextareaElementIds = [...textareaElementIds];
    newTextareaElementIds.splice(index, 0, textareaElementId);
    setTextareaElementIds(newTextareaElementIds);
  }
  /*
  メニューボタンの位置を設定する関数
  今はclickされたときにそのtextareaの隣にメニューボタンを移動する仕様
  いずれはアクティブな所を保存して、そこに移動させるようにしたいかな？
  あと、改行したときに上に張り付くからそれも直す
  */
  function setOpenMenuButtonHeight(clickTextarea) {
    const textareaRef = textareaRefs.current[clickTextarea].current;
    const clickTextareaLocateTop = Math.round(
      textareaRef.getBoundingClientRect().top -
        memoAreaRef.current.getBoundingClientRect().top
    );
    // absoluteはデフォルトで設定するべき
    menuWrapperRef.current.style.top = clickTextareaLocateTop + 'px';
  }
  function focusMenuButton(textareaElementId) {
    textareaRefs.current[textareaElementId].current.focus();
  }
  function textareaClickEvent(e) {
    setActiveElement(e.target.id);
  }
  function addImage() {
    console.log('addImage');
  }
  function addLink() {
    console.log('addLink');
  }
  function addTable() {
    console.log('addTable');
  }
  function addCode() {
    console.log('addCode');
  }
  function addUl() {
    console.log('addUl');
  }
  function addOl() {
    console.log('addOl');
  }
  function addHr() {
    console.log('addHr');
  }
  function deleteTextarea() {
    console.log('delete');
  }
  function loadButtonEvent() {
    console.log('load');
  }
  function saveButtonEvent() {
    console.log('save');
  }
  function convertFileButtonEvent() {
    console.log('convert');
  }
  const onContextMenu = (e) =>{
    //clickX = e.clientX;
    //clickY = e.clientY;
    //console.log(clickX)
    //setRightClickMenuFlag(true);
    e.preventDefault();
    console.log(e.clickX);
    setRightClickMenu(
      <RightClickMenu clickX={e.clientX} clickY={e.clientY}></RightClickMenu>
    );
    // stateに<rightclickmenu>ireru?
  }
  return (
    <>
      <>
      {rightClickMenu}
      </>
    <main onContextMenu={onContextMenu} onClick={bodyClick}>
      <div>
        <InputFileName />
        <Button value="読み込み" onClick={loadButtonEvent} className="loadBtn" />
        <Button value="保存" onClick={saveButtonEvent} className="saveBtn" />
        <Button
          value="ファイルに変換"
          onClick={convertFileButtonEvent}
          className="convertBtn"
        />
      </div>

      <div className="flex">
        <div id="menu_button_div">
          <OpenMenuButton
            menuWrapperRef={menuWrapperRef}
            addImage={addImage}
            addLink={addLink}
            addTable={addTable}
            addCode={addCode}
            addUl={addUl}
            addOl={addOl}
            addHr={addHr}
            deleteTextarea={deleteTextarea}
          />
        </div>
        <div className="flex-auto" ref={memoAreaRef}>
          {textareaElementIds.map((key, index) => {
            const ref = React.createRef();
            textareaRefs.current[key] = ref;
            return (
              <Textarea
                id={key}
                data_index={index}
                key={key}
                ref={ref}
                onKeyDown={textareaOnKeyDownEvent}
                onClick={textareaClickEvent}
              />
            );
          })}
        </div>
      </div>
    </main>
    </>
  );
}

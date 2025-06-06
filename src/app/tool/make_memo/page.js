'use client';
import Image from 'next/image';
import { InputFileName } from 'components/make_memo/InputFileName.js';
import { Button } from 'components/make_memo/Button.js';
import { Textarea } from 'components/make_memo/Textarea.js';
import { Menu_button } from 'components/make_memo/Menu_button';
import { use, useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { RefObject } from 'react';
import React from 'react';

// メニューボタンにref作ってボタンの位置動かす？
let textareaElementList = [];
export default function Home() {
  const memoAreaRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const textareaRefs = useRef([]);
  //const newTextarea = new Textarea(
  //  textarea_on_key_down_event,
  //  textarea_click_event
  //);
  const NewTextarea = () =>
    <Textarea
      onKeyDown={textarea_on_key_down_event}
      onClick={textarea_click_event}
    />;
  const [textareaElementIds, setTextareaElementIds] = useState(['Textarea0']);
  //const [textarea_elements, setTextareaElements] = useState([<NewTextarea />]);
  const [menu_button_height, setMenuButtonHeight] = useState('translate-y-0');
  /*
  textareaでshift+enterしたときtextareaを追加する
  */
  function textarea_on_key_down_event(e) {
    if (e.key === 'Enter' && e.shiftKey) {
      const index = textareaRefs.current.findIndex(
        ref => ref.current === e.target
      );
      e.preventDefault();
      addTextarea(index, 'Textarea' + textareaElementIds.length);
    }
  }
  /*ここだとちゃんと見れる */
  // useEffect(
  //   () => {
  //     console.log('aa');
  //     console.log(textarea_elements);
  //   },
  //   [textarea_elements]
  // );
  /*
  引数として受け取った要素をindexの次の位置に追加する関数にしたい
  textareaElementsの更新をした後にconsole.logで確認しても、初期値が表示される
  */

  function addTextarea(index, textareaElementId) {
    var newTextareaElementIds = [...textareaElementIds];
    newTextareaElementIds.splice(index, 0, textareaElementId);
    setTextareaElementIds(newTextareaElementIds);
    console.log(textareaElementIds);
    //console.log(textarea_elements);
    //const newTextareaElements = [...textarea_elements];
    //newTextareaElements.splice(index + 1, 0, newElement);
    //setTextareaElements(newTextareaElements);
    //const addNewTextarea = newTextarea;
    //const newTextareaElements = [...textarea_elements];
    //newTextareaElements.push(newElement);
    //console.log(newTextareaElements);
    //setTextareaElements([...newTextareaElements]);
    //console.log(textarea_elements);
    //setTextareaElements(elements => [...elements, newElement]);
    //console.log(textarea_elements);
    //textareaElementList.push(addNewTextarea);
    //console.log(textareaElementList);
  }
  /*
  メニューボタンの位置を設定する関数
  今はclickされたときにそのtextareaの隣にメニューボタンを移動する仕様
  いずれはアクティブな所を保存して、そこに移動させるようにしたいかな？
  あと、改行したときに上に張り付くからそれも直す
  */
  function set_button_height(clickTextarea) {
    textareaRefs.current.map((ref, index) => {
      if (ref.current === clickTextarea) {
        const textarea_ref = ref.current;
        const clickTextareaLocateTop = Math.round(
          textarea_ref.getBoundingClientRect().top -
            memoAreaRef.current.getBoundingClientRect().top
        );
        menuButtonRef.current.style.position = 'absolute';
        menuButtonRef.current.style.top = clickTextareaLocateTop + 'px';
      }
    });
  }
  function textarea_click_event(e) {
    set_button_height(e.target);
  }
  function addImageButtonClickEvent() {
    console.log('addImage');
  }
  function addLinkButtonClickEvent() {
    console.log('addLink');
  }
  function load_button_event() {
    console.log('test');
  }
  function save_button_event() {}
  function convert_file_button_event() {}
  function menu_button_event() {}
  return (
    <main>
      <div>
        <InputFileName />
        <Button value="読み込み" onClick={load_button_event} className="loadBtn" />
        <Button value="保存" onClick={save_button_event} className="saveBtn" />
        <Button
          value="ファイルに変換"
          onClick={convert_file_button_event}
          className="convertBtn"
        />
      </div>

      <div className="flex">
        <div id="menu_button_div">
          <Menu_button
            className={menu_button_height}
            ref={menuRef}
            menuButtonRef={menuButtonRef}
            onImageButtonClick={addImageButtonClickEvent}
            onLinkButtonClick={addLinkButtonClickEvent}
          />
        </div>
        <div className="flex-auto" ref={memoAreaRef}>
          {textareaElementIds.map((key, index) => {
            //element.index = index;
            //element.ref = textareaRefs.current[index] = React.createRef();

            //console.log(textarea_elements);
            //ここだとちゃんと見れる
            // return (
            //   // ここdivにkeyを設定しないといけないけど、elementにkeyを設定してもいいようにしたい
            //   <div key={index}>
            //     {element.render()}
            //   </div>
            // );
            return (
              <Textarea
                key={key}
                ref={el => {
                  textareaRefs.current[index] = el;
                }}
                onKeyDown={textarea_on_key_down_event}
                onClick={textarea_click_event}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

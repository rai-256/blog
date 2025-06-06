import React, { Component } from 'react';

export const Textarea = ({ ref, onKeyDown, onClick }) => {
  return (
    <div
      className="w-full p-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      contentEditable="true"
      onKeyDown={onKeyDown}
      onClick={onClick}
      ref={ref}
      //key={key}
    />
  );
};

/*
export class Textarea {
  constructor(onKeyDown, onClick) {
    this.onKeyDown = onKeyDown;
    this.onClick = onClick;
  }
  test() {
    console.log('text');
  }
  render() {
    return (
      <div
        className="w-full p-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        contentEditable="true"
        onKeyDown={this.onKeyDown}
        onClick={this.onClick}
        ref={this.ref}
        key={this.index}
      />
    );
  }
}

// class Textarea extends Component {
//   test() {
//     console.log('text');
//   }
//   render() {
//     const { onKeyDown, onClick } = this.props;
//     return (
//       <div
//         className="w-full h-full p-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//         contentEditable="true"
//         onKeyDown={onKeyDown}
//         onClick={onClick}
//       />
//     );
//   }
// }

/*
export function Textarea({ onKeyDown,onClick }) {
  return (
    <div
      className="w-full h-full p-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      contentEditable="true"
      onKeyDown={onKeyDown}
      onClick={onClick}
    />
  );
}
*/

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './ui/Button';

function CopyButton({ text }) {
  const handleCopy = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([text], { type: 'text/html' }),
        'text/plain': new Blob([doc.body.innerText], { type: 'text/plain' }),
      }),
    ])
      .then(() => {
        toast.success('Signature copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        toast.error('Failed to copy signature. Please try again.');
      });
  };

  return (
    <>
      <Button onClick={handleCopy} className="w-full">Copy Signature</Button>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default CopyButton;

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CopyButton({ text }) {
  const handleCopy = () => {
    const container = document.createElement('div');
    container.innerHTML = text;

    navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([container.innerHTML], { type: 'text/html' }),
        'text/plain': new Blob([container.innerText], { type: 'text/plain' }),
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
      <button
        onClick={handleCopy}
        className="bg-red-500 border border-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 w-full h-full"
      >
        Copy Signature
      </button>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default CopyButton;

import { useStackStore } from '@/store/stack.store';
import React from 'react';
import { MdArrowBack } from "react-icons/md";

interface StackProps {
  title: string;
  content: React.ReactNode | string;
  showPrev: boolean;
  showNext: boolean;
}

function Stack({ title, content, showPrev, showNext }: StackProps) {
  const { increaseStack, decreaseStack } = useStackStore();
  return (
    <div className="grid grid-rows-stack-grid h-full w-full text-slate-800 p-0">
      <div className="w-full h-full grid grid-cols-3 items-center border-b-slate-300 border-b-2">
        <div className={`p-2 ${showPrev ? "flex" : "opacity-0"}`}>
          <MdArrowBack className="cursor-pointer hover:opacity-70 text-slate-600" onClick={decreaseStack} size="1.5rem" />
        </div>

        <span className="text-lg text-center">
          {title}  
        </span>
      </div>
      <div className="w-full h-full flex flex-col overflow-y-auto p-4">
        {content}
      </div>
      <div className="w-full h-full flex items-center justify-center border-t-slate-300 border-t-2">
        {showPrev && <button onClick={decreaseStack} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer mr-2">Pilha Anterior</button>}
        {showNext && <button onClick={increaseStack} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Próxima Pilha</button>}
      </div>
    </div>
  );
};

export default Stack;

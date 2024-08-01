"use client"
import React, { useEffect, useState } from 'react';
import Stack from './Stack';
import { useStackStore } from '@/store/stack.store';

function StackContainer() {
  const { stacks, currentStack } = useStackStore();
  
  return (
    <div className="relative min-w-[500px] w-1/4 h-screen">
      {stacks.map((stack, index) => (
        <div
          key={stack.id}
          className={`w-full h-full top-0 left-0 bg-gray-100 transition-opacity duration-1000 ${index === currentStack ? 'flex' : 'hidden'}`}
        >
          <Stack
            title={stack.title}
            content={stack.content}
            showPrev={index > 0}
            showNext={index < stacks.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default StackContainer;

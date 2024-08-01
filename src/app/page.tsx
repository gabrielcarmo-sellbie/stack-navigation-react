"use client"
import React, { useEffect } from 'react';
import StackContainer from '@/components/StackContainer';
import { useStackStore } from '@/store/stack.store';
import { ShortLoremIpsum } from '@/components/ShortLoremIpsum';
import { LargeLoremIpsum } from '@/components/LargeLoremIpsum';

export default function Home() {
  const { stacks, setStacks } = useStackStore()
  useEffect(() => {
    fillStacks()
  })

  function fillStacks() {
    if (stacks.length > 0) return
    
    setStacks([
      { id: 0, title: 'Pilha 1', content: <ShortLoremIpsum /> },
      { id: 1, title: 'Pilha 2', content: 'Conteúdo da Pilha 2' },
      { id: 2, title: 'Pilha 3', content: <LargeLoremIpsum /> },
    ])
  }

  return (
    <div className="bg-slate-200">
      <StackContainer />
    </div>
  );
}
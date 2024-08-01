import React from "react";

export type StackType = {
  id: number;
  title: string;
  content: React.ReactNode | string;
}
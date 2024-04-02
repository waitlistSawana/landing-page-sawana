import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) { // 确认输入时tailwind值
  return twMerge(clsx(inputs)) // 合并所有输入 删除假植 前者为大
}

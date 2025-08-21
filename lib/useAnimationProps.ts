'use client';

import { useReducedMotion, type Variants } from 'framer-motion';

// Định nghĩa viewport mặc định để nhất quán
const defaultViewport = { once: true, amount: 0.1 };

/**
 * Custom hook để lấy các props animation.
 * Tự động tắt animation nếu người dùng bật chế độ 'Giảm chuyển động'.
 * @param variants - Các variants của Framer Motion để sử dụng.
 * @param viewport - Tùy chọn viewport để ghi đè lên giá trị mặc định.
 * @returns Một đối tượng chứa các props để truyền vào motion component.
 */
export const useAnimationProps = (variants?: Variants, viewport?: object) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || !variants) {
    // Nếu bật giảm chuyển động, trả về props để hiện component ngay lập tức.
    return {};
  }

  // Trả về các props animation tiêu chuẩn.
  return {
    variants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewport || defaultViewport,
  };
};
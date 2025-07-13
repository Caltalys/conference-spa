import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Chỉ áp dụng cho các đường dẫn đã được quốc tế hóa
  matcher: ['/', '/(vi|en)/:path*']
};

import FashionBlogPage from '../Pages/FashionBlogPage/FashionBlogPage';
import HomePage from '../Pages/HomePage/HomePage';

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/posts', component: <FashionBlogPage /> },
];

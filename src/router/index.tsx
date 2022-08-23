import CategoriesPage from '../Pages/CategoriesPage/CategoriesPage';
import FashionBlogItemPage from '../Pages/FashionBlogPage/FashionBlogItemPage/FashionBlogItemPage';
import FashionBlogPage from '../Pages/FashionBlogPage/FashionBlogPage';
import HomePage from '../Pages/HomePage/HomePage';

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/blogs', component: <FashionBlogPage /> },
  { path: '/blogs/:id', component: <FashionBlogItemPage /> },
  { path: '/categorie/:name', component: <CategoriesPage /> },
];

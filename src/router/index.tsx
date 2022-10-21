import Categories from '../Pages/CategoriesPage/Categories';
import FashionBlogItemPage from '../Pages/FashionBlogPage/FashionBlogItemPage/FashionBlogItemPage';
import FashionBlog from '../Pages/FashionBlogPage/FashionBlog';
import Home from '../Pages/HomePage/Home';

export const routes = [
  { path: '/', component: <Home /> },
  { path: '/blogs', component: <FashionBlog /> },
  { path: '/blogs/:id', component: <FashionBlogItemPage /> },
  { path: '/category/:name', component: <Categories /> },
];

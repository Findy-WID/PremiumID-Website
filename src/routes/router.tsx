import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/Index';
import ProductsPage from '../features/products/Index';
import CompanyPage from '../features/CompanyPage';
import ContactPage from '../features/ContactPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:productId" element={<ProductsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      {/* <Route path="/solutions" element={<SolutionsPage />} /> */}
      {/* <Route path="/resources/:resourceType" element={<ResourcesPage />} /> */}
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
import { useParams, Navigate } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import ProductLayout from './ProductLayout';
import { productsData } from './data';

export default function ProductsPage() {
  const { productId } = useParams<{ productId: string }>();
  
  // Default to IAM if no product specified
  const product = productsData[productId || 'iam'];
  
  if (!product) {
    return <Navigate to="/products/iam" replace />;
  }
  
  return (
    <PageLayout>
      <ProductLayout product={product} />
    </PageLayout>
  );
}
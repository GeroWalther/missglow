import { notFound } from 'next/navigation';
import ProductPageV2 from '../_components/ProductPageV2';
import { getProductV2 } from '../_components/productContentV2';

export default function FaceCleanserV2() {
  const product = getProductV2('faceCleanser');
  if (!product) notFound();
  return <ProductPageV2 product={product} />;
}

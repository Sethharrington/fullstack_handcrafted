import { getProductCardById, getReviewByProductId } from "@/app/lib/data";
import ViewProduct from "@/app/components/product/view";
import { notFound } from "next/navigation";

export default async function View(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [reviews, product] = await Promise.all([
    getReviewByProductId(id),
    getProductCardById(id),
  ]);
  if (!product) {
    notFound();
  }
  // const [product, setProduct] = useState<any>(null);
  // const [reviews, setReviews] = useState<Review[]>([]);
  // const [loading, setLoading] = useState(true);

  // const router = useRouter();

  // if (!product) return <p>Product not found</p>;

  return <ViewProduct product={product} reviews={reviews} />;
}

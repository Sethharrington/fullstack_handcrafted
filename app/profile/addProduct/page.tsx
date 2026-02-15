import Form from "@/app/components/product/create-form";
import { getArtisan, getCategory } from "@/app/lib/data";
export default async function AddProductPage() {
  const artisanList = await getArtisan();
  const categoryList = await getCategory();
  // const [user, setUser] = useState<any>(null);
  // const [loading, setLoading] = useState(true);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const router = useRouter();

  // useEffect(() => {
  //   fetch("/api/profile")
  //     .then(async (res) => {
  //       if (res.status === 401) {
  //         router.push("/login");
  //         return null;
  //       }
  //       const data = await res.json();
  //       return data;
  //     })
  //     .then((data) => {
  //       if (data) {
  //         setUser(data);
  //         setLoading(false);
  //       }
  //     })
  //     .catch(() => router.push("/login"));
  // }, [router]);

  // if (loading) return <p>Loading...</p>;

  // const handleAddProduct = async () => {
  //   if (!title || !description || !price) {
  //     alert("Please fill all fields");
  //     return;
  //   }

  //   const res = await fetch("/api/products", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title, description, price }),
  //   });

  //   if (res.ok) {
  //     alert("Product added!");
  //     router.push("/profile/manageProducts");
  //   } else {
  //     const data = await res.json();
  //     alert(data.error || "Failed to add product");
  //   }
  // };

  return <Form artisanList={artisanList} categoryList={categoryList} />;
}

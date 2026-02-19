import SlideShow from "./components/home/homeSlideShow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-[10vw]">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Home Page
      </h1>
      <SlideShow />
      <div className="my-5 w-full max-w-2xl text-left">
        <h2 className="font-bold">Purpose</h2>
        <p className="my-2">
          Welcome to Hand Crafted! This site is a site that allows people like
          you to make DIY products and sell them here. If you want to make
          plushies, or wooden figures and make a few bucks. This site is for
          you.
        </p>
        <p className="my-2">
          If you are someone who also wants to buy products like This then this
          site is also for you. You are able to buy products from a seller and
          then rate that seller and product.
        </p>
        <p className="my-2">
          That is the purpose, to help people buy and sell DIY products.
        </p>
        <p className="my-2">Happy crafting, from the Hand Crafted Team.</p>
      </div>
    </div>
  );
}

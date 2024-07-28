import SaveFile from "@/components/SaveFile";
import Image from "next/image";

const Page = () => {
  return (
    <section>
      <Image
        src="/uploads/product1.jpg"
        alt="product"
        width={500}
        height={500}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aspernatur, neque doloremque a, molestias saepe consectetur dolorum non
        nesciunt velit qui temporibus aperiam et. Reiciendis, aliquid quibusdam.
        Animi, laboriosam minima.
      </p>
      <div>
        <SaveFile />
      </div>
    </section>
  );
};

export default Page;


import Image from "next/image";
import brooke from "../public/brooke.jpg"; // ✅ Correct way to import static image

export default function NextImage() {
  return (
    <div>
      <h1>Using Image Component</h1>
      <Image src={brooke} width={800} height={800} alt="Brooke Image" />
    </div>
  );
}

import { Noto_Sans } from "next/font/google";
import { Lusitana } from "next/font/google";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const notoSans = Noto_Sans({ subsets: ["latin"] });

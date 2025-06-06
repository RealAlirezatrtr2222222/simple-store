import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type ProductCard = {
  id: string;
  title: string;
  description: string;
  img: string;
};

function ProductCard(props : ProductCard) {
  return (
    <Card className="h-64">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative w-36 h-36 z-10 flex items-center justify-center w-full">
        {/* <Image
                          src={props.img}
                          fill
                          className="object-contain"
                          alt={`${pr.title} image`}
                        /> */}
        Product Image
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row gap-2 justify-between">
        <Link href={`/product/${props.id}`} className="text-sm text-blue-700">More</Link>

        <Button className="cursor-pointer">Add to card</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;

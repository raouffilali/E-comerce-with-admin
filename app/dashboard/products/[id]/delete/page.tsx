import { deleteProduct } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { date } from "zod";

export default function DeleteRoute({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl ">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this product?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete the
            product from the database.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between ">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/products"}>Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <input type="hidden" name="productId" value={params.id} />
            <SubmitButton variant={'destructive'} title="Delete Product"/>
            {/* <Button variant={"destructive"}>Continue</Button> */}
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

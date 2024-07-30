import { SubmitButton } from "@/app/components/SubmitButton";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BannerRoute() {
  return (
    <form>
      <div className="flex items-center gap-x-4">
        <Button variant={"outline"} size={"icon"}>
          <Link href={"/dashboard/products"}>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New banner</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Banner Details</CardTitle>
          <CardDescription>Create your amazing banners here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input type="text" placeholder="Enter the name of the banner" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Image</Label>
              <UploadDropzone endpoint="bannerImageRoute" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
            <SubmitButton title="Create Banner" />
        </CardFooter>
      </Card>
    </form>
  );
}

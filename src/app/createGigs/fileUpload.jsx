"use client";
 
import { UploadButton } from "@/utils/uploadthing";
 
export default function Home({ func }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          func(res[0].url);
          // Do something with the response
          console.log("Files: ", res[0].url);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
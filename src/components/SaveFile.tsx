"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

const SaveFile = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const _files = Array.from(e.target.files);
      setImages(_files);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    images.forEach((image, i) => {
      formData.append(image.name, image);
    });

    setUploading(true);
    fetch("/api/test", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => console.log(JSON.stringify(data)));
        } else {
          //res.json().then((data) => console.log(JSON.stringify(data.error)));
        }
      })
      .catch((error) => console.log(error));
    setUploading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <input
            type="file"
            multiple
            accept="image/png, image/jpeg"
            onChange={handleFileSelected}
          />

          <div>
            <div className="grid grid-cols-6 gap-2 my-2">
              {images.map((image) => {
                return (
                  <div
                    className="relative aspect-video col-span-4"
                    key={image.name}
                  >
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <button disabled={images.length === 0 || uploading}>Save File</button>
        </div>
      </form>
    </div>
  );
};

export default SaveFile;

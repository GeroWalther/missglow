import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
): Promise<NextResponse | undefined> {
  const formData = await req.formData();

  const formDataEntryValues = Array.from(formData.values());

  for (const formDataEntryValue of formDataEntryValues) {
    if (
      typeof formDataEntryValue === "object" &&
      "arrayBuffer" in formDataEntryValue
    ) {
      console.log("Uploading file", formDataEntryValue.name);
      const file = formDataEntryValue as unknown as Blob;
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(`./public/uploads/${formDataEntryValue.name}`, buffer);
    }
  }
  return NextResponse.json({ success: true });
}

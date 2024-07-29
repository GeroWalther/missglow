import ErrorComponent from "@/components/ErrorComponent";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DiscountProvider } from "@/contexts/DiscountProvider";
import { Fragment } from "react";
import { getDiscounts } from "../_actions/getDiscounts";
import getEmails from "../_actions/getEmails";
import CheckDiscount from "../_components/CheckDiscount";
import { AddtDiscount } from "../_components/DiscountComponent";
import DownloadCsv from "../_components/DownloadCsv";
export default async function CustomerAdminPage() {
  const emails = await getEmails();
  const getAllDiscounts = await getDiscounts();

  if (emails.length == 0) {
    return <ErrorComponent message="An error occurred while fetching emails" />;
  }

  return (
    <section>
      <Card className="mb-4 p-5 flex justify-between gap-4">
        <DiscountProvider discountDetails={getAllDiscounts}>
          <AddtDiscount />
          <CheckDiscount />
        </DiscountProvider>
      </Card>

      <Card>
        <DownloadCsv email={emails} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emails.map((email, index) => (
              <Fragment key={index}>
                {email && (
                  <TableRow>
                    <TableCell className="font-medium">{email}</TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
}

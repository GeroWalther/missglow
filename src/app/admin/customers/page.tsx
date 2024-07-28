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
import { Fragment } from "react";
import getEmails from "../_actions/getEmails";
import DownloadCsv from "../_components/DownloadCsv";
export default async function CustomerAdminPage() {
  const emails = await getEmails();

  if (emails.length == 0) {
    return <ErrorComponent message="An error occurred while fetching emails" />;
  }

  return (
    <section>
      <DownloadCsv email={emails} />
      <Card>
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

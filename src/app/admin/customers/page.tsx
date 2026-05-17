import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Fragment } from 'react';
import {
  getEmailsOfOrderedCustomers,
  getEmailsNewsletter,
} from '../_actions/getEmails';
import DownloadCsv from '../_components/DownloadCsv';
import SendDiscountCampaign from '../_components/SendDiscountCampaign';
export default async function CustomerAdminPage() {
  const emails = await getEmailsOfOrderedCustomers();
  const newsletterEmailList = await getEmailsNewsletter();
  return (
    <section className='pb-10'>
      <Card>
        <DownloadCsv email={emails} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>
                Emails aller Kunden die schon einmal bestellt haben.
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emails.map((email, index) => (
              <Fragment key={index}>
                {email && (
                  <TableRow>
                    <TableCell className='font-medium'>{email}</TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Card className='mt-5'>
        <DownloadCsv
          email={newsletterEmailList.map((e) => e.email)}
          newsletter
        />
        <SendDiscountCampaign subscriberCount={newsletterEmailList.length} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>
                Emails aller Kunden die Newsletter abonniert haben.
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newsletterEmailList.map((email, index) => (
              <Fragment key={index}>
                {newsletterEmailList && (
                  <TableRow>
                    <TableCell className='font-medium'>{email.email}</TableCell>
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

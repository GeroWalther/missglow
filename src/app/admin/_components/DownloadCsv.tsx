"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FC, useState } from "react";
import { CSVLink } from "react-csv";

interface DownloadCsvProps {
  email: string[];
}

const DownloadCsv: FC<DownloadCsvProps> = ({ email }) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const csvData = [["Email"], ...email.map((e) => [e])];

  return (
    <Card className="p-4 mb-4">
      <h3>Download CSV</h3>

      <CSVLink data={csvData} target="_blank" filename="MissGlow_emails.csv">
        <Button>Download</Button>
      </CSVLink>

      {error && <p className="text-destructive">{error}</p>}
      {success && <p className="text-emerald-700">{success}</p>}
    </Card>
  );
};

export default DownloadCsv;

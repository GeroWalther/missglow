"use client";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { CSVLink } from "react-csv";

interface DownloadCsvProps {
  email: string[];
}

const DownloadCsv: FC<DownloadCsvProps> = ({ email }) => {
  const csvData = [["Email"], ...email.map((e) => [e])];

  return (
    <div className="p-4 mb-4">
      <h3>Customer emails Download</h3>

      <CSVLink data={csvData} target="_blank" filename="MissGlow_emails.csv">
        <Button>Download</Button>
      </CSVLink>
    </div>
  );
};

export default DownloadCsv;

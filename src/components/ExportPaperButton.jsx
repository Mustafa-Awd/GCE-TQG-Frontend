import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TopicPaper from "../pdf/TopicPaper";

function ExportPaperButton({ subject, topic, difficulty, questions }) {
  return (
    <PDFDownloadLink
      document={
        <TopicPaper
          subject={subject}
          topic={topic}
          difficulty={difficulty}
          questions={questions}
        />
      }
      fileName={`${subject}-${topic}.pdf`}
    >
      {({ loading }) =>
        loading ? (
          "Preparing PDF..."
        ) : (
          <button className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition">
            Export PDF
          </button>
        )
      }
    </PDFDownloadLink>
  );
}

export default ExportPaperButton;

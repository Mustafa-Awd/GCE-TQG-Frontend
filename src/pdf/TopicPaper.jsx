import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  subtitle: {
    marginBottom: 8,
    fontSize: 12,
  },

  instructions: {
    marginTop: 20,
    marginBottom: 25,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },

  question: {
    marginBottom: 28,
  },

  marks: {
    textAlign: "right",
    marginTop: 5,
    fontWeight: "bold",
  },

  answerSpace: {
    height: 18,
    borderBottomWidth: 1,
    borderColor: "#bbb",
    marginBottom: 8,
  },
});

function getAnswerLines(marks) {
  if (marks <= 2) return 2;
  if (marks <= 4) return 4;
  if (marks <= 6) return 6;
  if (marks <= 8) return 8;
  return 10;
}

function TopicPaper({ subject, topic, difficulty, questions }) {
  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>ExamGen AI</Text>

        <Text style={styles.subtitle}>Subject: {subject}</Text>
        <Text style={styles.subtitle}>Topic: {topic}</Text>
        <Text style={styles.subtitle}>Difficulty: {difficulty}</Text>
        <Text style={styles.subtitle}>Total Marks: {totalMarks}</Text>

        <View style={styles.instructions}>
          <Text>Answer all questions.</Text>
        </View>

        {questions.map((question, index) => (
          <View key={index} style={styles.question}>
            <Text>
              {index + 1}. {question.question}
            </Text>

            <Text style={styles.marks}>[{question.marks} marks]</Text>

            {Array.from({
              length: getAnswerLines(question.marks),
            }).map((_, i) => (
              <View key={i} style={styles.answerSpace} />
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default TopicPaper;

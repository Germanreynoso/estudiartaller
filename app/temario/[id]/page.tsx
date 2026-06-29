import { TOPICS, topicById, subjectOfTopic } from "@/lib/curriculum/data";
import { subjectById } from "@/lib/curriculum/subjects";
import { notFound } from "next/navigation";
import TopicView from "@/components/TopicView";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = topicById(id);
  if (!topic) return { title: "Tema no encontrado · Study Terminal" };
  const subject = subjectById(subjectOfTopic(topic));
  return { title: `${topic.title} · ${subject?.short ?? "Study Terminal"}` };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = topicById(id);
  if (!topic) notFound();
  return <TopicView topic={topic} />;
}

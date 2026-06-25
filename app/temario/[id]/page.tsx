import { TOPICS, topicById } from "@/lib/curriculum/data";
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
  return {
    title: topic
      ? `${topic.title} · Taller Prog I`
      : "Tema no encontrado · Taller Prog I",
  };
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

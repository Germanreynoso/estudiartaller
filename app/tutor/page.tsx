"use client";

import { Suspense } from "react";
import TutorChat from "@/components/tutor/TutorChat";

export default function TutorPage() {
  return (
    <Suspense fallback={<div className="text-muted">cargando…</div>}>
      <TutorChat />
    </Suspense>
  );
}

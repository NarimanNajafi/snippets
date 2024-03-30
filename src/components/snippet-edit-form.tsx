'use client'

import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}


function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>Client component has snippet with title {snippet.title}</div>
  )
}

export default SnippetEditForm
'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect('/');
}

export async function createSnippet(
  formstate: { message: string },
  formData: FormData
) {
  return {
    message: 'Title must be longer',
  };
  // 'use server';
  // const title = formData.get('title') as string;
  // const code = formData.get('code') as string;
  // const snippet = await db.snippet.create({
  //   data: {
  //     title,
  //     code,
  //   },
  // });
  // redirect('/');
}

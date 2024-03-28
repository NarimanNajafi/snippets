import { notFound } from "next/navigation";
import { db } from "@/db";
interface SnippetShowPage {
    params: {
        id: string
    }
}
async function snippetShowPage(props: any) {
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id) }
    });

    if (!snippet) {
        return notFound();
    }

    return (
        <div>{snippet.title}</div>
    )
}

export default snippetShowPage
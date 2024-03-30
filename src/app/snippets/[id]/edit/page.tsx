interface SnippetEditPageProps {
    params: {
        id: string
    }
}
function SnippetEditPage(props: SnippetEditPageProps) {
    const id = parseInt(props.params.id);

    return (
        <div>
            Editing snippet with {id}
        </div>
    )
}

export default SnippetEditPage
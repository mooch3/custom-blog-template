export default {
    name: "comment",
    title: "Comment",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            readOnly: true
        },
        {
            name: "text",
            type: "text",
            readOnly: true
        },
        {
            name: "post",
            type: "reference",
            to: [
                {
                    type: "post"
                }
            ]
        },
    ]
}
export default {
  name: "audio",
  type: "document",
  title: "Audio/Podcast",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "audioFile",
      title: "Audio File",
      type: "file",
    },
    {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
  },
  prepare(selection) {
    const { author } = selection;
    return Object.assign({}, selection, {
      subtitle: author && `by ${author}`,
    });
  },
};

import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: false,
    apiVersion: '2021-06-17'
});
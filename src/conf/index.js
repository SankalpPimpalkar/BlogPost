
const config = {
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    projectUrl: String(import.meta.env.VITE_APPWRITE_PROJECT_URI),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    articlesId: String(import.meta.env.VITE_APPWRITE_ARTICLES_COLLECTION_ID),
    imagesBucketId: String(import.meta.env.VITE_APPWRITE_IMAGES_BUCKET_ID),
}

export default config;
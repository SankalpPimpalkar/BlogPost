import { Client, Account, ID, Databases, Storage, Query } from 'appwrite'
import config from '../conf';

class DatabaseService {
    client = new Client()
    account;
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.projectUrl)
            .setProject(config.projectId);

        this.account = new Account(this.client);
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                config.databaseId,
                config.articlesId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage,
                    userId
                }
            )

        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.database.updateDocument(
                config.databaseId,
                config.articlesId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.databaseId,
                config.articlesId,
                slug
            )

            return true

        } catch (error) {
            throw error
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                config.databaseId,
                config.articlesId,
                slug
            )
            
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            const posts = await this.database.listDocuments(
                config.databaseId,
                config.articlesId,
                queries
            )

            return posts.documents
            
        } catch (error) {
            throw error
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.imagesBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId){
        try {

            await this.bucket.deleteFile(
                config.imagesBucketId,
                fileId
            )

            return true
            
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.imagesBucketId,
            fileId
        )
    }
}

const databaseService = new DatabaseService()
export default databaseService
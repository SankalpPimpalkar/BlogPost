import { Client, Account, ID } from 'appwrite'
import config from '../conf';

class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(config.projectUrl)
            .setProject(config.projectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }

        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account
                .createEmailPasswordSession(email, password);

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            console.log('Error getting current user')
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions()

            return true

        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService()
export default authService
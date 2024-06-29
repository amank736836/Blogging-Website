import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // await this.account.createEmailPasswordSession(email, password);
        // await this.sendVerificationEmail();
        // this.account.deleteSessions();
        return this.login({ email, password });
        // return userAccount;
      } else {
        return null; // Handle failure to create account
      }
    } catch (error) {
      console.log("AuthService :: createAccount :: error :: ", error);
      throw error;
    }
  }

  async sendVerificationEmail() {
    try {
      const result = await this.account.createVerification(ID.unique());
      console.log("AuthService :: sendVerificationEmail :: result :: ", result);
      return result;
    } catch (error) {
      console.log("AuthService :: sendVerificationEmail :: error :: ", error);
      throw error;
    }
  }

  async verification(userId, secret) {
    try {
      const result = await this.account.updateVerification(userId, secret);
      console.log("AuthService :: verification :: result :: ", result);
      return result;
    } catch (error) {
      console.log("AuthService :: verification :: error :: ", error);
      throw error;
    }
  }

  async login({ email, password, provider }) {
    try {
    //   if (provider) {
    //     return await this.account.createOAuth2Session(provider, conf.successLoginURL, conf.failureLoginURL);
    //   } else {
        const session = await this.account.createEmailPasswordSession(email, password);
        // const user = await this.getCurrentUser();
        // if (!user.emailVerification) {
        //   await this.sendVerificationEmail();
        //   this.account.deleteSessions();
        //   throw new Error("Please verify your email address to login");
        // }
        return session;
    //   }
    } catch (error) {
      console.log("Auth service :: login :: error :: ", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
        // handle this better if account is not logged in
        const user = await this.account.get();
        if(user){
            return user;
        }else{
            return null;
        }
    } catch (error) {
      console.log("Auth service :: getCurrentUser :: error :: ", error);
    //   throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Auth service :: logout :: error :: ", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;

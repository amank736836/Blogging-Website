const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  tinyMCEApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
  // appwriteRedirectURL : String(import.meta.env.VITE_APPWRITE_REDIRECT_URL),
  // successLoginURL : String(import.meta.env.VITE_SUCCESS_LOGIN_URL),
  // failureLoginURL : String(import.meta.env.VITE_FAILURE_LOGIN_URL),
};

export default conf;

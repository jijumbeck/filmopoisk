
const USER_TOKEN_LOCAL_STORAGE_KEY = 'user_token';

export const tokenStorage = {
    get: () => localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_KEY),
    set: (token: string) => localStorage.setItem(USER_TOKEN_LOCAL_STORAGE_KEY, token),
    delete: () => localStorage.removeItem(USER_TOKEN_LOCAL_STORAGE_KEY)
}
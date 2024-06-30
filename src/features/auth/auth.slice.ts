import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginRequest } from "./auth.service"
import { tokenStorage } from "./auth.storage";

const initialState = {
    isAuth: true
};

export const loginUser = createAsyncThunk<{ token: string }, { username: string, password: string }, {}>(
    'auth/loginUser',
    async (credentials: { username: string, password: string }) => {
        const response = await loginRequest(
            credentials.username,
            credentials.password
        );
        tokenStorage.set(response.token);
        return response;
    });

export const logoutUser = createAsyncThunk<unknown, unknown, {}>(
    'auth/logoutUser',
    () => {
        tokenStorage.delete();
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
        }
    },
    extraReducers(builder) {
        builder.addCase(loginUser.fulfilled, (state) => {
            state.isAuth = true;
        })
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isAuth = false;
        })
    },
})

export default authSlice.reducer;
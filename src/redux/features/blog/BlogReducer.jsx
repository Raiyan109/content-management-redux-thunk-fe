import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchBlogs = createAsyncThunk('blogs/getBlogs', async (name, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:5000/api/v1/blogs`)
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data)
    }
    return data
})

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state) => {
            state.isLoading = true,
                state.isError = false
        })
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload,
                state.isError = false,
                state.isLoading = false
        })
        builder.addCase(fetchBlogs.rejected, (state) => {
            state.blogs = [],
                state.isError = true,
                state.isLoading = false
        })
    }
})

export default blogSlice.reducer
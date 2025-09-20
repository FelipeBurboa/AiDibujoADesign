import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Profile } from "@/tyoes/user";

type ProfileState = { user: Profile | null };
const initialState: ProfileState = { user: null };

const slices = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile | null>) => {
      state.user = action.payload;
    },
    clearProfile: (state) => {
      state.user = null;
    },
  },
});

export const { setProfile, clearProfile } = slices.actions;
export default slices.reducer;

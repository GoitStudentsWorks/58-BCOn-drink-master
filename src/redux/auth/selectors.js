export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsRefresh = (state) => state.auth.isRefresh;
export const selectError = (state) => state.auth.error;
export const selectSubscribed = (state) => state.auth.user.subscribed;
export const selectAvatar = (state) => state.auth.user.avatarURL;

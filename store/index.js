export const state = () => ({
    language: "en",
})

export const mutations = {
    changeLanguage(state, newLanguage) {
        state.language = newLanguage;
    }
}
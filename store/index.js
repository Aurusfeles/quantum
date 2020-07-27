export const state = () => ({
    language: "en",
    activePage: "",
})

export const mutations = {
    changeLanguage(state, newLanguage) {
        state.language = newLanguage;
    },
    changeActivePage(state, newActivePage) {
        state.activePage = newActivePage;
    }
}
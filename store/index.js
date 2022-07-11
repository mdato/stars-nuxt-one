export const state = () => ({
    title: "",
    counter: 0,
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}
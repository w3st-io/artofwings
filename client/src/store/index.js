// [IMPORT] //
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loading: false
	},

	// Syncrous //
	mutations: {
		isLoading(state) { state.loading = true },

		isNotLoading(state) { state.loading = false },
	},

	// Asyncronous //
	actions: {},

	getters: {},
	
	modules: {},
});

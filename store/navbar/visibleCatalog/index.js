export const state = () => ({
  visibleCatalog: false,
});

export const actions = {

  change_visibleCatalog({ commit, state }) {
    console.log($nuxt.$route.path);
      const visibleCatalog = !state.visibleCatalog;
      commit('VISIBLE_CATALOG', visibleCatalog);
  },

  close_visibleCatalog({ commit }) {
      const visibleCatalog = false;
      commit('VISIBLE_CATALOG', visibleCatalog);
  },
};

export const mutations = {
  VISIBLE_CATALOG: (state, visibleCatalog) => state.visibleCatalog = visibleCatalog,
};

export const getters = {
  visibleCatalog: state => state.visibleCatalog,
};

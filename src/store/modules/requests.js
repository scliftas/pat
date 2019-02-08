import axios from 'axios';

// state
export const state = {
  methods: ['GET', 'POST'],
  request: {
      method: 'GET',
      url: '',
      data: [
          {
            key: '',
            value: ''
          }
      ]
  },
  response: false,
  error: false
}

// getters
export const getters = {
    methods: state => state.methods,
    request: state => state.request,
    response: state => state.response,
    error: state => state.error
}

export const mutations = {
    STORE_METHOD (state, { method }) {
        state.request.method = method;
    },
    
    STORE_URL (state, { url }) {
        state.request.url = url;
    },

    STORE_DATUM_KEY(state, { data }) {
        state.request.data[data.index].key = data.value;
    },

    STORE_DATUM_VALUE(state, { data }) {
        state.request.data[data.index].value = data.value;
    },

    CLEAR_DATUM (state, { index }) {
        state.request.data.splice(index, 1);
    },

    ADD_EMPTY_DATUM (state) {
        state.request.data.push({
            key: '',
            value: ''
        });
    },

    STORE_RESPONSE (state, { response }) {
        state.response = response;
    },

    CLEAR_RESPONSE (state) {
        state.response = false;
    },

    STORE_ERROR (state, { error }) {
        state.error = error;
    },

    CLEAR_ERROR (state) {
        state.error = false;
    }
}

export const actions = {
    storeRequest ({ commit }, request) {
        commit('STORE_REQUEST', { request: request });
    },

    storeURL({ commit }, url) {
        commit('STORE_URL', { url: url});
    },

    storeMethod({ commit, state }, method) {
        if (state.methods.includes(method)) commit('STORE_METHOD', { method: method });
    },

    checkDatumKey({ commit, state }, data) {
        commit('STORE_DATUM_KEY', { data: data });

        if (datumIsEmpty(state, data.index)) commit('CLEAR_DATUM', { index: data.index });

        if (datumIsFull(state, data.index)) commit('ADD_EMPTY_DATUM');
    },

    checkDatumValue({ commit, state }, data) {
        commit('STORE_DATUM_VALUE', { data: data });

        if (datumIsEmpty(state, data.index)) commit('CLEAR_DATUM', { index: data.index });

        if (datumIsFull(state, data.index)) commit('ADD_EMPTY_DATUM');
    },

    makeRequest ({ commit, state }) {
        commit('CLEAR_RESPONSE');
        commit('CLEAR_ERROR');

        const data = {};
        let request = JSON.parse(JSON.stringify(state.request));

        request.data.map((object) => {
            if (object.key === null || object.key === '') return object;
            data[object.key] = object.value;
            return object;
        });

        request.data = data;

        if (request.method === 'GET') {
            request.params = request.data;
            delete request.data;
        }

        axios(request).then((response) => {
            commit('STORE_RESPONSE', { response: response })
        }).catch((error) => {
            commit('STORE_ERROR', { error: error });
        });
    }
}

export const datumIsEmpty = (state, index) => {
    return state.request.data[index].key === '' && state.request.data[index].value === '' && state.request.data.length > 1;
}

export const datumIsFull = (state, index) => {
    return state.request.data[index].key !== '' && state.request.data[index].value !== '';
}
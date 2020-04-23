
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {WordpressState, Wordpress, PopularPost, Post} from './types'
import axios from 'axios';

export const state = () => ({
    wordpress: undefined,
    error: false,
    loading: false,
    pageType: ''
});

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<WordpressState, RootState> = {
    async nuxtServerInit({ commit }) {
      try{
        let response = await axios({
          url: 'http://127.0.0.1:8008/all'})
        const payload: Wordpress = response && response.data;
        commit('wordpressLoaded', payload);
      }catch(error) {
        console.log(error);
        commit('wordpressError');
      }
    }
};

export const getters: GetterTree<WordpressState, RootState> = {
    allPosts(state): Post[] {
        const { wordpress } = state;
        const allPosts = (wordpress && wordpress.posts) || [];
        return allPosts
    },
    popularPosts(state): PopularPost[] {
        const { wordpress } = state;
        const popularPosts = (wordpress && wordpress.popularPosts) || [];
        return popularPosts
    },
    loading(state): boolean {
        const { loading } = state;
        return loading
    },
    pageType(state): string {
        const { pageType } = state;
        return pageType
    },
};

export const mutations: MutationTree<WordpressState> = {
    wordpressLoaded(state, payload: Wordpress) {
        state.error = false;
        state.wordpress = payload;
    },
    wordpressError(state) {
        state.error = true;
        state.wordpress = undefined;
    },
    setLoading(state, val: boolean) {
      state.loading = val
    },
    setPageType(state, val: string) {
      state.pageType = val
    }
};

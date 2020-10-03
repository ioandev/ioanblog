
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {WordpressState, Wordpress, PopularPost, Post, Conversation} from './types'
import axios from 'axios';

export const state = () => ({
    wordpress: undefined,
    error: false,
    loading: false,
    pageType: ''
});

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<WordpressState, RootState> = {
  async nuxtServerInit({ commit }, {$sentry}) {
    try{
      $sentry.captureMessage('New visitor', 'info');
      let response = await axios({
        url: process.env.PROXY_URL})
      let payload: Wordpress = response && response.data;
      commit('wordpressLoaded', payload);
    }
    catch(error) {
      $sentry.captureException(error)
      console.log("An error has occured getting the posts.");
      commit('wordpressError');
    }
  }
};

export const getters: GetterTree<WordpressState, RootState> = {
    allPosts(state): readonly Post[] {
        const { wordpress } = state;
        const allPosts = (wordpress && wordpress.posts) || [];
        return allPosts
    },
    allConversations(state): readonly Conversation[] {
        const { wordpress } = state;
        const allConversations2 = (wordpress && wordpress.conversations) || [];
        return allConversations2
    },
    popularPosts(state): readonly PopularPost[] {
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

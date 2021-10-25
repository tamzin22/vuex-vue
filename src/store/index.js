import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import Api from '@/service/api';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      videos : []
    },
    mutations:{
      SET_VIDEOS(state,videos){
        state.videos = videos;
      }
    },
    actions:{
      async loadVideos(context){
        let response = await Api().get('/video/videos');
        context.commit('SET_VIDEOS' ,response.data)
      }
    },
    modules:{}
});

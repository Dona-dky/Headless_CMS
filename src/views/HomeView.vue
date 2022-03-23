<template>
  <div class="home">
    <button type="button" 
     class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
     @click="goTo('newCourses')"
    >
      Create new course
    </button>
    <Course :data="course" v-for="course in courses" :key="'course-' + course.id"/>    
  </div>
</template>

<script>
// @ is an alias to /src
import Course from "@/components/Course.vue"
export default {
  name: 'HomeView',
  components: {
    Course,
  },
  data(){
    return {
      courses : [],
    };
  },
  mounted() {
    this.getAllCourses();
  },
  methods:{
    //async ->
    //this -> recup global
    async getAllCourses(){
      const { data, error } = await this.$supabase.from('courses').select()
      if (data) {
        this.courses = data;
      }else{
        console.log(error);
      }
    },
    goTo(name){
      this.$router.push({ name:  name})
    }
  }
}
</script>

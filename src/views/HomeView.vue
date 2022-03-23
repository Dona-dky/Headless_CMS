<template>
  <div class="home">
    <Course :data="course" v-for="course in courses" :key="'course-' + course.id"/>
    <pre>{{ courses }}</pre>
    
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
    }
  }
}
</script>

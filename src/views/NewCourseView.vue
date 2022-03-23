<template>
  <div>
    Hello New Course
    <form class="w-full max-w-lg" action="">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-name"
          >
            Name
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-red-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
            id="grid-first-name"
            type="text"
            v-model="name"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-description"
          >
            Description
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="grid-last-name"
            type="text"
            v-model="description"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-start-at"
          >
            Début du cours
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="grid-password"
            type="date"
            v-model="start_at"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-start-at"
          >
            Fin du cours
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="grid-password"
            type="date"
            v-model="end_at"
          />
        </div>
      </div>
      <button type="submit" value="Create" @click="createCourse()">Create</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'NewCourseView',
    data(){
    return {
       name: '',
       teacher:'' ,
       description: '',
       start_at: '',
       end_at: '',

    };
    },
    methods:{
    async createCourse(){
      const { data, error } = await this.$supabase.from('courses').insert([
        {name : this.name,
        teacher : this.teacher,
        description : this.description,
        start_at : this.start_at,
        end_at : this.end_at}
      ])
      if (data) {
        this.goTo('home')
      }else{
        console.log(error);
      }
    },
    addToData(){
        console.log("Push data")
    }
    }
};
</script>

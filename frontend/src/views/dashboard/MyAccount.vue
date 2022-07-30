<template>
  <div class="about">
    <div class="hero is-light">
      <div class="hero-body has-text-centered">
        <h1 class="title">המשתמש שלי</h1>
      </div>
    </div>

    <section class="section" style="direction: rtl">
      <div class="columns is-multiline ">
        <div class="column is-12 has-text-centered">
          <h2 class="subtitle is-size-3">הכשרות בביצוע</h2>
        </div>
        <div class="column is-2">
            <Sidebar />
        </div>
        <div class="column is-9">
          <div class="columns is-multiline">
            <div 
              class="column is-3"
              v-for="course in courses"
              v-bind:key="course.id"
            >
              <CourseItem :course="course" />
            </div>
          </div>
        </div>
      </div>

      <!-- <button @click="logout()" class="button is-danger">התנתקות</button> -->
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '@/components/Sidebar.vue'
import CourseItem from '@/components/CourseItem.vue'

export default {
    data() {
      return {
        courses: []
      }
    },
    components: {
      CourseItem,
      Sidebar
    },
    mounted() {
        axios
            .get('courses/')
            // .get('activities/get_active_courses/')
            .then(response => {
                console.log(response.data)

                this.courses = response.data
            })

          document.title = 'שער 0 | הפרופיל שלי'
    },
}
</script>
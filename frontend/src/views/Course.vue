<template>
    <div class="courses">
        <div class="hero is-light">
            <div class="hero-body has-text-centered">
                <h1 class="title">{{ course.title }}</h1>
            </div>
        </div>

        <section class="section" style="direction: rtl">
            <div class="container">
                <div class="columns content">
                    <div class="column is-2">
                        <h2>תוכן עניינים</h2>
                        <ul>
                            <li
                                v-for="lesson in lessons"
                                v-bind:key="lesson.id"
                            >
                                <a @click="setActiveLesson(lesson)">{{ lesson.title }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="column is-10">
                        <template v-if="$store.state.user.isAuthenticated">
                            <template v-if="activeLesson">
                                <h2>{{ activeLesson.title }}</h2>
                                
                                {{ activeLesson.long_description }}

                                <hr>

                                <article 
                                    class="media box"
                                    v-for="comment in comments"
                                    v-bind:key="comment.id"
                                >
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>{{ comment.name }}.</strong> נוצר בתאריך : {{ comment.created_at }}<br>
                                                {{ comment.content }}
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <form v-on:submit.prevent="submitComment()">
                                    <div class="field">
                                        <label class="label">שם</label>
                                        <div class="control">
                                            <input type="text" class="input" v-model="comment.name">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">תוכן</label>
                                        <div class="control">
                                            <textarea class="textarea" v-model="comment.content"></textarea>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <button class="button is-danger">שלח</button>
                                        </div>
                                    </div>
                                </form>
                            </template>

                            <template v-else>
                                {{ course.long_description }}
                            </template>
                        </template>

                        <template v-else>
                            <h2>גישה לתוכן חסומה</h2>
                            
                            <p>יש לבצע התחברות דרך המשתמש, על מנת להמשיך</p>
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            course: {},
            lessons: [],
            comments: [],
            activeLesson: null, 
            comment: {
                name: '',
                content: ''
            }
        }
    },
    mounted() {
        console.log('mounted')

        const slug = this.$route.params.slug

        axios
            .get(`/api/v1/courses/${slug}/`)
            .then(response => {
                console.log(response.data)

                this.course = response.data.course
                this.lessons = response.data.lessons
            })
    },
    methods: {
        submitComment() {
            console.log('submitComment')

            axios
                .post(`/api/v1/courses/${this.course.slug}/${this.activeLesson.slug}/`, this.comment)
                .then(response => {
                    this.comment.name = ''
                    this.comment.content = ''

                    alert('The comment was added!')
                })
                .catch(error => {
                    console.log(error)
                })
        },
        setActiveLesson(lesson) {
            this.activeLesson = lesson

            this.getComments()
        },
        getComments() {
            axios
                .get(`/api/v1/courses/${this.course.slug}/${this.activeLesson.slug}/get-comments/`)
                .then(response => {
                    console.log(response.data)

                    this.comments = response.data
                })
        }
    }
}
</script>
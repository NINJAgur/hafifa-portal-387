<template>
    <div class="about">
        <div class="hero is-light">
            <div class="hero-body has-text-centered">
                <h1 class="title">יצירת הכשרה</h1>
            </div>
        </div>

        <section class="section" style="direction: rtl">
            <div class="mb-6 px-6 py-4 has-background-white-ter">
                <h2 class="subtitle">מידע בסיסי</h2>

                <div class="field">
                    <label>כותרת</label>
                    <input type="text" class="input" v-model="form.title">
                </div>

                <div class="field">
                    <label>תיאור קצר</label>
                    <textarea class="textarea" v-model="form.short_description"></textarea>
                </div>

                <div class="field">
                    <label>תיאור ארוך</label>
                    <textarea class="textarea" v-model="form.long_description"></textarea>
                </div>

                <div class="field">
                    <div class="select is-multiple">
                        <select multiple size="10" v-model="form.categories">
                            <option 
                                v-for="category in categories"
                                v-bind:key="category.id"
                                v-bind:value="category.id"
                            >
                                {{ category.title }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="mb-6 px-6 py-4 has-background-white-ter">
                <h2 class="subtitle">שיעורים</h2>

                <div
                    v-for="(lesson, index) in form.lessons"
                    v-bind:key="index"
                    class="mb-4"
                >
                    <h3 class="subtitle is-size-6">שיעור</h3>

                    <div class="field">
                        <label>כותרת</label>
                        <input 
                            type="text" 
                            class="input" 
                            v-model="lesson.title"
                            :name="`form.lessons[${index}][title]`"
                        >
                    </div>

                    <div class="field">
                        <label>תיאור קצר</label>
                        <textarea class="textarea" v-model="lesson.short_description" :name="`form.lessons[${index}][short_description]`"></textarea>
                    </div>

                    <div class="field">
                        <label>תיאור ארוך</label>
                        <textarea class="textarea" v-model="lesson.long_description" :name="`form.lessons[${index}][long_description]`"></textarea>
                    </div>

                    <hr>
                </div>

                <button class="button is-primary" @click="addLesson()">הוסף שיעור</button>
            </div>

            <div class="field buttons">
                <button class="button is-warning" style="margin: 0.5rem" @click="submitForm('draft')">שמור כטיוטה</button>
                <button class="button is-danger" style="margin: 0.5rem" @click="submitForm('review')">הגש לבדיקה</button>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                title: '',
                short_description: '',
                long_description: '',
                categories: [],
                status: '',
                lessons: []
            },
            categories: [],
        }
    },
    mounted() {
        this.getCategories()
    },
    methods: {
        getCategories() {
            console.log('getCategories')

            axios
                .get('courses/get_categories/')
                .then(response => {
                    console.log(response.data)

                    this.categories = response.data
                })
        },
        submitForm(status) {
            console.log('submitForm')
            console.log(this.form)

            this.form.status = status

            axios
                .post('courses/create/', this.form)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log('error:', error)
                })
        },
        addLesson() {
            console.log('addLesson')

            this.form.lessons.push({
                title: '',
                short_description: '',
                long_description: ''
            })
        }
    }
}
</script>
<template>
    <div class="courses">
        <div class="hero is-light">
            <div class="hero-body has-text-centered">
                <h1 class="title">Courses</h1>
            </div>
        </div>

        <section class="section" style="direction: rtl">
            <div class="container">
                <div class="columns">
                    <div class="column is-2">
                        <aside class="menu">
                            <p class="menu-label">קטגוריות</p>

                            <ul class="menu-list">
                                <li><a class="button has-text-right	is-warning is-active">כל הקורסים</a></li>
                                <li><a>בסיסי</a></li>
                                <li><a>הצפנה</a></li>
                                <li><a>צד לקוח</a></li>
                                <li><a>צד שרת</a></li>
                            </ul>
                        </aside>
                    </div>

                    <div class="column is-10">
                        <div class="columns is-multiline">
                            <div 
                                class="column is-4"
                                v-for="course in courses"
                                v-bind:key="course.id"
                            >
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                        </figure>
                                    </div>

                                    <div class="card-content has-text-centered">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="is-size-5">{{ course.title }}</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            <p>{{ course.short_description }}</p>

                                            <a href="#">More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column is-12">
                                <nav class="pagination">
                                    <a class="pagination-previous">קודם</a>
                                    <a class="pagination-next">הבא</a>

                                    <ul class="pagination-list">
                                        <li>
                                            <a class="pagination-link">1</a>
                                        </li>
                                        <li>
                                            <a class="pagination-link">2</a>
                                        </li>
                                        <li>
                                            <a class="pagination-link">3</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
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
            courses: []
        }
    },
    mounted() {
        console.log('mounted')

        axios
            .get('/api/v1/courses/')
            .then(response => {
                console.log(response.data)

                this.courses = response.data
            })
    }
}
</script>
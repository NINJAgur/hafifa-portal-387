<template>
	<aside class="menu sidebar" >
        <label for="check">
            <fa class="has-text-left" icon="fas fa-bars" id="sidebar_btn"/>
        </label>
        <p class="menu-label">
            כללי
        </p>

        <ul class="menu-list ">
            <li><a>דשבורד <fa icon="fa-solid fa-tachometer-alt" /></a></li>
            <li><a>קורסים <fa icon="fa-solid fa-graduation-cap" /></a></li>
            <li><a @click="logout()">התנתקות <fa icon="fa-solid fa-right-from-bracket" /></a></li>
        </ul>

        <p class="menu-label">
            ניהול
        </p>

        <ul class="menu-list">
            <li><a>חופף <fa icon="fa-solid fa-chalkboard-teacher" /></a></li>
            <li><a>חפיפה <fa icon="fa-solid fa-user-graduate" /></a></li>
            <li><a>חומרי לימוד <fa icon="fa-solid fa-chalkboard" /></a></li>
            <li><a>אישורי צוות <fa icon="fa-solid fa-thumbs-up" /></a></li>
            <li><a>אישורי קורסים <fa icon="fa-solid fa-marker" /></a></li>
        </ul>

        <p class="menu-label">
            יצירת תוכן
        </p>

        <ul class="menu-list">
            <li><a>הכשרות <fa icon="fa-solid fa-lines-leaning" /></a></li>
            <li><a>מבחנים <fa icon="fa-solid fa-book" /></a></li>
            <li><a>שיעורים <fa icon="fa-solid fa-question-circle" /></a></li>
        </ul>
    </aside>
</template>

<script scoped>
import axios from 'axios'

export default {
     data() {
        return {
            activeCategory: false
        }
    },
    methods: {
        async logout() {
            console.log('logout')

            await axios
              .post('token/logout/')
              .then(response => {
                console.log('Logged out')
              })
              .catch(error => {
                console.log(error)
              })

            axios.defaults.headers.common['Authorization'] = ""

            localStorage.removeItem('token')

            this.$store.commit('removeToken')

            this.$router.push('/')
        }
    }
}
</script>

<style>
    #check {
    display: none;
    }


    #check:checked~.sidebar {
    left: -190px;
    }

    #check:checked~.sidebar a span {
    display: none;
    }

    #check:checked~.sidebar a {
    font-size: 20px;
    margin-left: 170px;
    width: 80px;
    }
</style>
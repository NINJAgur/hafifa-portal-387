<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main naviation" style="min-height: 5rem; padding: 0 6.5%;">
        <div class="navbar-brand">
            <a class="navbar-item is-size-4" href="/"><img src="../assets/matzov-icon.png" alt="" style="margin: 1rem"> שער 0</a>
        </div>

        <div id="navbar-item" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">דף הבית</router-link>
                <router-link to="/about" class="navbar-item">אודות</router-link>
                <router-link to="/courses" class="navbar-item">הכשרות</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <template v-if="$store.state.user.isAuthenticated">
                            <router-link to="/dashboard/my-account" class="button is-warning">המשתמש שלי</router-link>
                        </template>

                        <template v-else>
                            <a href="/sign-up" class="button is-warning"><strong>הירשמות</strong></a>
                            <a href="/log-in" class="button is-light">התחברות</a>
                        </template>
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
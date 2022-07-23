<template>
  <div class="home">
    <div class="hero is-medium">
      <div class="has-text-centered" style="display:flex; align-items:center; margin:2rem; gap: 4rem;">
        <div class="thumbnail" style="
              -webkit-box-flex: 1;
              -ms-flex: 0.5 1 28rem;
                  flex: 0.5 1 28rem;">
            <img src="../assets/thumbnail.png" alt="" style="width: 80%; border-radius: 49% 51% 55% 45% / 56% 30% 70% 44%;">
        </div>
        <div class="content">
            <h1 class="title">פורטל החפיפה של יחידת מצו"ב-טופז</h1>
            <h2 class="subtitle">!ברוך הבא לשער 0</h2>
            <div class="column is-12 has-text-centered">
            <a href="#" class="button is-danger is-size-3 mt-3 mb-6">להתחלת ההכשרה</a>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4">
            <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info"><i class="fas fa-home"></i></span>

              <h2 class="is-size-4 mt-4 mb-4">למידה משמעותית תחת בקרה</h2>

              <p>הלמידה מפוקחת ומנוהלת על ידי מערך מפקדים, ראשי צוות ומנהלים</p>
            </div>
          </div>

          <div class="column is-4">
            <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info"><i class="far fa-clock"></i></span>

              <h2 class="is-size-4 mt-4 mb-4">למידה בחזית הטכנולוגית</h2>

              <p>הכשרות המתקדמות ביותר בצה"ל, לתפקידים החשובים ביותר בחטיבת ההגנה בסייבר</p>
            </div>
          </div>

          <div class="column is-4">
            <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info"><i class="far fa-comments"></i></span>

              <h2 class="is-size-4 mt-4 mb-4">אינטראקטיביות ונוחות</h2>

              <p>השתמשו במאגר חומרי העזר והסרטונים כדי למצות את זמן הלימודים שלכם</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
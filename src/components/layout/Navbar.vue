<template>
  <nav class="navbar velos-navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item brand-link">
        <img src="@/assets/logo.png" alt="Velos logo" class="navbar-logo" />
        <span class="navbar-title">Velos CRM</span>
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <template v-if="$store.state.isAuthenticated">
          <router-link to="/dashboard/leads" class="navbar-item nav-link">Leads</router-link>
          <router-link to="/dashboard/clients" class="navbar-item nav-link">Clients</router-link>
          <router-link to="/dashboard/team" class="navbar-item nav-link">Team</router-link>
        </template>

        <div class="navbar-item">
          <div class="buttons">
            <template v-if="!$store.state.isAuthenticated">
              <router-link to="/sign-up" class="button velos-button"><strong>Sign up</strong></router-link>
              <router-link to="/log-in" class="button velos-button-outlined">Log in</router-link>
            </template>

            <template v-else>
              <router-link to="/dashboard/my-account" class="button velos-button">My account</router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-logo {
  height: 40px;
  width: auto;
  margin-right: 10px;
}

/* De titel "Velos CRM" naast het logo */
.navbar-title {
  color: #222222; /* Blijft zwart voor goed contrast op de crèmekleur */
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

/* De navbar zelf, nu crèmekleurig */
.velos-navbar {
  background-color: #ffffff !important; /* De nieuwe crèmekleur */
  border-bottom: 1px solid #d9bf9c; /* Een subtiele donkerdere rand voor diepte */
}

/* Link van het logo/titel (container voor logo en titel) */
.brand-link {
  color: #a41917 !important; /* Rode tekst voor de link zelf */
}

/* Navigatie links (Leads, Clients, Team) */
.nav-link {
  color: #a41917 !important; /* Rode tekst */
}

.nav-link:hover {
  background-color: transparent;
  color: #821414 !important; /* Donkerder rood bij hover */
}

/* De okergele primaire knop (Sign up / My account) */
.velos-button {
  background-color: #ee8b1a !important; /* Okergeel, blijft hetzelfde */
  border-color: transparent;
  color: white !important;
}

.velos-button:hover {
  background-color: #d97706 !important; /* Donkerder okergeel bij hover, blijft hetzelfde */
  color: white !important;
}

/* De 'Log in' knop (rood omrand, crèmekleurige achtergrond, rode tekst) */
.button.velos-button-outlined {
    background-color: #ffffff !important; /* Crèmekleurige achtergrond */
    color: #a41917 !important; /* Rode tekst */
    border-color: #a41917 !important; /* Rode rand */
    font-weight: 600;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.button.velos-button-outlined:hover {
    background-color: #ffffff !important; /* Iets donkerder crèmekleur bij hover */
    color: #821414 !important; /* Donkerder rood bij hover */
    border-color: #821414 !important; /* Donkerder rode rand bij hover */
}
</style>
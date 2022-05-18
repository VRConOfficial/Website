<script setup lang="ts">

</script>

<template>
  <header>
    <div class="header_left">
      <nav>
        <ul>
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>VRCon Convention</li>
          </a>
          <a>
            <li>Event of the Month</li>
          </a>
        </ul>
      </nav>
    </div>
    <div class="header_center">
      <img alt="VRCon logo" class="logo" src="@/assets/logo.svg" />
    </div>
    <div class="header_right">
      <nav>
        <ul>
          <a>
            <li>Previous Events</li>
          </a>
          <a>
            <li>Meet the Team</li>
          </a>
          <a>
            <li>Volunteer with us!</li>
          </a>
        </ul>
      </nav>

    </div>
  </header>
</template>

<style scoped>
@import "@/assets/base.css";

.logo {
  width: 125px;
  height: auto;
}

header {
  height: 6em;
}
header div {
  display: flex;
  margin: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header_left,
.header_right {
  padding-top: 2em;
}

.header_center {
  padding-top: 3em;
}
.header_left ul,
.header_right ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}

.header_left ul li,
.header_right ul li {
  margin: 1em .5em;
  cursor: pointer;
  text-align: center;
}

.header_left a,
.header_right a {
  color: inherit;
  font-size: var(--fs-h3);
  width: 200px;
  margin: 0 1em;
}

.header_left a:visited,
.header_right a:visited {
  color:inherit;
}
</style>

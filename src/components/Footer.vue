<script setup>

</script>
<template>
    <footer class="Footer">
        <div class="Footer--container">
            <h2 class="Global-title Footer-title">MyMyGradient</h2>
            <div class="Footer-grid">
                <ul class="Footer-list">
                    <h3 class="Footer-list-title">Contact Me</h3>
                    <li class="isHover Footer-list-link"><a href="#">GitHub</a></li>
                    <li class="isHover Footer-list-link"><a href="#">Linkedin</a></li>
                    <li class="isHover Footer-list-link"><a href="#">Instagram</a></li>
                    <li class="isHover Footer-list-link"><a href="#"></a></li>
                </ul>
                <ul>
                    <h3 class="Footer-list-title">Project</h3>
                    <li class="isHover Footer-list-link"><a href="https://github.com/plaga2001/MyMyGradient" target="_blank">Code on GitHub</a></li>
                    <h3 class="Footer-list-title">This project was made with</h3>
                    <li class="isHover Footer-list-link"><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
    .Footer{
        width: 100%;
        background-color: var(--black-background);
        &--container{
            max-width: 1450px;
            margin: auto;
            background-color: transparent;
            padding: calc(var(--gap) + 10px);
        }
        &-title{
            font-size: 2em;
            font-weight: bold;
            line-height: normal;
        }
        &-grid{
            display: grid;
            grid-template-columns: repeat(auto-fit , minmax(15rem, 1fr));
            grid-auto-rows: auto;
            color: var(--font-white);
            column-gap: var(--gap);
        }
        &-list{
            &-link{
                margin-top: .4375rem;
            }
            &-title{
                font-size: 0.8em;
                color: #6d6d6d;
                margin-top: var(--gap);
            }
        }
    }

    .isHover{
        transition: color var(--transition) cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .isHover:hover{
        color: var(--hover);
    }
</style>
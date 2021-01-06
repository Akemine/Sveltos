<script>
    
    import { Button, Col } from 'sveltestrap';
    import { count } from '../stores';

    // Fonction qui modifie la variable currentMenu, en fonction de celle-ci, un algorithme affichera une vue differente
    export function handleMenu(e){
		count.update(n => e.target.value);
	}
    
</script>



<navbar class="navbar"> 
    <!-- Mes boutons qui demande l'affichage d'un contenu-->
    <button class="btnInNavbar" on:click="{handleMenu}" value='1'>Stéphane Mestric</button>
</navbar>


<style>
          /* Navbar */

.navbar{
          width: 100%;
          background-color: 	#FFA07A;
          border-radius: 1em;
          margin-bottom: 1%;
}

.btnInNavbar{
    width: 100%;
    background-color: 	#FFA07A !important;
    border: none;
    color: white;
    font-size: 1vw;
}

</style>
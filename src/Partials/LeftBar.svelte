<script>
    
    import { Button } from 'sveltestrap';
import { count } from '../stores';

    export function handleMenu(e){
		count.update(n => e.target.value);
	}
    
</script>

<div class="leftMenu"> 
    <!-- Mes boutons qui demande l'affichage d'un contenu-->
	<button class="btnDiplome" on:click="{handleMenu}" value='2'>Mes diplômes</button>
	<button class="btnEntreprise" on:click="{handleMenu}" value='3'>Mes entreprises</button>
	<button class="btnTechnologie" on:click="{handleMenu}" value='4'>Mes technologies</button>
    <button class="btnContact" on:click="{handleMenu}" value='5'>Me contacter</button>
</div>


<style>
          /* Navbar */

.leftMenu{
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-evenly;
}

.btnDiplome{
    background-color: #CD5C5C;
    color: white;
    border-radius: 2em;
    font-size: 1vw;
}

.btnEntreprise{
    background-color: #F08080;
    color: white;
    border-radius: 2em;
    font-size: 1vw;
}

.btnTechnologie{
    background-color: 	#FA8072;
    color: white;
    border-radius: 2em;
    font-size: 1vw;
}

.btnContact{
    background-color: 	#E9967A;
    color: white;
    border-radius: 2em;
    font-size: 1vw;
}

</style>
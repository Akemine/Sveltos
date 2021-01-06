<script>
	// Import de store svelte
	import { count } from './stores.js';

	//  Import de mes fichiers sveltes - Content
	import Accueil from  './Content/Accueil.svelte'
	import Diplome from  './Content/Diplome.svelte'
	import Technologie from  './Content/Technologie.svelte'
	import Entreprise from  './Content/Entreprise.svelte'
	import Contact from  './Content/Contact.svelte'

	// Import de mes fichiers sveltes - Partials
	import Navbar from  './Partials/Navbar.svelte'
	import LeftBar from  './Partials/LeftBar.svelte'
	import Footer from  './Partials/Footer.svelte'

	import { Alert, Col} from 'sveltestrap';

	// Variable qui indiqe le menu à afficher
	let count_value

	// Function qui "abonne" la valeur du store à ma valeur local.
	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});
	
</script>

<main>
	<div class="container">
		<div class="row">
			<Navbar/>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
					<Alert>
						<strong class="alert-heading">
						Je suis actuellement disponible pour des projets hors heures de travail, me contacter ici :
						</strong>
					</Alert>
			</Col>

			<Col xs="4" >
				<LeftBar/>
			</Col>
			<Col xs="8">
				<!-- Algo du menu qui doit s'afficher -->
				{#if count_value == 1}
					<Accueil/>
				{:else if count_value == 2}
					<Diplome/>
				{:else if count_value == 3}
					<Entreprise/>
				{:else if count_value == 4}
					<Technologie/>
				{:else if count_value == 5}
					<Contact/>
				{/if}
			</Col>
			<Footer/>
		</div>	
	</div>
</main>

<style>
	main {
		text-align: center;
		font-size: 1vw;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
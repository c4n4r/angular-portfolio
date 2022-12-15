# formater les données pour ler envoyer au component

## Effectué :

Adapter nos données pour qu'elles soient conformes a ce que l'on veut utiliser dans notre app

- Créer une nouvelle interface **Category** (Dans le dossier model/categories)

  - Cette interface représente l'objet qui sera utilisé dans le contexte de notre application

- Dans notre **categories.service** créer un petit algo qui va transformer les données du serveur vers
  notre interface **Category**

- **categories.service** retourne ces données bien formatées à notre component qui se charge de les
  afficher

---

# Ajouter les urls des images à mes categories

## Effectué :

Enrichir notre interface **Category** pour qu'elle implémente les url des images

- Ajouter un champ image à notre interface **Category**

  - Ce champ n'est pas obligatoire (?)

- Modifier notre adapter pour qu'il aille chercher les données de nos images (les urls) et les implémenter dans
  nos instances de **Category**

- Afficher les images dans le template

# Refactorisation de notre service **categories.service**

## Principe :

Mon service est actuellement en charge de faire 2 chose :

- Récupérer les données
- Adapter les données à notre système

Les bonnes pratiques demandent a ce qu'une classe ou une méthode ne fassent qu'une seule chose.
Nous allons donc éxtraire le logique d'adaptation des données de notre **categories.service** vers une methode spécifique qui sera UNIQUEMENT en charge de transformer une source de données en un tableaus de **Category**

- Créer un fichier **category.adapter.ts** dans le dossier models
- Extraire la logique de notre **categories.service** dans ce nouvel adapter
- Utiliser cet adapter dans norte **categories.service**

# Ajouter une nouvelle page pour afficher notre savoir faire

- Ajouter une route dans **app-routing.module**
  - Cette route s'appelle Skills
- Créer un nouveau component (Qui sera une page entière) dans pages/skils-page
- Ajouter les router-link dans le **header.component.html** pour gérer la navigation

# Chercher les technos liées à une catégorie quand on clique dessus

- Créer un évenement de click dans **skills-page.component.html**
  - cet evenement est lié a une methode exposée dans le **skills-page.component.ts**
- La methode **selectCategory** va faire appel à un service spécifique qui aura en charge de demander les
  technos au serveur.
- Créer ce service avec le CLI dans le dossier : services (**TechnosService**)
  - **Attention!!** Ne pas oublier de rajouter ce service dans les **Providers** de votre Module
- Dans ce nouveau service écrire une methode qui aura pour objectif de faire un get sur le serveur pour récupérer les technos.

## Exercice 1 : Ecrire l'adapter qui transformera les données du serveur vers des données facilement exploitables par notre application (S'inspirer de ce qui a été fait pour les catégories)

- Créer un adapter dans le dossier models/adapters qui aura pour nom **techno.adapter.ts**
- On branche cet adapter a notre **TechnosService** (Voir ce qui a été fait dans le **CategoriesService** si vous voulez voir une application similaire)
- le component **SkillsPageComponent** récupère les données correctement formatées et peut les afficher dans le templaten (\*ngFor)

## Exercice 2 : En s'inspirant de ce qui a été réalisé précédemment, développez la dernière partie de l'application :

- Quand je clique sur une **Techno** sur la page, afficher les **skills** qui sont liées a cette technologie
- Faites attention : Quand on a une techno de sélectionné, les **skills** liées doivent s'afficher, mais si des **skills** sont affichés, et que vous changez de **techno**... gérer ce cas

## Exercice 3 : Travailler un peu la mise en page de votre **SkillsPageComponent** pour que les données suivantes s'affichent :

- Pour les technos et skills je veux : Le name et le hook
- pour chaque techno et skill : je peux clicker sur un lien qui me permet de naviger vers une page spécifique à ma techno / skill sélectionné

## Créer une nouvelle page pour les skills

Une nouvelle page doit être générée avec le CLI dans le dossier pages

- Ajouter cette nouvelle page au routing
- La route de cette page est dynamique, l'id de la **Skill** sélectionnée doit être passée en paramètres (skill/:id/show)

Dans le nouveau component :

- Récupérer l'id de ls **Skill** passée en paramètre de l'url dans le constructeur (voir : this.selectedId = route.snapshot.params['id'];)

- Dans el OnInit, je demande a mon **SkillsService** de me retrouver les infos de ma **Skill** en fonction de son id
- Ajouter une nouvelle methode dans le **SkillsService** pour faire cela.
- Adapter les données à l'aide du **skills.adapter.ts**
- Retourner les infos formatées au component.
- Faire une jolie mise en page

## refacto component de cards

Plutot que d'écrire plusieurs fois des div dans ma **skills-page**, je vais créer un component spécifique qui aura pour objectif de d'afficher une card avec des infos génériques passées par le parent

- le décorateur @Input() présent dans le **CustomCardComponent** donne la possibilité au parent de renseigner les données membre de ce component.

- dans mon template de **skills-page** je peux utiliser instancier mon component de la manière suivante

```
  <app-custom-card
  routerLink="/skills/{{ skill.id }}/show"
  \*ngFor="let skill of relatedSkills"
  [title]="skill.name"
  [content]="skill.hook"
  [image]="skill.image?.thumbnail"
  >
  </app-custom-card>
```

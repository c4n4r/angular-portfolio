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

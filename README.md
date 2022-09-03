# Site de la MP* du lycée La Martinière Monplaisir

## [Documentation officielle](https://docusaurus.io/docs)

Ci-dessous, un résumé des fonctionnalités les plus utiles.

## Modifier les paramètres généraux (titre du site, logo...)

Dans [docusaurus.config.js](./docusaurus.config.js).

## Ajouter un document pour votre matière

Dans docs/<matiere> (dossier à créer si besoin).  
Chaque sous-dossier correspond à une catégorie (Cours, Exercice...).  
Les fichiers doivent être écrits en markdown : [guide pour inclure image, titre, table...](https://www.markdownguide.org/basic-syntax).

Add file > New file pour créer un nouveau fichier  
Le "crayon" pour éditer un fichier.

### Inclure un pdf avec preview

Pour inclure un pdf dans un fichier markdown, ajouter votre fichier.pdf dans le même dossier et (en changeant éventuellement les tailles) : 
```
 <iframe src={require('./fichier.pdf').default} width="100%" height="1000"></iframe> 
```
Voir [un exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/16f01758462c8d19ad770f1618ec47c285bf3f8c/docs/math/2_Cours)

## Blog (actualité de la classe)

Créer un fichier dans [blog/](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main/blog), au format yyyy-mm-dd-titre.md. 
[Exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/blob/16f01758462c8d19ad770f1618ec47c285bf3f8c/blog/2022-09-01-rentree.mdx)

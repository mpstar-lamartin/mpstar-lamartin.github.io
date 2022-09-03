# Site de la MP* du lycée La Martinière Monplaisir

## Modifier les paramètres généraux (titre du site, logo...)

Dans [docusaurus.config.js](./docusaurus.config.js).

## Ajouter un document pour votre matière

Dans [docs/matiere](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main/docs) (dossier à créer si besoin).  
Chaque sous-dossier correspond à une catégorie (Cours, Exercice...).  
Les fichiers doivent être écrits en markdown : [guide pour inclure image, titre, table...](https://www.markdownguide.org/basic-syntax).

Add file > New file pour créer un nouveau fichier dans le dossier actuel.  
Le "crayon" pour éditer un fichier.  
Puis cliquer sur "commit changes" tout en bas.

Vous pouvez aussi utiliser [ce lien](https://github.dev/mpstar-lamartin/mpstar-lamartin.github.io) pour éditer le site dans un éditeur.

## Génération du site

Lorsque vous effectuez une modification, le site est automatique regénéré, ce qui peut prendre quelques minutes. Si une croix rouge apparaît, c'est qu'il y a eu une erreur (poster un message sur [issues](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/issues) ou me demander directement).

### Inclure un pdf avec preview

Pour inclure un pdf dans un fichier markdown, ajouter votre fichier.pdf dans le même dossier et (en changeant éventuellement les tailles) : 
```
 <iframe src={require('./fichier.pdf').default} width="100%" height="1000"></iframe> 
```
Voir [un exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/16f01758462c8d19ad770f1618ec47c285bf3f8c/docs/math/2_Cours)

## Blog (actualité de la classe)

Créer un fichier dans [blog/](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main/blog), au format yyyy-mm-dd-titre.md.  
[Exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/blob/16f01758462c8d19ad770f1618ec47c285bf3f8c/blog/2022-09-01-rentree.mdx)


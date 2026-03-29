// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };
  const courses1 = ['Pommes', 'Lait', 'Pain', 'Beurre'];
  const courses2 = ['Stylos', 'Cahiers', 'Règle', 'Colle'];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Greeting prenom="Mohamed" />
      <Profil utilisateur={utilisateur} taille={150} />
      <Voiture marque="Renault" modele="Clio" couleur="Rouge" />
      <Voiture marque="Peugeot" modele="208" couleur="Bleu" />
      <Voiture marque="Toyota" modele="Yaris" couleur="Blanc" />
      <ListeCourses elements={courses1} />
      <ListeCourses elements={courses2} />
    </div>
  );
}

export default App;
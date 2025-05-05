import React from "react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Same as Landing Page */}
      <div className="bg-white py-4 shadow-sm z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-gray-800 font-bold text-xl">Secret<span className="text-red-500">Ballot</span></Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Accueil</Link>
              <Link to="/features" className="text-gray-600 hover:text-gray-900">Fonctionnalités</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">Comment ça marche</Link>
              <Link to="/#about" className="text-gray-600 hover:text-gray-900">À propos</Link>
              <Link to="/#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="border border-blue-500 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-50">Connexion</Link>
              <Link to="/register" className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">S'inscrire</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fonctionnalités de SecretBallot
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez comment notre plateforme révolutionne le vote électronique avec des technologies de pointe 
            et une approche centrée sur l'utilisateur.
          </p>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Nos fonctionnalités principales
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Sécurité avancée</h3>
            <p className="text-gray-600 mb-4">
              Protection par chiffrement de bout en bout garantissant la confidentialité absolue de chaque vote. 
              Aucune information ne peut être interceptée ou modifiée pendant la transmission.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Authentification à deux facteurs
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Protection contre les tentatives de fraude
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Chiffrement de données sensibles
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Technologie blockchain</h3>
            <p className="text-gray-600 mb-4">
              Chaque vote est enregistré dans une blockchain immuable, créant un registre transparent 
              et inaltérable qui garantit l'intégrité du processus électoral.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Traçabilité complète des votes
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Vérification par consensus
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Résistance aux altérations
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Accessibilité universelle</h3>
            <p className="text-gray-600 mb-4">
              Notre plateforme est conçue pour être accessible à tous les citoyens, quelles que soient 
              leurs compétences techniques ou leurs besoins spécifiques.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Interface intuitive et simple
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Compatible avec les technologies d'assistance
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Design responsive pour tous appareils
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Résultats en temps réel</h3>
            <p className="text-gray-600 mb-4">
              Visualisez les résultats des élections instantanément dès la clôture du scrutin, 
              avec des analyses détaillées et des représentations graphiques.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Tableaux de bord interactifs
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Graphiques de participation
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Exportation des données
              </li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Élections programmables</h3>
            <p className="text-gray-600 mb-4">
              Planifiez des élections à l'avance avec des paramètres personnalisables et 
              un contrôle complet sur les périodes de vote et les critères d'éligibilité.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Calendrier d'élections
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Options de paramétrage avancées
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Rappels automatiques aux électeurs
              </li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Administration simplifiée</h3>
            <p className="text-gray-600 mb-4">
              Un tableau de bord complet pour les administrateurs permettant de gérer facilement 
              les élections, les candidats et les utilisateurs.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Gestion des utilisateurs
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Configuration des élections
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Rapports et analyses
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Comment ça fonctionne
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-blue-200">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white text-blue-600 font-bold">
                    1
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-800">Création du compte</h3>
                  <p className="text-gray-600">
                    Inscrivez-vous sur notre plateforme en fournissant vos informations personnelles.
                    Votre identité sera vérifiée pour garantir l'intégrité du processus électoral.
                  </p>
                </li>
                
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white text-blue-600 font-bold">
                    2
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-800">Parcourir les élections</h3>
                  <p className="text-gray-600">
                    Accédez à la liste des élections actives et consultez les détails des candidats
                    et leurs programmes pour faire un choix éclairé.
                  </p>
                </li>
                
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white text-blue-600 font-bold">
                    3
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-800">Vote sécurisé</h3>
                  <p className="text-gray-600">
                    Votez en toute confidentialité pour votre candidat préféré. Votre vote sera 
                    chiffré et enregistré de manière sécurisée dans la blockchain.
                  </p>
                </li>
                
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white text-blue-600 font-bold">
                    4
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-800">Vérification et résultats</h3>
                  <p className="text-gray-600">
                    Recevez une confirmation de votre vote et consultez les résultats en temps réel 
                    une fois l'élection terminée. Vérifiez l'intégrité du processus grâce à notre 
                    technologie blockchain transparente.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Questions fréquemment posées
          </h2>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-800">Comment garantissez-vous la sécurité des votes?</h3>
              <p className="mt-2 text-gray-600">
                Nous utilisons une technologie blockchain avec chiffrement de bout en bout, une vérification en deux étapes 
                et des audits réguliers pour garantir la sécurité maximale de chaque vote.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-800">Est-ce que je peux vérifier que mon vote a été comptabilisé?</h3>
              <p className="mt-2 text-gray-600">
                Oui, chaque vote génère un identifiant unique que vous pouvez utiliser pour vérifier que votre vote 
                a bien été enregistré dans la blockchain, sans compromettre son anonymat.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-800">Comment créer une élection sur la plateforme?</h3>
              <p className="mt-2 text-gray-600">
                Les administrateurs peuvent créer facilement de nouvelles élections via le tableau de bord d'administration.
                Il suffit de renseigner les informations de l'élection, d'ajouter les candidats et de définir les dates.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-800">Que faire si j'ai des difficultés techniques?</h3>
              <p className="mt-2 text-gray-600">
                Notre équipe de support est disponible 24/7 pour vous aider. Vous pouvez nous contacter via le formulaire 
                de contact ou par email à support@secretballot.ma.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à rejoindre la révolution du vote électronique?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Inscrivez-vous dès maintenant et participez aux prochaines élections avec SecretBallot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium">
              Créer un compte
            </Link>
            <Link to="/elections" className="bg-transparent border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium">
              Explorer les élections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
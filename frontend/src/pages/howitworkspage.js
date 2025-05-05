import React from "react";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
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
            Comment fonctionne SecretBallot?
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez le processus simple et sécurisé de vote électronique, de l'inscription jusqu'aux résultats.
          </p>
        </div>
      </div>

      {/* Main Process Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Le processus en 4 étapes simples
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6">
                  <span className="text-blue-600 font-bold text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Créez votre compte</h3>
                  <p className="text-gray-600 mb-4">
                    L'inscription se fait en quelques étapes simples :
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Remplissez le formulaire avec vos informations personnelles
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Vérifiez votre adresse email
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Complétez la vérification d'identité
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6">
                  <span className="text-blue-600 font-bold text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Explorez les élections actives</h3>
                  <p className="text-gray-600 mb-4">
                    Une fois connecté, vous avez accès à :
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Liste complète des élections en cours
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Détails des candidats et leurs programmes
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Calendrier des élections à venir
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6">
                  <span className="text-blue-600 font-bold text-2xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Votez en toute sécurité</h3>
                  <p className="text-gray-600 mb-4">
                    Le processus de vote est simple et sécurisé :
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Authentification à double facteur pour voter
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Sélection confidentielle de votre choix
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Confirmation immédiate du vote
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6">
                  <span className="text-blue-600 font-bold text-2xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Suivez les résultats</h3>
                  <p className="text-gray-600 mb-4">
                    Après la clôture du vote :
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Résultats disponibles en temps réel
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Vérification blockchain du décompte
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Statistiques détaillées de participation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Sécurité et transparence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Chiffrement de bout en bout</h3>
              <p className="text-gray-600">
                Vos votes sont protégés par un chiffrement avancé garantissant leur confidentialité absolue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Technologie Blockchain</h3>
              <p className="text-gray-600">
                Chaque vote est enregistré de manière immuable dans notre blockchain, garantissant l'intégrité du processus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Vérification transparente</h3>
              <p className="text-gray-600">
                Suivez et vérifiez votre vote grâce à notre système de vérification transparent et accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Prêt à participer?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez SecretBallot dès aujourd'hui et participez aux décisions qui façonnent votre communauté.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium">
              Créer un compte
            </Link>
            <Link to="/features" className="bg-white text-blue-600 border border-blue-300 px-8 py-3 rounded-md font-medium hover:bg-blue-50">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
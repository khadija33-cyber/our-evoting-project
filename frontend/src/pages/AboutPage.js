import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
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
              <Link to="/about" className="text-gray-600 hover:text-gray-900">À propos</Link>
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
            À Propos de SecretBallot
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre mission est de renforcer la démocratie participative et l'engagement citoyen par une technologie de vote sécurisée et accessible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Notre Histoire</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                SecretBallot est née en 2023 de la conviction que chaque citoyen devrait pouvoir participer activement aux décisions qui affectent sa communauté. Face aux défis de la participation citoyenne traditionnelle, nous avons développé une solution innovante qui combine accessibilité et sécurité.
              </p>
              <p className="text-gray-700 mb-6">
                Notre fondateur, passionné par la technologie blockchain et la gouvernance participative, a rassemblé une équipe multidisciplinaire pour créer une plateforme qui redéfinit le vote électronique au Maroc.
              </p>
              <p className="text-gray-700">
                Depuis notre création, nous avons accompagné plusieurs municipalités et organisations dans la mise en place de consultations citoyennes transparentes et inclusives, avec un taux de participation supérieur aux méthodes traditionnelles.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Nos Valeurs</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Sécurité et confidentialité</h3>
                </div>
                <p className="text-gray-600">
                  Nous garantissons l'intégrité et la confidentialité de chaque vote grâce à notre technologie blockchain avancée et notre chiffrement de bout en bout.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Inclusion et accessibilité</h3>
                </div>
                <p className="text-gray-600">
                  Notre plateforme est conçue pour être accessible à tous, indépendamment de l'âge, des compétences techniques ou des besoins spécifiques.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Innovation constante</h3>
                </div>
                <p className="text-gray-600">
                  Nous investissons continuellement dans la recherche et le développement pour améliorer notre technologie et offrir les solutions les plus avancées.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Notre Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Cybersécurité</h3>
              <p className="text-gray-600 text-center">
                Notre équipe maîtrise les dernières technologies de chiffrement et de sécurisation des données pour garantir l'intégrité de chaque vote.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Gouvernance Électronique</h3>
              <p className="text-gray-600 text-center">
                Nous disposons d'une expertise approfondie dans la mise en place de systèmes de démocratie participative adaptés aux institutions publiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Technologie Blockchain</h3>
              <p className="text-gray-600 text-center">
                Notre plateforme exploite la puissance de la blockchain pour assurer transparence et inviolabilité des scrutins électroniques.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Nos Domaines d'Application</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-700 mb-10">
              Notre plateforme de vote électronique s'adapte à de nombreux contextes pour faciliter la prise de décision collective.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-5 text-center">
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <svg className="w-10 h-10 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">Consultations Publiques</h3>
              </div>
              <div className="p-5 text-center">
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <svg className="w-10 h-10 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">Budgets Participatifs</h3>
              </div>
              <div className="p-5 text-center">
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <svg className="w-10 h-10 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">Référendums Locaux</h3>
              </div>
              <div className="p-5 text-center">
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <svg className="w-10 h-10 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">Élections Sécurisées</h3>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-700">
                SecretBallot peut être déployé pour tous types de scrutins, des simples sondages aux élections complexes nécessitant une sécurité maximale et une vérification des résultats en temps réel.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Intéressé par une collaboration?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous représentiez une institution gouvernementale, une organisation ou une entreprise, nous serions ravis de discuter comment SecretBallot peut vous aider.
          </p>
          <Link to="/#contact" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium">
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
"use client"

import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Navigation */}
      <div className="bg-white py-4 shadow-sm z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-gray-800 font-bold text-xl">Secret<span className="text-red-500">Ballot</span></Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Accueil</Link>
              <Link to="/features" className="text-gray-600 hover:text-gray-900">Fonctionnalités</Link>

              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">Comment ça marche</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">À propos</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="border border-blue-500 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-50">Connexion</Link>
              <Link to="/register" className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">S'inscrire</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Curved Section */}
      <div className="bg-blue-500 h-60 relative overflow-hidden">
        {/* Bottom curve */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path fill="#EBF3FF" d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Hero Section with Light Blue Background */}
      <div className="bg-[#EBF3FF] pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
                La Voix des Citoyens <br />
              </h1>
              <p className="text-gray-700 mb-8">
                SecretBallot est une plateforme innovante qui permet aux citoyens  de participer activement aux décisions qui façonnent leur ville. Votez, proposez et suivez les initiatives locales en toute transparence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium">
                  Rejoindre la Communauté
                </Link>
                <Link to="/elections" className="bg-white text-blue-500 border border-blue-300 px-6 py-3 rounded-md font-medium hover:bg-blue-50">
                  En savoir plus →
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="/images/4448.jpg" 
                  alt="Online Voting System" 
                  className="w-full h-auto rounded-md"
                  style={{ maxHeight: '350px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Why Choose Section */}
      <div id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Pourquoi Choisir SecretBallot?</h2>
          <p className="text-center text-gray-600 mb-12">
            Notre plateforme offre ces outils innovants pour renforcer la démocratie participative .
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sécurité & Transparence</h3>
              <p className="text-gray-600">Vos votes sont sécurisés par une technologie blockchain avancée et vérifiables en temps réel, offrant une totale transparence.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Participation Inclusive</h3>
              <p className="text-gray-600">Notre plateforme est accessible à tous les citoyens d'Agadir sans distinction d'âge, aptitude ou lieu d'habitation.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Impact Mesurable</h3>
              <p className="text-gray-600">Suivez l'évolution des projets votés et leur impact réel sur la vie . Vos votes comptent et nous vous montrons comment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Comment Ça Marche</h2>
          <p className="text-center text-gray-600 mb-12">
            Trois étapes simples pour faire entendre votre voix
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Créez votre compte</h3>
              <p className="text-gray-600">Inscrivez-vous en quelques minutes et vérifiez votre identité pour commencer à participer.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Participez aux initiatives</h3>
              <p className="text-gray-600">Votez sur les projets soumis à la population et proposez vos propres idées.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Suivez les résultats</h3>
              <p className="text-gray-600">Recevez des notifications sur l'avancement des projets et leur impact concret sur votre quotidien.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/how-it-works" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              En savoir plus sur le processus
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">À Propos de SecretBallot</h2>
          <p className="text-center text-gray-600 mb-12">
            Notre mission est de renforcer la démocratie participative et l'engagement citoyen
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              SecretBallot est née de la conviction que chaque citoyen devrait pouvoir participer activement aux décisions qui affectent sa communauté. Notre plateforme utilise des technologies avancées comme la blockchain pour assurer la sécurité et la transparence des votes.
            </p>
            <p className="text-gray-700 mb-4">
              Notre équipe est composée d'experts en technologie et en gouvernance participative, tous dédiés à créer un outil qui permet une véritable démocratie directe au niveau local.
            </p>
            <p className="text-gray-700">
              Nous travaillons en partenariat avec les municipalités et les organisations civiques pour intégrer SecretBallot dans les processus de décision publique et créer un impact positif sur la vie des citoyens.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Contactez-nous</h2>
          <p className="text-center text-gray-600 mb-12">
            Des questions ou suggestions? N'hésitez pas à nous contacter
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-600">contact@secretballot.ma</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
              <p className="text-blue-600">+212 522 123 456</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">123 Avenue Hassan II, Agadir, Maroc</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-blue-600 text-white py-16 mt-auto">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à faire entendre votre voix?</h2>
          <p className="text-blue-100 mb-8">Rejoignez notre communauté et participez aux décisions qui façonnent l'avenir d'Agadir</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50">
              S'inscrire maintenant
            </Link>
            <Link to="/login" className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-500">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
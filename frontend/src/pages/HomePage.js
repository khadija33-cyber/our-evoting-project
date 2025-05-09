"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { electionsApi } from "../services/api"
import ElectionCard from "../components/ElectionCard"
import { useAuth } from "../context/AuthContext"

const HomePage = () => {
  const { isAuthenticated, user } = useAuth()
  const [activeElections, setActiveElections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchActiveElections = async () => {
      try {
        const { data } = await electionsApi.getAll()

        // Filtrer les élections actives
        const now = new Date()
        const active = data.filter((election) => {
          const startDate = new Date(election.startDate)
          const endDate = new Date(election.endDate)
          return now >= startDate && now <= endDate && election.isActive
        })

        setActiveElections(active)
        setLoading(false)
      } catch (error) {
        console.error("Erreur de récupération des élections:", error)
        setError("Impossible de charger les élections actives")
        setLoading(false)
      }
    }

    fetchActiveElections()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Bienvenue dans Secret Ballot</h1>
          <p className="text-xl opacity-90">Une plateforme sécurisée et transparente pour les élections en ligne</p>
        </div>
      </div>

      {/* User Welcome - Only shown when logged in */}
      {isAuthenticated && (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-green-700">Bonjour, {user?.firstName || "Utilisateur"}</h2>
              <p className="text-green-600">Vous êtes maintenant connecté et prêt à participer aux élections.</p>
            </div>
            <Link to="/elections" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Voir les élections
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi voter en ligne ?</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Accessibilité pour tous les électeurs</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Résultats rapides et précis</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Sécurité et transparence garanties</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Comment ça marche ?</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Créez un compte avec vos informations personnelles</li>
            <li>Parcourez les élections actives</li>
            <li>Sélectionnez votre candidat préféré</li>
            <li>Confirmez votre vote</li>
            <li>Recevez une confirmation sécurisée</li>
          </ol>
        </div>
      </div>

      {/* Available After Login Section */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">Fonctionnalités disponibles après connexion</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-blue-600 text-center text-3xl mb-2">🗳️</div>
            <h3 className="text-lg font-semibold text-center">Voter en toute sécurité</h3>
            <p className="text-sm text-gray-600 text-center">Participez aux élections avec un système sécurisé</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-blue-600 text-center text-3xl mb-2">📊</div>
            <h3 className="text-lg font-semibold text-center">Consulter les résultats</h3>
            <p className="text-sm text-gray-600 text-center">Accédez aux résultats en temps réel</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-blue-600 text-center text-3xl mb-2">👤</div>
            <h3 className="text-lg font-semibold text-center">Gérer votre profil</h3>
            <p className="text-sm text-gray-600 text-center">Consultez votre historique de vote</p>
          </div>
        </div>
        
        {!isAuthenticated && (
          <div className="flex justify-center gap-4 mt-6">
            <Link to="/register" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded">
              S'inscrire maintenant
            </Link>
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Se connecter
            </Link>
          </div>
        )}
      </div>

      {/* Active Elections Section - Only shown when there are elections */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Élections en cours</h2>
          <Link to="/elections" className="text-blue-600 hover:underline">
            Voir toutes les élections
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded">{error}</div>
        ) : activeElections.length === 0 ? (
          <div className="bg-gray-100 p-8 text-center rounded">
            <p className="text-xl text-gray-600">Aucune élection active en ce moment</p>
            <Link to="/elections" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Voir les élections à venir
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {activeElections.map((election) => (
              <ElectionCard key={election._id} election={election} />
            ))}
          </div>
        )}
      </div>

      {/* Results Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Résultats de dernière élection</h2>
        
        {/* Sélecteur d'élection */}
        <div className="flex justify-end mb-4">
          <div className="w-64">
            <label htmlFor="electionSelect" className="block text-sm font-medium text-gray-700 mb-1">
              Choisir une élection:
            </label>
            <select
              id="electionSelect"
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              defaultValue="legislatives-2025"
            >
              <option value="legislatives-2025">Élections législatives 2025</option>
              <option value="communales-2024">Élections communales 2024</option>
              <option value="regionales-2023">Élections régionales 2023</option>
            </select>
          </div>
        </div>
        
        {/* Graphique des résultats */}
        <div className="rounded-lg overflow-hidden">
          <div className="bg-white rounded-lg">
            {/* Bande titre en haut */}
            <div className="bg-blue-700 py-3 px-6">
              <h3 className="text-white text-xl font-bold">Élections législatives 2025 - Résultats après dépouillement</h3>
            </div>
            
            {/* Contenu du graphique */}
            <div className="bg-blue-600 p-10 pt-20 pb-16">
              <div className="flex justify-around items-end h-60">
                {/* Candidat 1 */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 w-32 h-12 flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xl">37,4%</span>
                  </div>
                  <div className="text-white font-semibold text-center">
                    <div>Aziz Akhannouch</div>
                    <div className="text-sm opacity-90">RNI - 11 782 votes</div>
                  </div>
                </div>
                
                {/* Candidat 2 */}
                <div className="flex flex-col items-center">
                  <div className="bg-blue-400 w-32 h-12 flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xl">28,3%</span>
                  </div>
                  <div className="text-white font-semibold text-center">
                    <div>Abdellatif Ouahbi</div>
                    <div className="text-sm opacity-90">PAM - 8 913 votes</div>
                  </div>
                </div>
                
                {/* Candidat 3 */}
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-500 w-32 h-12 flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xl">20,5%</span>
                  </div>
                  <div className="text-white font-semibold text-center">
                    <div>Nizar Baraka</div>
                    <div className="text-sm opacity-90">Istiqlal - 6 459 votes</div>
                  </div>
                </div>
                
                {/* Candidat 4 */}
                <div className="flex flex-col items-center">
                  <div className="bg-red-500 w-32 h-12 flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xl">13,8%</span>
                  </div>
                  <div className="text-white font-semibold text-center">
                    <div>Driss Lachgar</div>
                    <div className="text-sm opacity-90">USFP - 4 348 votes</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Données de participation en bas */}
            <div className="bg-blue-700 py-2 px-6 flex justify-between text-sm text-white">
              <p>Participation: 75,6%</p>
              <p>Votes exprimés: 31 502</p>
              <p>Abstention: 24,4%</p>
              <p>Secret Ballot • 15/03/2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage


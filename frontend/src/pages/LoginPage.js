"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { toast } from "react-toastify"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Redirect to /home by default instead of / (landing page)
  const from = location.state?.from?.pathname || "/home"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { success, message, needsVerification } = await login(formData.email, formData.password)

      if (success) {
        toast.success("Connexion réussie")
        navigate(from, { replace: true })
      } else if (needsVerification) {
        // Rediriger vers la page de vérification OTP
        navigate(`/verify-otp`, {
          state: {
            email: formData.email,
            otpCode: message.otpCode,
          },
        })
      } else {
        setError(message)
        toast.error(message)
      }
    } catch (error) {
      console.error("Erreur de connexion:", error)

      // Vérifier si l'utilisateur doit vérifier son compte
      if (error.response?.data?.needsVerification) {
        // Rediriger vers la page de vérification OTP avec les informations nécessaires
        navigate("/verify-otp", {
          state: {
            email: formData.email,
            otpCode: error.response.data.otpCode,
          },
        })
        return
      }

      // Gérer spécifiquement les erreurs de timeout
      if (error.code === "ECONNABORTED") {
        setError("La connexion au serveur a pris trop de temps. Veuillez réessayer.")
        toast.error("Délai d'attente dépassé. Veuillez réessayer.")
      } else {
        setError("Une erreur est survenue lors de la connexion")
        toast.error("Une erreur est survenue lors de la connexion")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Connexion</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    Connexion en cours...
                  </div>
                ) : (
                  "Se connecter"
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Pas encore de compte ?{" "}
              <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                S'inscrire ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

import { useSearchParams, Navigate } from "react-router-dom"

function RedirectWithUTM() {
  const [searchParams] = useSearchParams()
  const params = new URLSearchParams()

  if (searchParams.get("src"))
    params.append("utm_source", searchParams.get("src"))
  if (searchParams.get("rec"))
    params.append("utm_medium", searchParams.get("rec"))
  if (searchParams.get("corp"))
    params.append("utm_campaign", searchParams.get("corp"))

  return <Navigate to={`/?${params.toString()}`} />
}

export default RedirectWithUTM

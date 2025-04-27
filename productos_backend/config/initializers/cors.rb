Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # Permite todas las solicitudes (en producción, especifica el dominio del frontend)
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
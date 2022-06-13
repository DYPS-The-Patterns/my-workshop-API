Feature: Buscar talleres y ver su información
  Como usuario quiero encontrar talleres y ver su información para ahorrarme tiempo en elegir el más adecuado

  Scenario: El usuario desea encontrar talleres con su información del servicio.

    Given que el usuario haya entrado en la aplicación
    And que el usuario quiere buscar los talleres más cercanos en el apartado "Buscar por ubicacion".
    And el usuario tiene la opción "Ubicacion" encendida

    Then la aplicación muestra una lista de <workshops_nearby> junto con la información de <workshop_services>.

    Examples:
      | workshops_nearby | workshop_service |
      | El taller de Santo Domingo  | Ajuste de suspensiones|
      | Ferre CarWash | Limpieza de interior|



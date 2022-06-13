Feature: Buscar talleres y ver su información
  Como usuario quiero encontrar talleres y ver su información para ahorrarme tiempo en elegir el más adecuado

  Scenario: El usuario desea encontrar talleres con su información del servicio.

    Given que el usuario haya entrado en la aplicación
    And que el usuario quiere buscar los talleres más cercanos a su ubicación
    And el usuario tiene la opción de ubicación encendido

    When termine de completar sus <username>, <name>, <email> y <password>

    Then la aplicación envía un poppup de confirmación y tu <data_access>

    Examples:
      | username | name | email | password | data_access |
      | Gitman2020  | Ernesto Belaude | ernesto_beto1997@outlook.com  | 342050
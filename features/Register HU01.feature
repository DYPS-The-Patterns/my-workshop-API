Feature: Registrar nuevo usuario
  Como usuario quiero registrarme en la app para usar sus funcionalidades

  Scenario: El usuario desea registrarse en la aplicación

    Given que el usuario haya entrado a la aplicacion
    And un usuario que todavía no está registrado en la app

    When termine de completar sus <username>, <name>, <email> y <password>

    Then la aplicación envía un poppup de confirmación y tu <data_access>

    Examples:
      | username | name | email | password | data_access |
      | Gitman2020  | Ernesto Belaude | ernesto_beto1997@outlook.com  | 342050

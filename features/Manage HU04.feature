Feature: Reservación y gestión de cita
  Como usuario quiero reservar y gestionar una cita para tener una mejor organización.

  Scenario: El usuario quiere reservar una cita en la aplicación.

    Given que el usuario quiere reservar una cita con un taller.
    And el usuario rellene los campos con los datos <appointment_data> para la reservación

    Then la aplicación muestra en una ventana emergente <res_state> y <res_data>.

    Examples:
      | appointment_data | res_state | res_data |
      | 10/05 , Tarde , Ajuste de embrague , Toyota Corolla | Disponible| 10/05 12:00 pm - 2:00 pm , 4:00 pm - 6:00 pm |


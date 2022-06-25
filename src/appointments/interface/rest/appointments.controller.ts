import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppointmentsService } from '../../domain/services/appointments.service';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Appointment } from '../../domain/entities/appointment.model';
import { AppointmentDto } from '../../application/transform/dto/appointment.dto';
import { CreateAppointmentDto } from '../../application/transform/dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../../application/transform/dto/update-appointment.dto';
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Appointments")
@Controller('api/v1/appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentsService: AppointmentsService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  @Get()
  async getAllAppointments() {
    const appointments = await this.appointmentsService.getAll();
    const resources = appointments.map((appointment) =>
      this.mapper.map(appointment, Appointment, AppointmentDto),
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointments fetched successfully',
      appointments: resources,
    };
  }

  @Post()
  async createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
    const appointment = this.mapper.map(
      createAppointmentDto,
      CreateAppointmentDto,
      Appointment,
    );
    console.log(appointment);
    const result = await this.appointmentsService.create(appointment);
    const resource = this.mapper.map(appointment, Appointment, AppointmentDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Appointment created successfully',
      appointment: resource,
    };
  }

  @Get(':id')
  async getAppointmentById(@Param('id') id: number) {
    const appointment = await this.appointmentsService.getById(id);
    const resource = this.mapper.map(appointment, Appointment, AppointmentDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointment fetched successfully',
      appointment: resource,
    };
  }

  @Put(':id')
  async updateAppointment(
    @Param('id') id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    const appointment = this.mapper.map(
      updateAppointmentDto,
      UpdateAppointmentDto,
      Appointment,
    );
    const result = await this.appointmentsService.update(id, appointment);
    const resource = this.mapper.map(result, Appointment, AppointmentDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointment updated successfully',
      appointment: resource,
    };
  }

  @Patch(':id')
  async partiallyUpdateAppointment(
    @Param('id') id: number,
    @Body() updateAppointmentDto: Partial<UpdateAppointmentDto>,
  ) {
    const appointment = this.mapper.map(
      updateAppointmentDto,
      UpdateAppointmentDto,
      Appointment,
    );
    const result = await this.appointmentsService.update(id, appointment);
    const resource = this.mapper.map(result, Appointment, AppointmentDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointment updated successfully',
      appointment: resource,
    };
  }

  @Delete(':id')
  async deleteAppointment(@Param('id') id: number) {
    await this.appointmentsService.delete(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: 'Appointment deleted successfully',
    };
  }
}
